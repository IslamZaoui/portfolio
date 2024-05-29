<script lang="ts">
	import { page } from '$app/stores';

	export let data: {
		content: {
			[key in 'ar' | 'en']: {
				name: string;
				description: string;
			};
		};
		url: string;
		icon: any;
	};
</script>

<a
	class="mb-2 flex transform flex-col gap-1 transition hover:-translate-y-1"
	href={data.url}
	target="_blank"
	rel="noreferrer"
>
	<div
		class="flex size-[30px] items-center justify-center rounded-md bg-primary
		text-primary-foreground"
	>
		<svelte:component this={data.icon} size="24" />
	</div>
	<h3>{data.content[$page.data.lang].name}</h3>
	<p class="text-sm text-muted-foreground">{data.content[$page.data.lang].description}</p>
</a>
