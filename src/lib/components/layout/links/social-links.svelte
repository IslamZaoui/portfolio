<script lang="ts">
	import Twitter from 'lucide-svelte/icons/twitter';
	import Github from 'lucide-svelte/icons/github';
	import Linkedin from 'lucide-svelte/icons/linkedin';
	import Youtube from 'lucide-svelte/icons/youtube';
	import { SOCIAL_LINKS } from '@config';

	const socials = [
		{
			url: `https://x.com/${SOCIAL_LINKS.TWITTER}`,
			icon: Twitter,
			title: 'Twitter Profile'
		},
		{
			url: `https://github.com/${SOCIAL_LINKS.GITHUB}`,
			icon: Github,
			title: 'GitHub Profile'
		},
		{
			url: `https://linkedin.com/in/${SOCIAL_LINKS.LINKEDIN}`,
			icon: Linkedin,
			title: 'LinkedIn Profile'
		},
		{
			url: `https://youtube.com/${SOCIAL_LINKS.YOUTUBE}`,
			icon: Youtube,
			title: 'YouTube Channel'
		}
	];
</script>

<div class="flex w-full gap-3">
	{#each socials as { url, icon, title }}
		<a href={url} target="_blank" rel="noreferrer" class="social-anchor" {title}>
			<svelte:component this={icon} />
		</a>
	{/each}
</div>
