<script lang="ts">
	// @ts-nocheck
	import pfp from '@assets/pfp.png?enhanced';
	import { Separator } from '@/components/ui/separator';
	import HeaderButton from '@/components/custom/header-button.svelte';
	import Twitter from 'lucide-svelte/icons/twitter';
	import Github from 'lucide-svelte/icons/github';
	import Linkedin from 'lucide-svelte/icons/linkedin';
	import Youtube from 'lucide-svelte/icons/youtube';
	import LightSwitch from '@/components/custom/light-switch.svelte';
	import LangSwitch from '@/components/custom/lang-switch.svelte';
	import EvervaultCard from '@/components/ui/evervaultCard/evervault-card.svelte';
	import { fly } from 'svelte/transition';
	import { i18n } from '@/i18n';
	import config from '@config';
	import { page } from '$app/stores';
	import * as m from '@i18n';

	const soicals = [
		{
			url: `https://x.com/${config.social_links.Twitter}`,
			icon: Twitter,
			title: 'Twitter Profile'
		},
		{
			url: `https://github.com/${config.social_links.GitHub}`,
			icon: Github,
			title: 'GitHub Profile'
		},
		{
			url: `https://linkedin.com/in/${config.social_links.LinkedIn}`,
			icon: Linkedin,
			title: 'LinkedIn Profile'
		},
		{
			url: `https://youtube.com/${config.social_links.YouTube}`,
			icon: Youtube,
			title: 'YouTube Channel'
		}
	];

	$: nav = [
		{
			name: m.ABOUT(),
			href: `/`,
			selected:
				$page.data.url + ($page.data.lang == 'ar' ? '/' : '') ==
				i18n.resolveRoute('/', $page.data.lang),
			title: 'About me'
		},
		{
			name: m.BLOG(),
			href: `/blog`,
			selected: $page.data.url.startsWith(i18n.resolveRoute('/blog', $page.data.lang)),
			title: 'My blog posts'
		},
		{
			name: m.USES(),
			href: `/uses`,
			selected: $page.data.url.startsWith(i18n.resolveRoute('/uses', $page.data.lang)),
			title: 'What I uses'
		},
		{
			name: m.CONTACT(),
			href: `/contact`,
			selected: $page.data.url.startsWith(i18n.resolveRoute('/contact', $page.data.lang)),
			title: 'Contact me'
		}
	];

	$: isBlogPost = /^\/(ar\/)?blog\/[\w-]+$/.test($page.data.url);
</script>

<div class="my-8 flex flex-col items-start justify-between gap-2">
	<EvervaultCard>
		<div class="flex items-center gap-3">
			<enhanced:img class="size-[60px] rounded-full" src={pfp} alt="profile" />
			<div>
				<h1 class="text-lg font-bold">Islam Zaoui</h1>
				<p class="text-muted-foreground">{m.SUBTITLE()}</p>
			</div>
		</div>
	</EvervaultCard>
	<nav class="my-5 flex w-full items-center justify-between">
		<div class="flex w-full gap-3">
			{#each soicals as { url, icon, title }}
				<a href={url} target="_blank" rel="noreferrer" {title} class="anchor">
					<svelte:component this={icon} />
				</a>
			{/each}
		</div>
		<div class="flex items-center gap-3">
			<LightSwitch />
			<LangSwitch />
		</div>
	</nav>
	<Separator orientation="horizontal" />
	{#key isBlogPost}
		<nav class:hidden={isBlogPost} class="mb-2 mt-6 flex gap-2" in:fly={{ duration: 200, y: 20 }}>
			{#each nav as data}
				<HeaderButton {data} />
			{/each}
		</nav>
	{/key}
</div>
