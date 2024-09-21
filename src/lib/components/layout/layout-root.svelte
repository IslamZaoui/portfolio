<script lang="ts">
	import { fly } from 'svelte/transition';

	export let url: string;
</script>

<div id="main" class="flex min-h-screen flex-col px-4 antialiased">
	<div class="mx-auto flex w-full flex-grow items-start justify-center">
		<div class="w-full max-w-3xl space-y-4">
			<slot name="header" />
			{#key url}
				<main
					in:fly={{ duration: 200, y: 20 }}
					class="flex flex-grow flex-col items-center justify-start gap-8"
				>
					<slot name="page" />
				</main>
			{/key}
		</div>
	</div>
</div>
<slot name="footer" />
