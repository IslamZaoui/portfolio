<script lang="ts">
	import { page } from '$app/stores';
	import Button from '@/components/ui/button/button.svelte';
	import { LL } from '@i18n/i18n-svelte';
</script>

<svelte:head>
	<title>Islam Zaoui | {$LL.ERROR()} {$page.status}</title>
</svelte:head>

<div class="flex h-screen flex-col items-center justify-center gap-4">
	<span class="text-background-foreground text-6xl font-bold">{$LL.ERROR()} {$page.status}</span>

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
		{$LL.BACKBUTTON()}
	</Button>
</div>
