import brain from 'lucide-svelte/icons/brain';
import megaphone from 'lucide-svelte/icons/megaphone';

const social_links = {
	Twitter: 'IslamZaoui_',
	GitHub: 'IslamZaoui',
	LinkedIn: 'zaouiislam',
	YouTube: '@IslamZaoui_'
} as const;

const email = 'contact@islamzaoui.top' as const;

const experiences = [
	{
		title: 'Full Stack Web Developer',
		at: "University of M'sila"
	}
] as const;

const projects = [
	{
		name: 'Attendace Tracker',
		description: 'app that allow teachers to take attendance',
		url: 'https://github.com/IslamZaoui/Attendance-Tracker',
		icon: megaphone
	},
	{
		name: 'Intellect',
		description: 'E-learning platform',
		url: 'https://intellectweb.fly.dev',
		icon: brain
	}
] as const;

export default {
	social_links,
	email,
	experiences,
	projects
};
