import { getPosts } from '@/index';
import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = async () => {
	try {
		return new Response(JSON.stringify(getPosts()), {
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch (error) {
		return new Response(JSON.stringify(error), {
			status: 500,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
};

export async function entries() {
	return [{ lang: 'en' }, { lang: 'ar' }];
}