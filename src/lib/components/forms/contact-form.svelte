<script lang="ts">
	import { superForm, type SuperValidated, type Infer } from 'sveltekit-superforms/client';
	import { Textarea } from '@/components/ui/textarea';
	import * as Form from '@/components/ui/form';
	import { Input } from '@/components/ui/input';
	import { zod } from 'sveltekit-superforms/adapters';
	import SendIcon from 'lucide-svelte/icons/send-horizontal';
	import Loading from 'lucide-svelte/icons/loader-circle';
	import * as m from '@i18n';
	import Button from '@/components/ui/button/button.svelte';
	import { contactSchema, type ContactForm } from '@/schemas/contact';

	export let data: SuperValidated<Infer<ContactForm>>;

	const form = superForm(data, {
		validators: zod(contactSchema)
	});

	const { form: formData, enhance, delayed } = form;
</script>

<form use:enhance method="post" action="/api/contact" class="flex w-full flex-col gap-4">
	<div class="flex w-full flex-col gap-4 md:flex-row">
		<Form.Field {form} name="name" class="group w-full rounded-xl bg-muted p-3">
			<Form.Control let:attrs>
				<Form.Label class="pl-3">{m.NAME()}</Form.Label>
				<Input
					class="border-none bg-muted focus-visible:ring-0 focus-visible:ring-card focus-visible:ring-offset-0"
					autocomplete="name"
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
					autocomplete="email"
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
