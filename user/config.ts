import { dev } from '$app/environment';
import brain from 'lucide-svelte/icons/brain';
import megaphone from 'lucide-svelte/icons/megaphone';

const site_url = dev ? 'http://localhost:5173' : ('https://islamzaoui.top' as const);
const site_description = {
	en: 'My Personal Portfolio and Blog',
	ar: 'ملف الشخصي والمدونة'
} as const;

const repo = 'https://github.com/IslamZaoui/portfolio' as const;

const social_links = {
	Twitter: 'IslamZaoui_',
	GitHub: 'IslamZaoui',
	LinkedIn: 'zaouiislam',
	YouTube: '@IslamZaoui_'
} as const;

const email = 'contact@islamzaoui.top' as const;

const location = {
	en: 'Algeria - Blida',
	ar: 'الجزائر - البليدة'
};

const experiences = [
	{
		en: {
			title: 'Full Stack Web Developer',
			at: "University of M'sila"
		},
		ar: {
			title: 'مطور ويب متكامب',
			at: 'جامعة مسيلة'
		}
	}
] as const;

const projects = [
	{
		content: {
			en: {
				name: 'Attendace Tracker',
				description: 'app that allow teachers to take attendance'
			},
			ar: {
				name: 'Attendace Tracker',
				description: 'تطبيق يسمح للمعلمين بتسجيل الحضور'
			}
		},
		url: 'https://github.com/IslamZaoui/Attendance-Tracker',
		icon: megaphone
	},
	{
		content: {
			en: {
				name: 'Intellect',
				description: 'Web e-learning platform for students'
			},
			ar: {
				name: 'Intellect',
				description: 'منصة تعليم عن بعد للطلاب'
			}
		},
		url: 'https://intellectweb.fly.dev',
		icon: brain
	}
] as const;

export default {
	site_url,
	site_description,
	repo,
	social_links,
	email,
	location,
	experiences,
	projects
};
