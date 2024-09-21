import { dev } from '$app/environment';

const SITE_URL = dev ? 'http://localhost:5173' : 'https://islamzaoui.top';

const SITE_NAME = 'Islam Zaoui';

const SITE_KEYWORDS = {
	en: "Islam Zaoui, Portfolio, Web Developer, Software Engineer",
	ar: "Islam Zaoui, ملف الشخصي, مطور ويب, مهندس برمجيات"
}

const SITE_DESCRIPTION = {
	en: 'My Personal Portfolio and Blog',
	ar: 'ملف الشخصي والمدونة'
};

const REPOSITORY = 'https://github.com/IslamZaoui/portfolio';

const SOCIAL_LINKS = {
	TWITTER: 'IslamZaoui_',
	GITHUB: 'IslamZaoui',
	LINKEDIN: 'islamzaoui',
	YOUTUBE: '@IslamZaoui_'
};

const EMAIL = 'contact@islamzaoui.top';

const LOCATION = {
	en: 'Algeria - Blida',
	ar: 'الجزائر - البليدة'
};

export default {
	SITE_URL,
	SITE_DESCRIPTION,
	REPOSITORY,
	SOCIAL_LINKS,
	EMAIL,
	LOCATION,
	SITE_NAME,
	SITE_KEYWORDS
};
