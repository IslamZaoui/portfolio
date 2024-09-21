<script lang="ts">
	import { page } from '$app/stores';
	import { i18n } from '@/i18n.js';
	import { buttonVariants } from '@/components/ui/button';
	import { invalidate } from '$app/navigation';
	import { languageTag } from '@/paraglide/runtime.js';

	$: currentPathWithoutLanguage = i18n.route($page.url.pathname);
</script>

<a
	class={buttonVariants({ variant: 'ghost', size: 'icon' })}
	on:mousedown={() => invalidate('paraglide:lang')}
	title={languageTag() === 'en' ? 'Change to Arabic' : 'Change to English'}
	href={currentPathWithoutLanguage}
	rel="alternate"
	hreflang={languageTag() === 'en' ? 'ar' : 'en'}>{languageTag() === 'en' ? 'AR' : 'EN'}</a
>
