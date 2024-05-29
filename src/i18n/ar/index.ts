import type { BaseTranslation } from '../i18n-types';

const ar = {
	//Error Page
	ERROR: 'خطأ',
	BACKBUTTON: 'العودة إلى الصفحة السابقة',
	//Header
	SUBTITLE: 'مطور ويب متكامل',
	ABOUT: 'عني',
	BLOG: 'مدونة',
	CONTACT: 'تواصل',
	USES: 'أستخدم',
	//Footer
	FOOTER: '© 2024 - جميع الحقوق محفوظة',
	//About Page
	ABOUTTXT:
		'مطور ويب كامل مبتدئ تخرج من جامعة المسيلة بشهادة اليسانس في علوم الكمبيوتر. شغوف بإنشاء الأدوات وتصميمات UI/UX وتطوير الويب.',
	EXPERIENCES: 'التجارب',
	PRESENT: 'حاليا',
	PROJECTS: 'المشاريع',
	LATEST: 'آخر المشاركات',
	READMORE: 'اقرأ المزيد',
	LOADING: 'جار التحميل...',
	//Blog page
	BACK: 'رجوع',
	BLOG_NOTFOUND:
		'لا توجد مشاركة معينة في المدونة الخاصة بي. الرجاء التحقق من الحصول عليها في وقت لاحق. أو قم بتغيير اللغة.',
	//Uses Page
	TOOLKIT: {
		INTRO: 'مجموعة الأدوات التي أستخدمها لمساعدتي في بناء مشاريعي في كل من البرمجيات والأجهزة.',
		HARDWARE: 'الأجهزة',
		HARDWARE_ITEMS: [
			{
				NAME: 'لاب توب Dell Latitude 3520 (شاشة 15.6", ذاكرة 8GB، قرص صلب SSD 256GB)',
				DESCRIPTION: 'جهازي الأساسي'
			}
		],
		SOFTWARE: 'البرمجيات',
		SOFTWARE_ITEMS: [
			{
				NAME: 'Cursor',
				DESCRIPTION: 'بديل VS Code المدعوم بالذكاء الاصطناعي'
			},
			{
				NAME: 'Chrome',
				DESCRIPTION: 'أفضل متصفح على الإطلاق'
			},
			{
				NAME: 'Photopea',
				DESCRIPTION: 'بديل فوتوشوب عبر الإنترنت'
			},
			{
				NAME: 'Draw.io',
				DESCRIPTION: 'أداة رسم تخطيطي عبر الإنترنت'
			}
		]
	},
	//Contact Page
	CONTACTS: {
		TEXT1: 'هل لديك مشروع أو فكرة تريد مناقشتها؟ يسعدني سماع ذلك.',
		TEXT2:
			'لا تتردد في التواصل معي على أي من منصات التواصل الاجتماعي أعلاه أو عبر البريد الإلكتروني.',
		EMAIL: 'البريد الإلكتروني'
	}
} satisfies BaseTranslation;

export default ar;
