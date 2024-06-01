<script lang="ts">
	import config from '@config';
	import ProjectCard from '@/components/custom/project-card.svelte';
	import Head from '@/components/custom/head.svelte';
	import { timeAgo } from '@/index';
	import { LL } from '@i18n/i18n-svelte';
	export let data;
	$: lang = data.lang as 'ar' | 'en';
	$: posts = data.posts
</script>

<Head title={$LL.ABOUT()} />

<div class="mb-8 w-full space-y-4">
	<h1 class="text-3xl font-medium">{$LL.ABOUTME()}</h1>
	<p>{$LL.ABOUTTXT()}</p>
</div>

<section class="w-full space-y-4">
	<h2 class="text-xl font-semibold">{$LL.EXPERIENCES()}</h2>
	<ol class="relative border-s border-muted">
		{#each config.experiences as xp, i}
			<li class="mb-10 ms-4">
				<div
					class="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border {i === 0
						? 'bg-primary'
						: 'bg-muted'}"
				/>
				<div class="flex flex-row items-center gap-2">
					<div class="text-md font-medium text-primary">{xp[lang].title}</div>
					{#if i === 0}
						<div
							class="inline-block rounded-full border border-muted px-1 py-0 text-xs uppercase
							text-muted-foreground"
						>
							{$LL.PRESENT()}
						</div>
					{/if}
				</div>
				<div class="mb-4 text-sm font-normal text-muted-foreground">{xp[lang].at}</div>
			</li>
		{/each}
	</ol>
</section>

<section class="mb-8 w-full space-y-4">
	<h2 class="mb-7 text-xl font-semibold">{$LL.PROJECTS()}</h2>
	<div class="grid grid-cols-2 gap-11 md:grid-cols-3">
		{#each config.projects as data}
			<ProjectCard {data} />
		{/each}
	</div>
</section>

<section class="w-full space-y-6">
	<h2 class="text-xl font-semibold">{$LL.LATEST()}</h2>
	<div class="flex flex-col gap-4">
		{#if posts.length > 0}
			{#each posts as post}
				<a
					class="flex w-full items-center gap-4 px-4 hover:underline"
					href="/{data.lang}/blog/{post.slug}"
				>
					<div class="text-sm text-muted-foreground">{timeAgo(post.date, data.lang)}</div>
					<h3 class="text-lg font-semibold">{post.title}</h3>
				</a>
			{/each}
		{:else}
			<div class="flex h-[72px] w-full items-center justify-center">
				<span class="text-muted-foreground">{$LL.BLOG_NOTFOUND()}</span>
			</div>
		{/if}
	</div>
	<div>
		<a class="text-md w-full text-right anchor" href="/{data.lang}/blog">{$LL.READMORE()}</a>
	</div>
</section>
