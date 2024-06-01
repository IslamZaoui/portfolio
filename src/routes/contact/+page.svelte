<script lang="ts">
	import config from '@config';
	import Mail from 'lucide-svelte/icons/mail';
	import * as m from '@i18n';
	import Head from '@/components/custom/head.svelte';
</script>

<Head title={m.CONTACT()} />

<div class="mb-8 w-full space-y-4">
	<h1 class="text-3xl font-medium">{m.CONTACTME()}</h1>
	<p>{m.CONTACTTXT()}</p>
</div>

<section class="w-full space-y-4">
	<div class="flex items-center gap-2">
		<Mail size="36" />
		<div class="flex flex-col gap-2">
			<h2 class="text-lg font-semibold">{m.EMAIL()}</h2>
			<a href="mailto:{config.email}" class="anchor hover:underline">{config.email}</a>
		</div>
	</div>
</section>
