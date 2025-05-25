<script lang="ts">
	import type { Infer, SuperValidated } from 'sveltekit-superforms/client';

	import Loading from '@lucide/svelte/icons/loader-circle';
	import SendIcon from '@lucide/svelte/icons/send-horizontal';
	import { zod } from 'sveltekit-superforms/adapters';
	import { superForm } from 'sveltekit-superforms/client';

	import type { RecaptchaStatus } from '@/components/recaptcha.svelte';

	import Recaptcha from '@/components/recaptcha.svelte';
	import Button from '@/components/ui/button/button.svelte';
	import * as Form from '@/components/ui/form';
	import { Input } from '@/components/ui/input';
	import { Textarea } from '@/components/ui/textarea';
	import { contactSchema } from '@/schema';

	import ContactAlert from './contact-alert.svelte';

	const { data }: { data: { form: SuperValidated<Infer<typeof contactSchema>> } } = $props();

	const form = superForm(data.form, {
		validators: zod(contactSchema)
	});

	const { form: formData, enhance, delayed, message } = form;

	let recaptchaStatus: RecaptchaStatus | undefined = $state(undefined);

	function onStatusChange(v: RecaptchaStatus) {
		recaptchaStatus = v;
	}
</script>

<form use:enhance method="post" action="/api/contact" class="flex w-full flex-col gap-4">
	{#if $message}
		<ContactAlert {...$message} />
	{/if}

	<div class="flex w-full flex-col gap-4 md:flex-row">
		<Form.Field {form} name="name" class="group bg-muted w-full rounded-xl p-3">
			<Form.Control>
				{#snippet children({ props })}
					<Form.Label>Your Fullname</Form.Label>
					<Input
						class="bg-muted focus-visible:ring-card border-none focus-visible:ring-0 focus-visible:ring-offset-0"
						autocomplete="name"
						{...props}
						bind:value={$formData.name}
					/>
				{/snippet}
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="email" class="bg-muted w-full rounded-xl p-3">
			<Form.Control>
				{#snippet children({ props })}
					<Form.Label>Your Email</Form.Label>
					<Input
						autocomplete="email"
						class="bg-muted focus-visible:ring-card border-none focus-visible:ring-0 focus-visible:ring-offset-0"
						{...props}
						bind:value={$formData.email}
					/>
				{/snippet}
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
	</div>

	<Form.Field {form} name="subject" class="bg-muted rounded-xl p-3">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>Subject</Form.Label>
				<Input
					class="bg-muted focus-visible:ring-card border-none focus-visible:ring-0 focus-visible:ring-offset-0"
					{...props}
					bind:value={$formData.subject}
				/>
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="message" class="bg-muted rounded-xl p-3">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>Message</Form.Label>
				<Textarea
					rows={7}
					cols={0}
					class="bg-muted focus-visible:ring-card border-none focus-visible:ring-0 focus-visible:ring-offset-0"
					{...props}
					bind:value={$formData.message}
				/>
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<div class="flex w-full justify-between">
		<Button
			title="send message"
			type="submit"
			disabled={$delayed || recaptchaStatus !== 'success'}
			class="w-[150px] space-x-2 rounded-xl"
		>
			{#if $delayed}
				<Loading class="animate-spin" />
			{:else}
				<SendIcon />
			{/if}
			<span>Submit</span>
		</Button>

		<Recaptcha {onStatusChange} bind:token={$formData['g-recaptcha-response']} />
	</div>
</form>
