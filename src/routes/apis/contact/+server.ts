import { env } from '$env/dynamic/private';
import config from '@config';
import type { RequestHandler } from './$types';
import { z } from 'zod';

const contactSchema = z.object({
	name: z
		.string({ required_error: 'Name is required' })
		.min(3, { message: 'Name must be at least 3 characters' })
		.max(20, { message: 'Name must be less than 20 characters' })
		.regex(/^[a-zA-Z\s]+$/, { message: 'Name must only contain letters' })
		.trim(),
	email: z.string({ required_error: 'Email is required' }).email({ message: 'Invalid email' }),
	message: z
		.string({ required_error: 'Message is required' })
		.max(255, { message: 'Message must be less than 255 characters' })
		.min(10, { message: 'Message must be at least 10 characters' })
		.trim(),
	subject: z
		.string({ required_error: 'Subject is required' })
		.min(3, { message: 'Subject must be at least 3 characters' })
		.max(20, { message: 'Subject must be less than 40 characters' })
		.trim()
});

type ContactForm = z.infer<typeof contactSchema>;

export const POST: RequestHandler = async ({ request, fetch }) => {
	const data = (await request.json()) as ContactForm;
	const result = await contactSchema.safeParseAsync(data);
	if (!result.success) {
		return new Response(JSON.stringify({ errors: result.error.errors }), { status: 400 });
	}

	const from = {
		...result.data,
		accessKey: env.STATIC_FORM_KEY,
		replyTo: '@'
	};

	try {
		const response = await fetch('https://api.staticforms.xyz/submit', {
			method: 'POST',
			body: JSON.stringify(from),
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		});
		return new Response(response.statusText, { status: response.status });
	} catch (error) {
		return new Response(JSON.stringify({ error }), { status: 500 });
	}
};
