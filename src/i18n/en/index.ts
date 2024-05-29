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
	ABOUTTXT:
		"Junior Full Stack Web Developer graduated from the University of M'sila with a degree in Computer Science. Passionate about creating tools, UI/UX designs and web development.",
	EXPERIENCES: 'Experiences',
	PRESENT: 'present',
	PROJECTS: 'Projects',
	LATEST: 'Latest Posts',
	READMORE: 'Read More',
	LOADING: 'Loading...',
	//Blog page
	BACK: 'Back',
	BLOG_NOTFOUND:"There's no blog post yet. Please check back later or change the language.",
	//UsesPage
	TOOLKIT: {
		INTRO: 'My toolkit that I use to help me build my projects in both software and hardware.',
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
	CONTACTS: {
		TEXT1: "You have a project or idea that you'd like to discuss? I'd love to hear from you.",
		TEXT2: 'Feel free to contact me on any of the social media platforms above or via email.',
		EMAIL: 'Email',
	}
} satisfies BaseTranslation;

export default en;
