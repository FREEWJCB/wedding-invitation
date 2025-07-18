import {confirmInvitation} from '@/actions/invitations';
import {ConfirmEscort, ConfirmInvitee} from '@/types/models/invitee';
// import { redirect } from 'next/navigation';
export interface RSVPFormData {
    code: string
    invitees: ConfirmInvitee[]
    escorts: ConfirmEscort[]
    has_choosen_driver: string
    contact_phone?: string
    guest_message?: string
}
export default async function Update(formData: FormData) {
    const atts: Promise<RSVPFormData> = new Promise((resolve) => {
        const code = formData.get('code') as string;
        const invitees: Omit<ConfirmInvitee, 'id'>[] = [];
        const escorts: Omit<ConfirmEscort, 'id'>[] = [];
        const has_choosen_driver = formData.get('has_choosen_driver') as string;
        const contact_phone = formData.get('contact_phone') as string;
        const guest_message = formData.get('guest_message') as string;

        for (let i = 0; i < formData.getAll('invitees').length; i++) {
            invitees.push({
                full_name: formData.get(`invitees[${i}].full_name`) as string,
                allergy_info: formData.get(`invitees[${i}].allergy_info`) as string,
            });
        }

        for (let i = 0; i < formData.getAll('escorts').length; i++) {
            escorts.push({
                full_name: formData.get(`escorts[${i}].full_name`) as string,
                allergy_info: formData.get(`escorts[${i}].allergy_info`) as string,
            });
        }

        resolve({
            code,
            invitees: invitees as ConfirmInvitee[],
            escorts: escorts as ConfirmEscort[],
            has_choosen_driver,
            contact_phone,
            guest_message
        });
    });
    const request = await atts;
    const att = {
        code: request.code,
        invitees: request.invitees,
        escorts: request.escorts,
        has_choosen_driver: request.has_choosen_driver === 'true',
        contact_phone: request.contact_phone,
        guest_message: request.guest_message,
    }
    console.log('Confirming invitation with data:', att);
    await confirmInvitation(att)
    // redirect(`/invitation/${request.code}`)
}