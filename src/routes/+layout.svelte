<script lang="ts">
	import '../app.css';

	import '@fontsource-variable/geist-mono';
	import { ModeWatcher } from 'mode-watcher';

	import { Header } from '@/components/layout';

	const { children } = $props();
</script>

<ModeWatcher defaultMode="dark" />

<div class="contents">
	<div class="min-h-screen px-4 antialiased">
		<div class="mx-auto max-w-3xl space-y-4">
			<Header />
			<main class="flex flex-col gap-16">
				{@render children()}
			</main>
		</div>
	</div>

	<footer class="mt-16 p-4 pb-8 text-center text-sm">
		© {new Date().getFullYear()} - All Rights Reserved -
		<a href="https://github.com/islamzaoui/portfolio" target="_blank" rel="noopener noreferrer">
			source code
		</a>
	</footer>
</div>
