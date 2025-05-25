<script lang="ts">
	import MoonIcon from '@lucide/svelte/icons/moon';
	import SunIcon from '@lucide/svelte/icons/sun';
	import { toggleMode } from 'mode-watcher';

	import { Button } from '@/components/ui/button';

	const toggleModeWithTransition = () => {
		if (document.startViewTransition) {
			document.startViewTransition(toggleMode);
			return;
		}

		toggleMode();
	};
</script>

<Button onclick={toggleModeWithTransition} variant="outline" size="icon">
	<SunIcon
		class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
	/>
	<MoonIcon
		class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
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
