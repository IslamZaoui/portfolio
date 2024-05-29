<script lang="ts">
	import { timeAgo } from '@/index';
	import Back from 'lucide-svelte/icons/chevron-left';
	import Calendar from 'lucide-svelte/icons/calendar';
	import { LL } from '@i18n/i18n-svelte';
	import Head from '@/components/custom/head.svelte';
	export let data;
</script>

<Head title={data.meta.title} description={data.meta.description} image="/OG/{data.meta.title}" />

<header class="flex w-full flex-col gap-2">
	<a href="/{data.lang}/blog" class="flex items-center text-sm">
		<Back size="16" />
		{$LL.BACK()}
	</a>
	<h1 class="text-3xl font-medium">{data.meta.title}</h1>
	<p class="flex items-center justify-between text-sm text-muted-foreground">
		<span>{data.meta.description}</span>
		<span class="flex items-center gap-2"
			><Calendar size={16} /> {timeAgo(data.meta.date, data.lang)}</span
		>
	</p>
</header>

<article class="prose max-w-full dark:prose-invert">
	<svelte:component this={data.content} />
</article>
