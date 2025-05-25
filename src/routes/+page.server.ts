import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import { contactSchema } from '@/schema';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	return {
		form: await superValidate(event, zod(contactSchema))
	};
};
