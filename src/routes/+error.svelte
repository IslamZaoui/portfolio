<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>Islam Zaoui | Error {page.status}</title>
</svelte:head>

<div class="flex w-full flex-col gap-6">
	<dir class="space-y-4">
		<h2 class="text-2xl font-bold">Error {page.status}</h2>
		<p class="text-justify">
			{page.error?.message || 'Something went wrong'}
		</p>
	</dir>

	<a class="anchor" href="/" title="Go back to home page" aria-label="Go back to home page">
		Go back to home page.
	</a>
</div>
