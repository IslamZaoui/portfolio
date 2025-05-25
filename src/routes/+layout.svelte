<script lang="ts">
	import '../app.css';

	import '@fontsource-variable/geist-mono';
	import { ModeWatcher } from 'mode-watcher';

	const { children } = $props();
</script>

<ModeWatcher defaultMode="dark" />

<div class="flex min-h-screen flex-col px-4 antialiased">
	<div class="mx-auto flex w-full flex-grow items-start justify-center">
		<div class="w-full max-w-3xl space-y-4">
			<main class="flex flex-grow flex-col items-center justify-start gap-8">
				{@render children()}
			</main>
		</div>
	</div>
</div>
