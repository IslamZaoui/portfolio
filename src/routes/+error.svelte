<script lang="ts">
	import { page } from '$app/stores';
	import Button from '@/components/ui/button/button.svelte';
	import * as m from '@i18n';
</script>

<svelte:head>
	<title>Islam Zaoui | {m.ERROR()} {$page.status}</title>
</svelte:head>

<div class="m-auto flex h-[390px] flex-col items-center justify-center gap-4">
	<span class="text-background-foreground text-6xl font-bold">{m.ERROR()} {$page.status}</span>

	{#if $page.error?.message}
		<span class="text-2xl text-muted-foreground">{$page.error?.message}</span>
	{/if}

	<Button href="/">
		{m.BACKBUTTON()}
	</Button>
</div>
