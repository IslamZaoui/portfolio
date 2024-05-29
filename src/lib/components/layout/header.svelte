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
	import LangSwitch from '@/components/custom/lang-switch.svelte';
	import { fly } from 'svelte/transition';
	import config from '@config';
	import { page } from '$app/stores';
	import { LL } from '@i18n/i18n-svelte';

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
			name: $LL.ABOUT(),
			href: `/${$page.data.lang}`,
			selected: $page.data.url === `/${$page.data.lang}`
		},
		{
			name: $LL.BLOG(),
			href: `/${$page.data.lang}/blog`,
			selected: $page.data.url.startsWith(`/${$page.data.lang}/blog`)
		},
		{
			name: $LL.USES(),
			href: `/${$page.data.lang}/uses`,
			selected: $page.data.url.startsWith(`/${$page.data.lang}/uses`)
		},
		{
			name: $LL.CONTACT(),
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
		<p class="text-muted-foreground">{$LL.SUBTITLE()}</p>
	</div>
	<nav class="my-5 flex w-full items-center justify-between">
		<div class="flex w-full gap-3">
			{#each soicals as { url, icon }}
				<a href={url} target="_blank" rel="noreferrer">
					<svelte:component this={icon} />
				</a>
			{/each}
		</div>
		<div class="flex gap-3 items-center">
			<LightSwitch />
			<LangSwitch />
		</div>
	</nav>
	<Separator orientation="horizontal" />
	{#key isBlogPost}
		<nav class:hidden={isBlogPost}
			class="mb-2 mt-6 flex gap-2"
			in:fly={{ duration: 200, delay: 200, y: 20 }}
			out:fly={{ duration: 200 }}
		>
			{#each nav as data}
				<HeaderButton {data} />
			{/each}
		</nav>
	{/key}
</div>
