<script lang="ts">
	import { page } from '$app/stores';
	import Button from '@/components/ui/button/button.svelte';
	import * as m from '@i18n'
</script>

<svelte:head>
	<title>Islam Zaoui | {m.ERROR()} {$page.status}</title>
</svelte:head>

<div class="flex h-screen flex-col items-center justify-center gap-4">
	<span class="text-background-foreground text-6xl font-bold">{m.ERROR()} {$page.status}</span>

	{#if $page.error?.message}
		<span class="text-2xl text-muted-foreground">{$page.error?.message}</span>
	{/if}

	<Button
		on:click={() => {
			if (window.history.length > 1 && document.referrer) {
				window.history.back();
			} else {
				window.location.href = '/en';
			}
		}}
	>
		{m.BACKBUTTON()}
	</Button>
</div>
