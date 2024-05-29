<script lang="ts">
	export let data: {
		name: string;
		href: string;
		selected: boolean;
	};
</script>

<div class="relative flex items-center justify-center">
	<a
		href={data.href}
		class="text-sm py-1 px-2 relative z-10"
		class:text-primary-foreground={data.selected}>
		{data.name}
	</a>
	{#if data.selected}
		<div class="header-button bg-primary size-full top-0 left-0 absolute z-0 rounded-md" data-flip-id="header-button" />
	{/if}
</div>
