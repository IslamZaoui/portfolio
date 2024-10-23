<script lang="ts">
	import * as m from '@i18n';
	import ProjectCard from '@/components/custom/project-card.svelte';
	import Head from '@/components/custom/seo.svelte';
	import ExperienceItem from '@/components/custom/experience-item.svelte';
	import PostCard from '@/components/custom/post-card.svelte';

	let { data } = $props();
</script>

<Head title={m.ABOUT()} />

<div class="mb-8 w-full space-y-4">
	<h2 class="text-3xl font-medium">{m.ABOUTME()}</h2>
	<p>{m.ABOUTTXT()}</p>
</div>

<section class="w-full space-y-4">
	<h3 class="text-xl font-semibold">{m.EXPERIENCES()}</h3>
	<ol class="relative border-s border-muted">
		{#each data.experiences.reverse() as experience, i}
			<ExperienceItem {experience} index={i} />
		{/each}
	</ol>
</section>

<section class="mb-8 w-full space-y-4">
	<h3 class="mb-7 text-xl font-semibold">{m.PROJECTS()}</h3>
	<div class="grid grid-cols-2 gap-11 md:grid-cols-3">
		{#each data.projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</section>

<section class="w-full space-y-6">
	<h3 class="text-xl font-semibold">{m.LATEST()}</h3>
	<div class="flex flex-col gap-4">
		{#each data.posts as post (post.slug)}
			<PostCard {post} />
		{:else}
			<div class="flex h-[72px] w-full items-center justify-center">
				<span class="text-muted-foreground">{m.BLOG_NOTFOUND()}</span>
			</div>
		{/each}
	</div>
	<div>
		<a class="text-md anchor w-full text-right" href="/blog">{m.READMORE()}</a>
	</div>
</section>
