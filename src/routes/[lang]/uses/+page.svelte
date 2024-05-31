<script lang="ts">
	import Head from '@/components/custom/head.svelte';
	import { LL } from '@i18n/i18n-svelte';
</script>

<Head title={$LL.USES()} />

<div class="mb-8 w-full space-y-4">
	<h1 class="text-3xl font-medium">{$LL.TOOLKIT.USES()}</h1>
	<p>{$LL.TOOLKIT.USESTXT()}</p>
</div>

<section class="w-full space-y-4">
	<h2 class="text-xl font-semibold">{$LL.TOOLKIT.HARDWARE()}</h2>
	<ul class="ml-5 list-disc space-y-3">
		{#each Object.values($LL.TOOLKIT.HARDWARE_ITEMS) as item}
			<li>
				{item.NAME()} - <span class="text-muted-foreground">{item.DESCRIPTION()}</span>
			</li>
		{/each}
	</ul>
	<h2 class="text-xl font-semibold">{$LL.TOOLKIT.SOFTWARE()}</h2>
	<ul class="ml-5 list-disc space-y-3">
		{#each Object.values($LL.TOOLKIT.SOFTWARE_ITEMS) as item}
			<li>{item.NAME()} - <span class="text-muted-foreground">{item.DESCRIPTION()}</span></li>
		{/each}
	</ul>
</section>
