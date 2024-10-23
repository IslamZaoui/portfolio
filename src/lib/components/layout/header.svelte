<script lang="ts">
	import { Separator } from '@/components/ui/separator';
	import LightSwitch from '@/components/custom/light-switch.svelte';
	import LangSwitch from '@/components/custom/lang-switch.svelte';
	import { page } from '$app/stores';
	import * as m from '@i18n';
	import SocialLinks from './links/social-links.svelte';
	import NavLinks from './links/nav-links.svelte';

	let isBlogPost = $derived(/^\/(ar\/|en\/)?blog\/[\w-]+$/.test($page.data.url));
</script>

<div class="my-8 flex flex-col items-start justify-between gap-2">
	<div class="flex items-center gap-3">
		<enhanced:img class="size-[60px] rounded-full" src="@assets/pfp.png" alt="profile" />
		<div>
			<h1 class="text-lg font-bold">Islam Zaoui</h1>
			<p class="text-muted-foreground">{m.SUBTITLE()}</p>
		</div>
	</div>

	<nav class="my-5 flex w-full items-center justify-between">
		<SocialLinks />
		<div class="flex items-center gap-3">
			<LightSwitch />
			<LangSwitch />
		</div>
	</nav>
	<Separator orientation="horizontal" />
	{#if !isBlogPost}
		<NavLinks />
	{/if}
</div>
