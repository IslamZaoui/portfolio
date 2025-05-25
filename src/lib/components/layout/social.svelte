<script lang="ts">
	import * as Icons from '@/components/icons.svelte';

	const socials = {
		X: {
			link: 'https://x.com/IslamZaouiDev',
			icon: Icons.XIcon
		},
		github: {
			link: 'https://github.com/IslamZaoui',
			icon: Icons.GithubIcon
		},
		youtube: {
			link: 'https://www.youtube.com/@IslamZaoui_',
			icon: Icons.YoutubeIcon
		}
	};
</script>

<div class="flex w-full gap-3">
	{#each Object.entries(socials) as [key, value]}
		<a
			href={value.link}
			target="_blank"
			rel="noreferrer"
			class="transition-transform duration-300 ease-in-out hover:scale-[125%]"
			title={key}
		>
			{@render value.icon({ class: 'size-6' })}
		</a>
	{/each}
</div>
