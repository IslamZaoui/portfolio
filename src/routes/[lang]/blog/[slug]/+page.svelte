<script lang="ts">
	import { timeAgo } from '@/index';
	import Back from 'lucide-svelte/icons/chevron-left';
	export let data;
</script>

<header class="flex flex-col w-full gap-2">
	<a href="/{data.lang}/blog" class="flex items-center text-sm">
		<Back size="16" />
		Back
	</a>
	<h1 class="text-3xl font-medium">{data.meta.title}</h1>
	<p class="text-sm text-muted-foreground">
		{new Date(data.meta.date).toDateString()} ({timeAgo(data.meta.date, data.lang)})
	</p>
</header>

<article class="prose dark:prose-invert max-w-full">
	<svelte:component this={data.content} />
</article>
