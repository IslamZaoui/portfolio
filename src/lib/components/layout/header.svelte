<script lang="ts">
	// @ts-ignore
	import pfp from '@assets/pfp.png?enhanced';
	import { Separator } from '@/components/ui/separator';
	import Twitter from 'lucide-svelte/icons/twitter';
	import Github from 'lucide-svelte/icons/github';
	import Linkedin from 'lucide-svelte/icons/linkedin';
	import Youtube from 'lucide-svelte/icons/youtube';
	import LightSwitch from '@/components/custom/light-switch.svelte';
	import LangSwitch from '@/components/custom/lang-switch.svelte';
	import { fly } from 'svelte/transition';
	import { i18n } from '@/i18n';
	import config from '@config';
	import { page } from '$app/stores';
	import * as m from '@i18n';
	import { writable } from 'svelte/store';

	const socials = [
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
				$page.data.url ===
				($page.data.lang === 'en'
					? i18n.resolveRoute('/', $page.data.lang)
					: i18n.resolveRoute('/', $page.data.lang).slice(0, -1)),
			title: m.ABOUTME()
		},
		{
			name: m.BLOG(),
			href: `/blog`,
			selected: $page.data.url.startsWith(i18n.resolveRoute('/blog', $page.data.lang)),
			title: m.MYBLOG()
		},
		{
			name: m.USES(),
			href: `/uses`,
			selected: $page.data.url.startsWith(i18n.resolveRoute('/uses', $page.data.lang)),
			title: m.TK_USES()
		},
		{
			name: m.CONTACT(),
			href: `/contact`,
			selected: $page.data.url.startsWith(i18n.resolveRoute('/contact', $page.data.lang)),
			title: m.CONTACTME()
		}
	];

	$: isBlogPost = /^\/(ar\/)?blog\/[\w-]+$/.test($page.data.url);

	let selectedIndex = writable(0);
	let navRefs: HTMLAnchorElement[] = [];
	const navDim = writable({ width: 0, offset: 0 });

	$: if (nav) {
		page.subscribe(() => {
			$selectedIndex = nav.findIndex((item) => item.selected);
		});

		selectedIndex.subscribe((index) => {
			navDim.set({
				width: navRefs[index]?.offsetWidth,
				offset: navRefs[index]?.offsetLeft
			});
		});
	}
</script>

<div class="my-8 flex flex-col items-start justify-between gap-2">
	<div class="flex items-center gap-3">
		<enhanced:img class="size-[60px] rounded-full" src={pfp} alt="profile" />
		<div>
			<h1 class="text-lg font-bold">Islam Zaoui</h1>
			<p class="text-muted-foreground">{m.SUBTITLE()}</p>
		</div>
	</div>

	<nav class="my-5 flex w-full items-center justify-between">
		<div class="flex w-full gap-3">
			{#each socials as { url, icon, title }}
				<a href={url} target="_blank" rel="noreferrer" class="social-anchor" {title}>
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
	{#if !isBlogPost}
		<nav
			class="nav-container mb-2 mt-6 flex gap-2"
			style="--nav-width: {$navDim.width}px; --nav-offset: {$navDim.offset}px;"
			in:fly={{ duration: 200, y: 20 }}
		>
			{#each nav as { name, href, title, selected }, i}
				<a
					{href}
					{title}
					class="relative z-10 px-2 py-1 text-sm transition-colors duration-300 ease-in-out {selected
						? ''
						: 'hover:text-primary/50'}"
					class:text-primary-foreground={selected}
					bind:this={navRefs[i]}
				>
					{name}
				</a>
			{/each}
		</nav>
	{/if}
</div>

<style lang="postcss">
	.nav-container {
		--nav-width: 0px;
		--nav-offset: 0px;
		@apply relative flex w-full overflow-hidden;
	}

	.nav-container::after {
		content: '';
		width: var(--nav-width);
		left: var(--nav-offset);
		@apply absolute top-0 h-full rounded-md bg-primary transition-all duration-300;
	}

	.nav-container::after > a {
		@apply text-primary-foreground;
	}
</style>
