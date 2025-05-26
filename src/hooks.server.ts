import type { Handle } from '@sveltejs/kit';

import { url } from '@/data';

export const handler: Handle = async ({ event, resolve }) => {
	if (event.request.method !== 'GET') {
		const origin = event.request.headers.get('Origin');
		if (!origin || new URL(origin).origin !== new URL(url).origin) {
			return new Response('Not allowed', {
				status: 403,
				headers: {
					'Content-Type': 'text/plain'
				}
			});
		}
	}

	return resolve(event);
};
