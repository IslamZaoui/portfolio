import { z } from 'zod';

export const contactSchema = z.object({
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
		.max(100, { message: 'Subject must be less than 100 characters' })
		.trim()
});

export type ContactForm = typeof contactSchema;
