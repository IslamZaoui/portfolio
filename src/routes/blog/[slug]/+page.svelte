<script lang="ts">
	import { timeAgo } from '@/index';
	import BackEN from 'lucide-svelte/icons/chevron-left';
	import BackAR from 'lucide-svelte/icons/chevron-right';
	import Calendar from 'lucide-svelte/icons/calendar';
	import * as m from '@i18n';
	import Head from '@/components/custom/seo.svelte';
	import { languageTag } from '$lib/paraglide/runtime.js';

	export let data;
</script>

<Head title={data.meta.title} description={data.meta.description} image="/OG/{data.meta.title}" />

<header class="flex w-full flex-col gap-3">
	<a href="/blog" class="flex items-center text-[16px]" title={m.BACK()}>
		<svelte:component this={languageTag() === 'en' ? BackEN : BackAR} size={16} />
		{m.BACK()}
	</a>
	<h2 class="text-4xl font-bold">{data.meta.title}</h2>
	<p class="flex items-start justify-between gap-4 text-sm text-muted-foreground">
		<span>{data.meta.description}</span>
		<span class="flex flex-shrink-0 items-center gap-2">
			<Calendar size={16} />
			{timeAgo(data.meta.date, languageTag())}
		</span>
	</p>
</header>

<article class="prose max-w-full select-text dark:prose-invert" dir="auto">
	<svelte:component this={data.content} />
</article>
