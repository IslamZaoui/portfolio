<script lang="ts">
	import config from '@config';
	import Mail from 'lucide-svelte/icons/mail';
	import { LL } from '@i18n/i18n-svelte';
	import Head from '@/components/custom/head.svelte';
</script>

<Head title={$LL.CONTACT()} />

<section class="mb-8 w-full">
	<p>{$LL.CONTACTS.TEXT1()}</p>
	<p>{$LL.CONTACTS.TEXT2()}</p>
</section>

<section class="w-full space-y-4">
	<div class="flex items-center gap-2">
		<Mail size="36" />
		<div class="flex flex-col gap-2">
			<h2 class="text-lg font-semibold">{$LL.CONTACTS.EMAIL()}</h2>
			<a href="mailto:{config.email}" class="hover:underline">{config.email}</a>
		</div>
	</div>
</section>
