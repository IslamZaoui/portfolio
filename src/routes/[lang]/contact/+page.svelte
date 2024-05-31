<script lang="ts">
	import config from '@config';
	import Mail from 'lucide-svelte/icons/mail';
	import { LL } from '@i18n/i18n-svelte';
	import Head from '@/components/custom/head.svelte';
</script>

<Head title={$LL.CONTACT()} />

<div class="mb-8 w-full space-y-4">
	<h1 class="text-3xl font-medium">{$LL.CONTACTME()}</h1>
	<p>{$LL.CONTACTTXT()}</p>
</div>

<section class="w-full space-y-4">
	<div class="flex items-center gap-2">
		<Mail size="36" />
		<div class="flex flex-col gap-2">
			<h2 class="text-lg font-semibold">{$LL.EMAIL()}</h2>
			<a href="mailto:{config.email}" class="hover:underline">{config.email}</a>
		</div>
	</div>
</section>
