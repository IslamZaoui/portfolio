import { superValidate } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';
import { contactSchema } from '@/schemas/contact';

export const load = (async () => {
    return {
        form: await superValidate(zod(contactSchema))
    };
});