import { ConfirmEscort, ConfirmInvitee, CreateInvitee, Invitee } from "./invitee";

export interface Invitation {
    code: string;
    count: number;
    escorts: number;
    couple_message: string;
    guest_message?: string | undefined;
    contact_phone?: string | undefined;
    confirmed: boolean;
    has_choosen_driver: boolean;
    updated_at: string;
}

export interface CreateInvitation extends Omit<Invitation, 'guest_message' | 'contact_phone' | 'confirmed' | 'has_choosen_driver' | 'updated_at'> {
    invitees: CreateInvitee[];
}

export interface InvitationWithInvitees extends Invitation {
    invitees: Invitee[];
}

export interface ConfirmInvitation extends Omit<Invitation, 'count' | 'escorts' | 'couple_message' | 'confirmed' | 'updated_at'> {
    invitees: ConfirmInvitee[];
    escorts: ConfirmEscort[];
}
