<script lang="ts">
	import { page } from '$app/stores';
	import { i18n } from '@/i18n.js';
	import { buttonVariants } from '$lib/components/ui/button';

	$: currentPathWithoutLanguage = i18n.route($page.url.pathname);
</script>

<a
	class={buttonVariants({ variant: 'ghost', size: 'icon' })}
	title={$page.data.lang === 'en' ? 'Change to Arabic' : 'Change to English'}
	href={currentPathWithoutLanguage}
	rel="alternate"
	hreflang={$page.data.lang === 'en' ? 'ar' : 'en'}>{$page.data.lang === 'en' ? 'AR' : 'EN'}</a
>
