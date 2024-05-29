<script lang="ts">
	import Head from '@/components/custom/head.svelte';
	import { LL } from '@i18n/i18n-svelte';
	export let data;
</script>

<Head title={$LL.BLOG()} />

<div class="mx-auto flex w-full flex-col gap-3">
	{#if data.posts.length === 0}
		<div class="mb-8 w-full">
			<span>{$LL.BLOG_NOTFOUND()}</span>
		</div>
	{:else}
		{#each data.posts as post}
			<a
				href="/{data.lang}/blog/{post.slug}"
				class="w-full transform rounded-md border bg-muted p-3 transition hover:-translate-y-1 hover:bg-muted/50"
			>
				<h2 class="text-xl font-semibold">{post.title}</h2>
				<p class="text-sm text-muted-foreground">{post.description}</p>
			</a>
		{/each}
	{/if}
</div>
