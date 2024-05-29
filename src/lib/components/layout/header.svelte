<script lang="ts">
	// @ts-nocheck
	import { src, width, height } from '@assets/pfp.png?as=metadata';
	import { Separator } from '@/components/ui/separator';
	import HeaderButton from '@/components/custom/header-button.svelte';
	import Twitter from 'lucide-svelte/icons/twitter';
	import Github from 'lucide-svelte/icons/github';
	import Linkedin from 'lucide-svelte/icons/linkedin';
	import Youtube from 'lucide-svelte/icons/youtube';
	import LightSwitch from '@/components/custom/light-switch.svelte';
	import config from '@config';
	import { page } from '$app/stores';

	const soicals = [
		{
			url: `https://x.com/${config.social_links.Twitter}`,
			icon: Twitter
		},
		{
			url: `https://github.com/${config.social_links.GitHub}`,
			icon: Github
		},
		{
			url: `https://linkedin.com/in/${config.social_links.LinkedIn}`,
			icon: Linkedin
		},
		{
			url: `https://youtube.com/${config.social_links.YouTube}`,
			icon: Youtube
		}
	];

	$: nav = [
		{
			name: 'About',
			href: '/',
			selected: $page.data.url === `/${$page.data.lang}`
		},
		{
			name: 'Blog',
			href: `/${$page.data.lang}/blog`,
			selected: $page.data.url.startsWith(`/${$page.data.lang}/blog`)
		},
		{
			name: 'Uses',
			href: `/${$page.data.lang}/uses`,
			selected: $page.data.url.startsWith(`/${$page.data.lang}/uses`)
		},
		{
			name: 'contact',
			href: `/${$page.data.lang}/contact`,
			selected: $page.data.url.startsWith(`/${$page.data.lang}/contact`)
		}
	];

	$: isBlogPost = /^\/[a-z]{2}\/blog\/.+/.test($page.data.url);
</script>

<div class="my-8 flex flex-col items-start justify-between gap-2">
	<img class="size-[50px] rounded-full" {src} {width} {height} alt="Profile" />
	<div>
		<h1 class="text-lg font-bold">Islam Zaoui</h1>
		<p class="text-muted-foreground">Full Stack Web Developer</p>
	</div>
	<nav class="my-5 flex w-full items-center justify-between">
		<div class="flex w-full gap-3">
			{#each soicals as { url, icon }}
				<a href={url} target="_blank" rel="noreferrer">
					<svelte:component this={icon} />
				</a>
			{/each}
		</div>
		<div>
			<LightSwitch />
		</div>
	</nav>
	<Separator orientation="horizontal" />
	<nav class="mb-2 mt-6 flex gap-2" class:hidden={isBlogPost}>
		{#each nav as data}
			<HeaderButton {data} />
		{/each}
	</nav>
</div>
