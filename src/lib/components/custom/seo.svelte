<script lang="ts">
	import { SITE_DESCRIPTION, SITE_KEYWORDS, SITE_NAME, SITE_URL } from '@config';
	import { page } from '$app/stores';
	import { languageTag } from '@/paraglide/runtime';

	interface Props {
		title?: string;
		description?: string;
		image?: string;
	}

	let {
		title = undefined,
		description = SITE_DESCRIPTION[languageTag()],
		image = '/OG/Islam%20Zaoui%20Portfolio'
	}: Props = $props();

	let url = $derived(new URL($page.url.pathname, SITE_URL).href);
	let fullTitle = $derived(title ? `${title} | ${SITE_NAME}` : SITE_NAME);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />

	<meta name="keywords" content={SITE_KEYWORDS[languageTag()]} />
	<meta name="author" content="Islam Zaoui" />

	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={image} />
	<meta property="og:site_name" content={SITE_NAME} />
	<meta property="og:locale" content={languageTag()} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />

	<link rel="canonical" href={url} />
</svelte:head>
