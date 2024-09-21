<script lang="ts">
	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';
	import { toggleMode } from 'mode-watcher';
	import { Button } from '@/components/ui/button/index';

	const toggleModeWithTransition = () => {
		if (document.startViewTransition) {
			document.startViewTransition(() => {
				toggleMode();
			});
		} else {
			toggleMode();
		}
	};
</script>

<Button on:click={toggleModeWithTransition} size="icon" variant="ghost" title="Toggle theme">
	<Sun
		class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
	/>
	<Moon
		class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0
		dark:scale-100"
	/>
	<span class="sr-only">Toggle theme</span>
</Button>

<style>
	:global(::view-transition-group(root)) {
		animation-duration: 0.7s;
		animation-timing-function: var(--expo-out);
	}

	:global(::view-transition-new(root)) {
		animation-name: reveal-light;
	}

	:global(::view-transition-old(root)),
	:global(.dark::view-transition-old(root)) {
		animation: none;
		z-index: -1;
	}
	:global(.dark::view-transition-new(root)) {
		animation-name: reveal-dark;
	}

	@keyframes reveal-dark {
		from {
			clip-path: polygon(50% -71%, -50% 71%, -50% 71%, 50% -71%);
		}
		to {
			clip-path: polygon(50% -71%, -50% 71%, 50% 171%, 171% 50%);
		}
	}

	@keyframes reveal-light {
		from {
			clip-path: polygon(171% 50%, 50% 171%, 50% 171%, 171% 50%);
		}
		to {
			clip-path: polygon(171% 50%, 50% 171%, -50% 71%, 50% -71%);
		}
	}
</style>
