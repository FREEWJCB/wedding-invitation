import { confirmInvitation } from '@/actions/invitations';
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
    const code = formData.get('code') as string;
    const invitees: ConfirmInvitee[] = [];
    const escorts: Omit<ConfirmEscort, 'id'>[] = [];
    const has_choosen_driver = formData.get('has_choosen_driver') as string;
    const contact_phone = formData.get('contact_phone') as string;
    const guest_message = formData.get('guest_message') as string;

    // Obtener invitees
    let i = 0;
    while (formData.has(`inviteesfull_name${i}`)) {
        invitees.push({
            full_name: formData.get(`inviteesfull_name${i}`) as string,
            allergy_info: formData.get(`inviteesallergy_info${i}`) as string || undefined,
            id: formData.get(`inviteesid${i}`) as string
        });
        i++;
    }

    // Obtener escorts
    i = 0;
    while (formData.has(`escortsfull_name${i}`)) {
        escorts.push({
            full_name: formData.get(`escortsfull_name${i}`) as string,
            allergy_info: formData.get(`escortsallergy_info${i}`) as string || undefined,
        });
        i++;
    }

    const att = {
        code,
        invitees,
        escorts,
        has_choosen_driver: has_choosen_driver === 'true',
        contact_phone,
        guest_message,
    };
    await confirmInvitation(att)
    return att
}
