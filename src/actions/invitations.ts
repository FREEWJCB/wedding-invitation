'use server';

import { NotFoundException } from '@/types/exceptions/no-found';
import {
    ConfirmInvitation,
    // CreateInvitation,
    Invitation,
    InvitationWithInvitees,
} from '@/types/models/invitation';
import {
    // CreateInvitee,
    Invitee,
} from '@/types/models/invitee';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
  DynamoDBDocumentClient,
  GetCommand,
//   PutCommand,
  BatchWriteCommand,
  QueryCommand,
  UpdateCommand,
} from '@aws-sdk/lib-dynamodb';
import { v4 as uuidv4 } from 'uuid';

const client = new DynamoDBClient({
    profile: 'baquero',
    region: 'us-east-1',
});
const ddb = DynamoDBDocumentClient.from(client);

const INVITATIONS_TABLE_NAME = 'invitations';
const INVITEES_TABLE_NAME = 'invitees';
const INVITEES_GSI_NAME = 'invitees_by_invitation_code';

// // Do not use this function in production, it is only for local development
// export const createInvitation = async (request: CreateInvitation): Promise<InvitationWithInvitees> => {
//     const { invitees, ...invitation } = request;
//     const invitationCode = invitation.code;
//     const now = new Date().toISOString();

//     // Create the invitation item
//     const invitationItem: Invitation = {
//         ...invitation,
//         confirmed: false,
//         has_choosen_driver: false,
//         updated_at: now,
//     };

//     // Create the invitees items
//     const inviteesItems = invitees.map<Invitee>((invitee: CreateInvitee) => ({
//         ...invitee,
//         id: uuidv4(),
//         invitation_code: invitationCode,
//         updated_at: now,
//     }));

//     // Execute the batch write operations
//     await ddb.send(new PutCommand({
//         TableName: INVITATIONS_TABLE_NAME,
//         Item: invitationItem,
//     }));
//     await ddb.send(new BatchWriteCommand({
//         RequestItems: {
//             [INVITEES_TABLE_NAME]: inviteesItems.map((item) => ({ 
//                 PutRequest: {
//                     Item: item,
//                 },
//             })),
//         },
//     }));

//     // Prepare response
//     const response: InvitationWithInvitees = {
//         ...invitationItem,
//         invitees: inviteesItems,
//     };

//     return response;
// }

export const getInvitation = async (code: string): Promise<InvitationWithInvitees> => {
    // Get the invitation by code
    const invitationResult = await ddb.send(new GetCommand({
        TableName: INVITATIONS_TABLE_NAME,
        Key: { code },
    }));

    const invitation = invitationResult.Item as Invitation | undefined;
    // If the invitation is not found, throw a NotFoundException
    if (!invitation) {
        throw new NotFoundException(`Invitation with code ${code} not found`);
    }

    // Get the invitees for the invitation
    // Using a GSI to query invitees by invitation code
    const inviteesResult = await ddb.send(
        new QueryCommand({
            TableName: INVITEES_TABLE_NAME,
            IndexName: INVITEES_GSI_NAME,
            KeyConditionExpression: 'invitation_code = :code',
            ExpressionAttributeValues: {
                ':code': code,
            },
        })
    );

    const invitees = (inviteesResult.Items ?? []) as Invitee[];

    // Prepare response
    const response: InvitationWithInvitees = {
        ...invitation,
        invitees,
    };

    return response;
};

export const confirmInvitation = async (request: ConfirmInvitation): Promise<InvitationWithInvitees> => {
    const { code, invitees: principalInvitees, escorts: newEscorts, ...invitationAttributes } = request;
    const now = new Date().toISOString();

    // Get the invitation by code
    const invitation = await getInvitation(code);

    // Validate limits before proceeding
    const escortCount = newEscorts.length;
    const totalInvitees = principalInvitees.length + escortCount;

    // Validate that the limits are not exceeded
    if (escortCount > invitation.escorts) {
        throw new Error(`Cannot add ${escortCount} escorts. Maximum allowed: ${invitation.escorts}`);
    }

    if (principalInvitees.length > invitation.count) {
        throw new Error(`Total invitees (${totalInvitees}) exceeds invitation limit (${invitation.count})`);
    }

    // Update invitation attributes
    const updatedInvitation: Invitation = {
        ...invitation,
        ...invitationAttributes,
        confirmed: true,
        updated_at: now,
    };

    await ddb.send(new UpdateCommand({
        TableName: INVITATIONS_TABLE_NAME,
        Key: { code },
        UpdateExpression: 'SET guest_message = :guest_message, contact_phone = :contact_phone, has_choosen_driver = :has_choosen_driver, confirmed = :confirmed, updated_at = :updated_at',
        ExpressionAttributeValues: {
            ':guest_message': updatedInvitation.guest_message,
            ':contact_phone': updatedInvitation.contact_phone,
            ':has_choosen_driver': updatedInvitation.has_choosen_driver,
            ':confirmed': updatedInvitation.confirmed,
            ':updated_at': updatedInvitation.updated_at,
        },
    }));

    // Process guests
    const existingInvitees = invitation.invitees;
    const existingPrincipals = existingInvitees.filter(i => !i.is_escort);
    const existingEscorts = existingInvitees.filter(i => i.is_escort);

    // Delete all existing escorts
    if (existingEscorts.length > 0) {
        await ddb.send(new BatchWriteCommand({
            RequestItems: {
                [INVITEES_TABLE_NAME]: existingEscorts.map(escort => ({
                    DeleteRequest: { Key: { id: escort.id } }
                })),
            },
        }));
    }

    // Update primary guests (full_name and allergy_info only)
    const updatedPrincipals: Invitee[] = [];
    for (const updatingInvitee of principalInvitees) {
        const existingInvitee = existingPrincipals.find(i => i.id === updatingInvitee.id);
        if (existingInvitee) {
            const updatedInvitee: Invitee = {
                ...existingInvitee,
                full_name: updatingInvitee.full_name,
                allergy_info: updatingInvitee.allergy_info,
                updated_at: now,
            };

            await ddb.send(new UpdateCommand({
                TableName: INVITEES_TABLE_NAME,
                Key: { id: updatingInvitee.id },
                UpdateExpression: 'SET full_name = :full_name, allergy_info = :allergy_info, updated_at = :updated_at',
                ExpressionAttributeValues: {
                    ':full_name': updatedInvitee.full_name,
                    ':allergy_info': updatedInvitee.allergy_info,
                    ':updated_at': updatedInvitee.updated_at,
                },
            }));

            updatedPrincipals.push(updatedInvitee);
        }
    }

    // Create new escorts
    const newEscortInvitees: Invitee[] = newEscorts.map(escort => ({
        id: uuidv4(),
        invitation_code: code,
        full_name: escort.full_name,
        allergy_info: escort.allergy_info,
        is_escort: true,
        updated_at: now,
    }));

    if (newEscortInvitees.length > 0) {
        await ddb.send(new BatchWriteCommand({
            RequestItems: {
                [INVITEES_TABLE_NAME]: newEscortInvitees.map(escort => ({
                    PutRequest: { Item: escort }
                })),
            },
        }));
    }

    // Prepare response
    const finalInvitees = [...updatedPrincipals, ...newEscortInvitees];

    const response: InvitationWithInvitees = {
        ...updatedInvitation,
        invitees: finalInvitees,
    };

    return response;
};
