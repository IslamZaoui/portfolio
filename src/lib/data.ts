import { dev } from '$app/environment';

import type { Experience } from './types';

export const url = dev ? 'http://localhost:5173' : 'https://www.islamzaoui.top/';

export const experiences: Experience[] = [
	{
		title: 'Lead Back-End Engineer',
		at: 'TechsSales'
	},
	{
		title: 'Full-Stack Web Developer',
		at: 'Freelance'
	}
];
