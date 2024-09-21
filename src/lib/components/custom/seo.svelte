<script lang="ts">
	import config from '@config';
	import { page } from '$app/stores';
	import { languageTag } from '@/paraglide/runtime';

	export let title: string | undefined = undefined;
	export let description: string = config.SITE_DESCRIPTION[languageTag()];
	export let image: string = '/OG/Islam%20Zaoui%20Portfolio';

	$: url = new URL($page.url.pathname, config.SITE_URL).href;
	$: fullTitle = title ? `${title} | ${config.SITE_NAME}` : config.SITE_NAME;
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />

	<meta name="keywords" content={config.SITE_KEYWORDS[languageTag()]} />
	<meta name="author" content="Islam Zaoui" />

	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={image} />
	<meta property="og:site_name" content={config.SITE_NAME} />
	<meta property="og:locale" content={languageTag()} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />

	<link rel="canonical" href={url} />
</svelte:head>
