<script lang="ts">
	import '../app.css';

	import '@fontsource-variable/geist-mono';
	import { ModeWatcher } from 'mode-watcher';

	import { Header } from '@/components/layout';

	const { children } = $props();
</script>

<ModeWatcher defaultMode="dark" />

<div class="contents">
	<div class="min-h-screen px-6 antialiased">
		<div class="mx-auto max-w-3xl space-y-4">
			<Header />
			<main class="flex flex-col gap-16">
				{@render children()}
			</main>
		</div>
	</div>

	<footer class="mt-16 p-4 pb-6 text-center text-sm">
		© {new Date().getFullYear()} - All Rights Reserved -
		<a
			class="anchor"
			href="https://github.com/islamzaoui/portfolio"
			target="_blank"
			rel="noopener noreferrer"
			title="Visit this site github repository"
			aria-label="Visit this site github repository (opens in new tab)"
		>
			source code
		</a>
	</footer>
</div>
