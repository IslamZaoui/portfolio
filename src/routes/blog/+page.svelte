<script lang="ts">
	import Head from '@/components/custom/seo.svelte';
	import PostCard from '@/components/custom/post-card.svelte';
	import * as m from '@i18n';

	export let data;
</script>

<Head title={m.BLOG()} />

<div class="mb-8 w-full space-y-4">
	<h2 class="text-3xl font-medium">{m.MYBLOG()}</h2>
	<p>{m.BLOGTXT()}</p>
</div>

<section class="mx-auto flex w-full flex-col gap-3">
	{#each data.posts as post}
		<PostCard {post} />
	{:else}
		<div class="flex w-full items-center justify-center p-4">
			<span class="text-muted-foreground">{m.BLOG_NOTFOUND()}</span>
		</div>
	{/each}
</section>
