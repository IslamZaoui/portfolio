import type { Handle } from '@sveltejs/kit';

import { error } from '@sveltejs/kit';
import { PUBLIC_SITE_URL } from '$env/static/public';

export const handler: Handle = async ({ event, resolve }) => {
	if (event.request.method !== 'GET') {
		const origin = event.request.headers.get('Origin');
		if (origin === null || origin !== PUBLIC_SITE_URL) {
			return error(403, 'Not allowed');
		}
	}
	return resolve(event);
};
