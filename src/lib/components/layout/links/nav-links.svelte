<script lang="ts">
	import { writable, type Unsubscriber } from 'svelte/store';
	import { page } from '$app/stores';
	import * as m from '@i18n';
	import { i18n } from '@/i18n';
	import { fly } from 'svelte/transition';
	import { onDestroy } from 'svelte';

	$: nav = [
		{
			name: m.ABOUT(),
			href: `/`,
			selected: $page.data.url === i18n.resolveRoute('/').slice(0, -1),
			title: m.ABOUTME()
		},
		{
			name: m.BLOG(),
			href: `/blog`,
			selected: $page.data.url.startsWith(i18n.resolveRoute('/blog')),
			title: m.MYBLOG()
		},
		{
			name: m.USES(),
			href: `/uses`,
			selected: $page.data.url.startsWith(i18n.resolveRoute('/uses')),
			title: m.TK_USES()
		},
		{
			name: m.CONTACT(),
			href: `/contact`,
			selected: $page.data.url.startsWith(i18n.resolveRoute('/contact')),
			title: m.CONTACTME()
		}
	];

	let selectedIndex = writable(0);
	let navRefs: HTMLAnchorElement[] = [];
	const position = writable({ width: 0, left: 0, opacity: 0 });

	let pageUnsubscribe: Unsubscriber;
	let selectedIndexUnsubscribe: Unsubscriber;

	$: if (nav) {
		pageUnsubscribe = page.subscribe(() => {
			$selectedIndex = nav.findIndex((item) => item.selected);
		});

		selectedIndexUnsubscribe = selectedIndex.subscribe((index) => {
			position.set({
				width: navRefs[index]?.offsetWidth,
				left: navRefs[index]?.offsetLeft,
				opacity: navRefs[index] ? 1 : 0
			});
		});
	}

	onDestroy(() => {
		pageUnsubscribe?.();
		selectedIndexUnsubscribe?.();
	});
</script>

<nav class="relative mb-2 mt-6 flex w-fit gap-2" in:fly={{ duration: 200, y: 20 }}>
	{#each nav as { name, href, title, selected }, i}
		<a
			{href}
			bind:this={navRefs[i]}
			{title}
			class:text-background={selected}
			class="relative z-10 p-2 px-3 text-sm font-medium transition-colors duration-300"
		>
			{name}
		</a>
	{/each}

	<span
		class="transition-position absolute z-0 h-full rounded-xl bg-foreground duration-300"
		style="width: {$position.width}px; left: {$position.left}px; opacity: {$position.opacity}"
	/>
</nav>
