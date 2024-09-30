import { dev } from '$app/environment';

export const SITE_URL = dev ? 'http://localhost:5173' : ('https://islamzaoui.top' as const);

export const SITE_NAME = 'Islam Zaoui';

export const SITE_KEYWORDS = {
	en: 'Islam Zaoui, Portfolio, Web Developer, Software Engineer',
	ar: 'Islam Zaoui, ملف الشخصي, مطور ويب, مهندس برمجيات'
};

export const SITE_DESCRIPTION = {
	en: 'My Personal Portfolio and Blog',
	ar: 'ملف الشخصي والمدونة'
};

export const REPOSITORY = 'https://github.com/IslamZaoui/portfolio';

export const SOCIAL_LINKS = {
	TWITTER: 'IslamZaoui_',
	GITHUB: 'IslamZaoui',
	LINKEDIN: 'islamzaoui',
	YOUTUBE: '@IslamZaoui_'
};

export const EMAIL = 'contact@islamzaoui.top';

export const LOCATION = {
	en: 'Algeria - Blida',
	ar: 'الجزائر - البليدة'
};
