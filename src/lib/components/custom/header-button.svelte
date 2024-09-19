<script lang="ts">
	export let data: {
		name: string;
		href: string;
		selected: boolean;
		title: string;
	};
</script>

<div class="relative flex items-center justify-center">
	<a
		href={data.href}
		title={data.title}
		class="relative z-10 px-2 py-1 text-sm transition-colors duration-300 ease-in-out {data.selected
			? ''
			: 'hover:text-primary/50'}"
		class:text-primary-foreground={data.selected}
	>
		{data.name}
	</a>
	{#if data.selected}
		<div class="header-button absolute left-0 top-0 z-0" />
	{/if}
</div>
