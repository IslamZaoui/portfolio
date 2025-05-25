<script lang="ts">
	import '../app.css';

	import '@fontsource-variable/geist-mono';
	import { ModeWatcher } from 'mode-watcher';

	import { Header } from '@/components/layout';

	const { children } = $props();
</script>

<ModeWatcher defaultMode="dark" />

<div class="min-h-screen px-4 antialiased">
	<div class="mx-auto max-w-3xl space-y-4">
		<Header />
		<main class="flex flex-col gap-8">
			{@render children()}
		</main>
	</div>
</div>
