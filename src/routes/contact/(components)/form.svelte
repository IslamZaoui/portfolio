<script context="module" lang="ts">
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
</script>

<script lang="ts">
	import { defaults, superForm } from 'sveltekit-superforms';
	import { Textarea } from '$lib/components/ui/textarea';
	import * as Form from '@/components/ui/form';
	import { Input } from '@/components/ui/input';
	import { zod } from 'sveltekit-superforms/adapters';
	import { getFlash } from 'sveltekit-flash-message';
	import SendIcon from 'lucide-svelte/icons/send-horizontal';
	import Loading from 'lucide-svelte/icons/loader-circle';
	import { page } from '$app/stores';
	import * as m from '@i18n';
	import Button from '@/components/ui/button/button.svelte';

	const flash = getFlash(page);

	const data = defaults(zod(contactSchema));

	const form = superForm<ContactForm, { status: number; text: string }>(data, {
		SPA: true,
		resetForm: true,
		clearOnSubmit: 'errors-and-message',
		validators: zod(contactSchema),
		async onUpdate({ form }) {
			if (!form.valid) return;
			try {
				const response = await fetch(`/apis/contact`, {
					method: 'POST',
					body: JSON.stringify(form.data)
				});

				if (response.ok)
					$flash = {
						type: 'success',
						message: m.MESSAGE_SENT()
					};
				else
					$flash = {
						type: 'error',
						message: m.MESSAGE_ERROR()
					};
			} catch (e) {
				$flash = {
					type: 'error',
					message: m.MESSAGE_ERROR()
				};
			}
		}
	});

	const { form: formData, enhance, delayed } = form;
</script>

<form use:enhance method="post" class="flex w-full flex-col gap-4">
	<div class="flex w-full flex-col gap-4 md:flex-row">
		<Form.Field {form} name="name" class="group w-full rounded-xl bg-muted p-3">
			<Form.Control let:attrs>
				<Form.Label class="pl-3">{m.NAME()}</Form.Label>
				<Input
					class="border-none bg-muted focus-visible:ring-0 focus-visible:ring-card focus-visible:ring-offset-0"
					{...attrs}
					bind:value={$formData.name}
				/>
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Field {form} name="email" class="w-full rounded-xl bg-muted p-3">
			<Form.Control let:attrs>
				<Form.Label class="pl-3">{m.EMAIL()}</Form.Label>
				<Input
					class="border-none bg-muted focus-visible:ring-0 focus-visible:ring-card focus-visible:ring-offset-0"
					{...attrs}
					bind:value={$formData.email}
				/>
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
	</div>
	<Form.Field {form} name="subject" class="rounded-xl bg-muted p-3">
		<Form.Control let:attrs>
			<Form.Label class="pl-3">{m.SUBJECT()}</Form.Label>
			<Input
				class="border-none bg-muted focus-visible:ring-0 focus-visible:ring-card focus-visible:ring-offset-0"
				{...attrs}
				bind:value={$formData.subject}
			/>
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="message" class="rounded-xl bg-muted p-3">
		<Form.Control let:attrs>
			<Form.Label class="pl-3">{m.MESSAGE()}</Form.Label>
			<Textarea
				rows={7}
				cols={0}
				class="border-none bg-muted focus-visible:ring-0 focus-visible:ring-card focus-visible:ring-offset-0"
				{...attrs}
				bind:value={$formData.message}
			/>
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Button
		title="send message"
		dir="ltr"
		type="submit"
		disabled={$delayed}
		class="w-[150px] space-x-2 rounded-xl"
	>
		{#if $delayed}
			<Loading class="animate-spin" />
		{:else}
			<SendIcon />
		{/if}
		<span>{m.SEND()}</span>
	</Button>
</form>
