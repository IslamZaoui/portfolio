<script lang="ts">
	import '../app.pcss';
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import { gsap } from 'gsap';
	import { Flip } from 'gsap/Flip';
	import { ModeWatcher } from 'mode-watcher';

	gsap.registerPlugin(Flip);
	let state: Flip.FlipState;
	let targets = ['.header-button'].join(', ');

	beforeNavigate(async () => {
		state = Flip.getState(targets);
	});

	afterNavigate(async () => {
		try {
			await Flip.from(state, {
				targets,
				duration: 0.3,
				scale: true,
				ease: 'power1.easeOut',
				yoyo: true
			});
		} catch {}
	});
</script>

<ModeWatcher />
<slot />
