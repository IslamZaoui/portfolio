<script lang="ts">
	import Head from '@/components/custom/head.svelte';
	import * as m from '@i18n';
	export let data;
</script>

<Head title={m.BLOG()} />

<div class="mb-8 w-full space-y-4">
	<h2 class="text-3xl font-medium">{m.MYBLOG()}</h2>
	<p>{m.BLOGTXT()}</p>
</div>

<section class="mx-auto flex w-full flex-col gap-3">
	{#if data.posts.length === 0}
		<div class="flex w-full items-center justify-center p-4">
			<span class="text-muted-foreground">{m.BLOG_NOTFOUND()}</span>
		</div>
	{:else}
		{#each data.posts as post}
			<a
				href="/blog/{post.slug}"
				class="w-full transform rounded-md border bg-muted p-3 transition hover:-translate-y-1 hover:bg-muted/50"
			>
				<h3 class="text-xl font-semibold">{post.title}</h3>
				<p class="text-sm text-muted-foreground">{post.description}</p>
			</a>
		{/each}
	{/if}
</section>
