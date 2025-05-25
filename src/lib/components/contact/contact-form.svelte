<script lang="ts">
	import type { Infer, SuperValidated } from 'sveltekit-superforms/client';

	import Loading from '@lucide/svelte/icons/loader-circle';
	import SendIcon from '@lucide/svelte/icons/send-horizontal';
	import { zod } from 'sveltekit-superforms/adapters';
	import { superForm } from 'sveltekit-superforms/client';

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

	let recaptchaStatus = $state(false);

	function onStatusChange(v: boolean) {
		recaptchaStatus = v;
	}
</script>

<form use:enhance method="post" action="/api/contact" class="flex flex-col gap-6">
	{#if $message}
		<ContactAlert {...$message} />
	{/if}

	<div class="flex flex-col gap-4 md:flex-row">
		<Form.Field {form} name="name" class="w-full">
			<Form.Control>
				{#snippet children({ props })}
					<Form.Label class="mb-1 text-lg font-semibold">Your Fullname</Form.Label>
					<Input autocomplete="name" {...props} bind:value={$formData.name} />
				{/snippet}
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="email" class="w-full">
			<Form.Control>
				{#snippet children({ props })}
					<Form.Label class="mb-1 text-lg font-semibold">Your Email</Form.Label>
					<Input autocomplete="email" {...props} bind:value={$formData.email} />
				{/snippet}
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
	</div>

	<Form.Field {form} name="subject">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label class="mb-1 text-lg font-semibold">Subject</Form.Label>
				<Input {...props} bind:value={$formData.subject} />
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="message">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label class="mb-1 text-lg font-semibold">Message</Form.Label>
				<Textarea rows={7} class="resize-none" {...props} bind:value={$formData.message} />
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<div class="flex flex-col items-center justify-between gap-4 md:flex-row">
		<Button
			title="send message"
			type="submit"
			disabled={$delayed || !recaptchaStatus}
			class="w-[150px] space-x-2 rounded-xl"
		>
			{#if $delayed}
				<Loading class="animate-spin" />
			{:else}
				<SendIcon />
			{/if}
			<span>Submit</span>
		</Button>

		<div class="flex w-full justify-end md:w-auto">
			<Recaptcha {onStatusChange} bind:token={$formData['g-recaptcha-response']} />
		</div>
	</div>
</form>
