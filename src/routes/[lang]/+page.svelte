<script lang="ts">
	import config from '@config';
	import ProjectCard from '@/components/custom/project-card.svelte';
	import Loading from 'lucide-svelte/icons/loader-circle';
	import { timeAgo } from '@/index';

	export let data;
</script>

<section class="w-full mb-8">
	<p>
		Junior Full Stack Web Developer graduated from the University of M'sila with a degree in
		Computer Science. Passionate about creating tools, UI/UX designs and web development.
	</p>
</section>

<section class="w-full space-y-4">
	<h2 class="text-xl font-semibold">Experience</h2>
	<ol class="relative border-s border-muted">
		{#each config.experiences as xp, i}
			<li class="mb-10 ms-4">
				<div
					class="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border {i === 0 ? 'bg-primary' : 'bg-muted'}" />
				<div class="flex flex-row items-center gap-2">
					<div class="text-md font-medium text-primary">{xp.title}</div>
					{#if i === 0}
						<div
							class="inline-block uppercase text-xs rounded-full px-1 py-0 border border-muted
							text-muted-foreground">
							present
						</div>
					{/if}
				</div>
				<div class="mb-4 text-sm font-normal text-muted-foreground">{xp.at}</div>
			</li>
		{/each}
	</ol>
</section>

<section class="w-full space-y-4">
	<h2 class="text-xl font-semibold mb-7">Projects</h2>
	<div class="grid grid-cols-2 md:grid-cols-3 gap-11">
		{#each config.projects as data}
			<ProjectCard {data} />
		{/each}
	</div>
</section>

<section class="w-full space-y-6">
	<h2 class="text-xl font-semibold">Latest Posts</h2>
	<div class="flex flex-col gap-4">
		{#await fetch('/en/blog.json').then((res) => res.json().then((res) => res.slice(0, 2)))}
			<div class="h-[72px] w-full flex justify-center items-center">
				<Loading class="animate-spin" />
				<span>Loading...</span>
			</div>
		{:then posts}
			{#each posts as post}
				<a
					class="w-full flex gap-4 items-center hover:underline px-4"
					href="/{data.lang}/blog/{post.slug}">
					<div class="text-sm text-muted-foreground">{timeAgo(post.date)}</div>
					<h3 class="text-lg font-semibold">{post.title}</h3>
				</a>
			{/each}
		{/await}
	</div>
	<div>
		<a class="w-full text-right text-md" href="/{data.lang}/blog">Read more</a>
	</div>
</section>
