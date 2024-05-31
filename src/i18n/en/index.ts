import type { BaseTranslation } from '../i18n-types';

const en = {
	//Error Page
	ERROR: 'Error',
	BACKBUTTON: 'Back to Previous Page',
	//Header
	SUBTITLE: 'Full Stack Web Developer',
	ABOUT: 'About',
	BLOG: 'Blog',
	CONTACT: 'Contact',
	USES: 'Uses',
	//Footer
	FOOTER: '© 2024 - All Rights Reserved',
	//About Page
	ABOUTME: 'About Me',
	ABOUTTXT:
		"Junior Full Stack Web Developer graduated from the University of M'sila with a license degree in Computer Science. Passionate about creating tools, UI/UX designs and web development.",
	EXPERIENCES: 'Experiences',
	PRESENT: 'present',
	PROJECTS: 'Projects',
	LATEST: 'Latest Posts',
	READMORE: 'Read more posts',
	LOADING: 'Loading...',
	//Blog page
	MYBLOG: 'My Blogs',
	BLOGTXT: "Here's my blog. I write about my projects and my experiences.",
	BACK: 'Back',
	BLOG_NOTFOUND:"There's no blog post yet.\n Please check back later or change the language.",
	//UsesPage
	TOOLKIT: {
		USES: 'What I use',
		USESTXT: 'My toolkit that I use to help me build my projects in both software and hardware.',
		HARDWARE: 'Hardware',
		HARDWARE_ITEMS: [
			{
				NAME: 'Laptop Dell latitude 3520 (15.6", 8GB RAM, 256GB SSD)',
				DESCRIPTION: 'my primary device'
			}
		],
		SOFTWARE: 'Software',
		SOFTWARE_ITEMS: [
			{
				NAME: 'Cursor',
				DESCRIPTION: 'AI powered VS Code alternative'
			},
			{
				NAME: 'Chrome',
				DESCRIPTION: 'best browser ever'
			},
			{
				NAME: 'Photopea',
				DESCRIPTION: 'online photoshop alternative'
			},
			{
				NAME: 'Draw.io',
				DESCRIPTION: 'online diagraming tool'
			}
		]
	},
	//Contact Page
	EMAIL: 'Email',
	CONTACTME: 'Contact Me',
	CONTACTTXT: 'You have an idea or a project. Let\'s talk about it, feel free to contact me with my email or social media account.',
} satisfies BaseTranslation;

export default en;
