<script lang="ts">
	import ExperienceItem from '@/components/experience-item.svelte';
	import { experiences } from '@/data';
</script>

<section id="about" class="w-full space-y-4">
	<h2 class="text-2xl font-bold">About Me</h2>
	<p>
		Hi! I'm Islam, a Full-Stack Web Developer. Passionate about creating robust tools and web
		applications to empower developers, enhance user experiences, and bring ideas to life through
		clean, secure, and scalable code.
	</p>
</section>

<section id="Experience" class="w-full space-y-4">
	<h2 class="text-2xl font-bold">Experience</h2>
	<ol class="border-muted relative border-s">
		{#each experiences as experience, index}
			<ExperienceItem {experience} {index} />
		{/each}
	</ol>
</section>
