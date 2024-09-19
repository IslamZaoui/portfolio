import type { RequestHandler } from './$types';
import { contactSchema } from '@/schemas/contact';
import { actionResult, superValidate } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';
import { setFlash } from 'sveltekit-flash-message/server';
import { STATIC_FORM_KEY } from '$env/static/private';
import * as m from '@i18n';
import { languageTag as lang } from '@/paraglide/runtime';
import { contactRateLimiter } from '@/server/rate-limiter';

export const GET: RequestHandler = () => {
	return new Response('This is an API endpoint for sending a contact form.');
}

export const POST: RequestHandler = async (event) => {
	function responseSonner(type: 'API_KEY_NOT_FOUND' | 'SUCCESS' | 'ERROR' | 'FORM_NOT_VALID' | 'RATE_LIMITED') {
		const languageTag = lang();
		const messages = {
			'API_KEY_NOT_FOUND': m.API_KEY_NOT_FOUND({}, { languageTag }),
			'SUCCESS': m.SUBMIT_SUCCESS({}, { languageTag }),
			'ERROR': m.SUBMIT_ERROR({}, { languageTag }),
			'FORM_NOT_VALID': m.FORM_NOT_VALID({}, { languageTag }),
			'RATE_LIMITED': m.RATE_LIMITED({}, { languageTag })
		};
		setFlash({ type: type === 'SUCCESS' ? 'success' : 'error', message: messages[type] }, event);
	}

	const isRateLimited = await contactRateLimiter.isLimited(event);
	if (isRateLimited) {
		responseSonner('RATE_LIMITED');
		return actionResult("error", { form: null });
	}

	if (!STATIC_FORM_KEY) {
		responseSonner('API_KEY_NOT_FOUND');
		return actionResult("error", { form: null });
	}

	const form = await superValidate(event, zod(contactSchema));
	if (!form.valid) {
		responseSonner('FORM_NOT_VALID');
		return actionResult('failure', { form });
	}

	const staticFormData = {
		...form.data,
		accessKey: STATIC_FORM_KEY,
		replyTo: '@'
	};

	try {
		const response = await fetch('https://api.staticforms.xyz/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(staticFormData)
		});

		if (!response.ok) {
			const errorMessage = await response.text();
			console.error('Submission failed:', errorMessage);
			responseSonner('ERROR');
			return actionResult("error", { form });
		}

		responseSonner('SUCCESS');
		return actionResult("success", { form });
	} catch (e) {
		console.error('Fetch error:', e);
		responseSonner('ERROR');
		return actionResult("error", { form });
	}
};