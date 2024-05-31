<script lang="ts">
	import config from '@config';
	import { page } from '$app/stores';

	export let title: string | undefined = undefined;
	export let description: string = config.site_description[$page.data.lang];
	export let image: string = '/OG/Islam Zaoui Portfolio';
</script>

<svelte:head>
	<title>Islam Zaoui{title ? ` | ${title}` : ''}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content="Islam Zaoui{title ? ` | ${title}` : ''}" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="{config.site_url}{$page.url.pathname}" />
	<meta property="og:image" content={image} />
	<meta property="og:site_name" content="Islam Zaoui Portfolio" />
	<meta property="og:locale" content={$page.data.lang} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Islam Zaoui{title ? ` | ${title}` : ''}" />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
	<link rel="canonical" href="{config.site_url}{$page.url.pathname}" />
</svelte:head>
