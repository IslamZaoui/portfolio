<script lang="ts">
	import { EMAIL, LOCATION } from '@config';
	import Mail from 'lucide-svelte/icons/mail';
	import Location from 'lucide-svelte/icons/map-pin';
	import { ContactForm } from '@/components/forms';
	import * as m from '@i18n';
	import Head from '@/components/custom/seo.svelte';
	import { languageTag } from '@/paraglide/runtime.js';

	export let data;
</script>

<Head title={m.CONTACT()} />

<div class="mb-8 w-full space-y-4">
	<h2 class="text-3xl font-medium">{m.CONTACTME()}</h2>
	<p>{m.CONTACTTXT()}</p>
</div>

<section class="w-full space-y-8">
	<div class="flex w-full flex-col items-start justify-evenly gap-2 md:flex-row">
		<div class="flex items-center gap-2">
			<div class="rounded-xl bg-primary p-3 text-primary-foreground">
				<Mail size="36" />
			</div>
			<div class="flex flex-col gap-2">
				<h3 class="text-lg font-semibold">{m.EMAIL()}</h3>
				<a href="mailto:{EMAIL}" class="anchor hover:underline">{EMAIL}</a>
			</div>
		</div>
		<div class="flex items-center gap-2">
			<div class="rounded-xl bg-primary p-3 text-primary-foreground">
				<Location size="36" />
			</div>
			<div class="flex flex-col gap-2">
				<h3 class="text-lg font-semibold">{m.LOCATION()}</h3>
				<span>{LOCATION[languageTag()]}</span>
			</div>
		</div>
	</div>
	<ContactForm data={data.form} />
</section>
