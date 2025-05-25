import { z } from 'zod';

export const contactSchema = z.object({
	name: z
		.string()
		.trim()
		.min(1, 'Your name is required')
		.max(70, 'Your name must be less than 20 characters')
		.regex(/^[a-z\s]+$/i, 'Your name must only contain letters'),
	email: z.string({ required_error: 'Your email is required' }).email('Invalid email'),
	subject: z
		.string()
		.trim()
		.min(1, 'Subject is required')
		.max(50, { message: 'Subject must be less than 100 characters' }),
	message: z.string().trim().min(1, 'Message is required'),
	'g-recaptcha-response': z.string().trim().min(1, 'g-recaptcha-response is required')
});

export type ContactForm = z.infer<typeof contactSchema>;
