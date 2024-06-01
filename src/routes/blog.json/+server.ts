import { getPosts } from '@/index';
import type { RequestHandler } from './$types';
import { error } from '@sveltejs/kit';

export const prerender = true;

export const GET: RequestHandler = async ({
	locals: {
		paraglide: { lang }
	}
}) => {
	try {
		const posts = getPosts(lang);
		return new Response(JSON.stringify(posts), {
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch (err) {
		console.log(err);
		return error(500, 'Faild to load posts');
	}
};
