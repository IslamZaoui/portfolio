import type { BaseTranslation } from '../i18n-types';

const ar = {
	//Error Page
	ERROR: 'خطأ',
	BACKBUTTON: 'الرجوع إلي الصفحة السابقة',
	//Header
	SUBTITLE: 'مطور ويب متكامل',
	ABOUT: 'عني',
	BLOG: 'مدونة',
	CONTACT: 'تواصل',
	USES: 'أستخدم',
	//Footer
	FOOTER: '© 2024 - جميع الحقوق محفوظة',
	//About Page
	ABOUTME: 'عني',
	ABOUTTXT:"مطور ويب متكامل متخرج من جامعة محمد بوضياف مسيلة الجزائر بشهادة ليسانس في علوم الحاسوب, مهتم بتطوير الويب والتصميم والتطبيقات.",
	EXPERIENCES: 'تجارب',
	PRESENT: 'حاليا',
	PROJECTS: 'المشاريع',
	LATEST: 'أخر المنشورات',
	READMORE: 'قراءة المزيد',
	LOADING: 'جاري التحميل...',
	//Blog page
	MYBLOG: 'مدونتي',
	BLOGTXT: "هنا مدونتي, اكتب مقالات حول مشاريعي والتجاربي.",
	BACK: 'رجوع',
	BLOG_NOTFOUND: "لا يوجد شيء حاليا.",
	//UsesPage
	TOOLKIT: {
		USES: 'ماذا استخدم',
		USESTXT: 'ادواتي التي استخدمها في بناء مشاريعي من البرمجيات والاجهزة.',
		HARDWARE: 'الأجهزة',
		HARDWARE_ITEMS: [
			{
				NAME: 'Laptop Dell latitude 3520 (15.6", 8GB RAM, 256GB SSD)',
				DESCRIPTION: 'جهاز الأساسي'
			}
		],
		SOFTWARE: 'البرمجيات',
		SOFTWARE_ITEMS: [
			{
				NAME: 'Cursor',
				DESCRIPTION: 'بديل VS code مشغل بالذكاء الاصطناعي'
			},
			{
				NAME: 'Chrome',
				DESCRIPTION: 'افضل متصفح'
			},
			{
				NAME: 'Photopea',
				DESCRIPTION: 'بديل فوتوشوب'
			},
			{
				NAME: 'Draw.io',
				DESCRIPTION: 'اداة رسم المخططات'
			}
		]
	},
	//Contact Page
	EMAIL: 'البريد الالكتروني',
	CONTACTME: 'تواصل معي',
	CONTACTTXT: 'لديك فكرة او مشروع؟ تواصل معي عبر البريد الالكتروني او عبر وسائل التواصل الاجتماعي.',
} satisfies BaseTranslation;

export default ar;
