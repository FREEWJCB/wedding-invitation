export interface Invitee {
    id: string;
    invitation_code: string;
    full_name: string;
    is_escort: boolean;
    allergy_info?: string | undefined;
    updated_at: string;
}

export interface CreateInvitee extends Omit<Invitee, 'id' | 'invitation_code' | 'updated_at'> {}

export interface ConfirmInvitee extends Omit<Invitee, 'invitation_code' | 'is_escort' | 'updated_at'> {}
export interface ConfirmEscort extends Omit<Invitee, 'id' | 'invitation_code' | 'is_escort' | 'updated_at'> {}
