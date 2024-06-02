<script lang="ts">
	import config from '@config';
	import Mail from 'lucide-svelte/icons/mail';
	import Location from 'lucide-svelte/icons/map-pin';
	import Form from './(components)/form.svelte';
	import * as m from '@i18n';
	import Head from '@/components/custom/head.svelte';

	export let data;
	$: lang = data.lang as 'ar' | 'en';
</script>

<Head title={m.CONTACT()} />

<div class="mb-8 w-full space-y-4">
	<h2 class="text-3xl font-medium">{m.CONTACTME()}</h2>
	<p>{m.CONTACTTXT()}</p>
</div>

<section class="w-full space-y-8">
	<div class="flex w-full items-center justify-evenly gap-2">
		<div class="flex items-center gap-2">
			<div class="rounded-xl bg-primary p-3 text-primary-foreground">
				<Mail size="36" />
			</div>
			<div class="flex flex-col gap-2">
				<h2 class="text-lg font-semibold">{m.EMAIL()}</h2>
				<a href="mailto:{config.email}" class="anchor hover:underline">{config.email}</a>
			</div>
		</div>
		<div class="flex items-center gap-2">
			<div class="rounded-xl bg-primary p-3 text-primary-foreground">
				<Location size="36" />
			</div>
			<div class="flex flex-col gap-2">
				<h2 class="text-lg font-semibold">{m.LOCATION()}</h2>
				<span>{config.location[lang]}</span>
			</div>
		</div>
	</div>
	<Form />
</section>
