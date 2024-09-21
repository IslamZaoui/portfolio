import { getPosts } from '@/index';
import type { RequestHandler } from './$types';
import { error } from '@sveltejs/kit';
import { languageTag } from '@/paraglide/runtime.js';

export const prerender = true;

export const GET: RequestHandler = async () => {
	try {
		const posts = getPosts(languageTag());
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
