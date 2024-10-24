---
title: 'رحلتي لإنشاء مكتبة SvelteKit'
date: '2024-10-24'
description: 'استكشاف كيفية إدارة مكتبة TypeScript في monorepo لـ SvelteKit'
published: true
---

## مقدمة

لفترة من الوقت، أردت إنشاء مكتبة مفتوحة المصدر لاختبار مهاراتي وتعلم مهارات جديدة في تطوير البرمجيات والمساهمة في نظام Svelte. جاءت هذه الفرصة عندما اكتشفت security headers في HTTP response headers. أردت اختبارها في محفظتي ولكنني واجهت تجربة مطور (DX) سيئة حيث لم تكن هناك وظيفة الإكمال التلقائي.

## الإلهام

وجدت [sveltekit-security-headers](https://github.com/kevinobee/sveltekit-security-headers)، وهي مكتبة كان بها بالضبط ما أردت ولكنها كانت تفتقر إلى ميزات مثل معالجة [Content-Security-Policy directives](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) والأمان الأساسي للأنواع. لذلك، قررت إنشاء مكتبتي الخاصة مع هذه الميزات المفقودة.

## عملية التطوير

### البحث والتخطيط

قبل كتابة أي كود، كنت مهتمًا بإدارة [securekit](https://github.com/islamzaoui/securekit) في monorepo على GitHub. كنت بحاجة إلى فهم كيفية التعامل مع إدارة الإصدارات والنشر على npm.

#### مكتبة TypeScript وإدارة الإصدارات

قادني بحثي إلى فيديو رائع من [Matt Pocock](https://x.com/mattpocockuk) حول نشر مكتبات TypeScript على npm.

{% youtube #eh89VE3Mk5g /%}

كان هذا الفيديو من [Matt Pocock](https://x.com/mattpocockuk) رائعًا ومفيدًا جدًا للبدء.

#### إعداد Monorepo

استخدمت في البداية [workspaces](https://bun.sh/docs/install/workspaces) الخاص بمدير الحزم Bun لإنشاء monorepo.

### إنشاء مستودع المشروع

قمت بإعداد مشروعي وإنشاء monorepo مع حزمة **securekit** TypeScript متبعًا الدروس التعليمية التي درستها. قمت بتضمين تطبيق SvelteKit تجريبي للاختبار بهذا الهيكل:

```plaintext
├── package.json
├── LICENSE
├── README.md
├── .gitignore
├── apps
│   └── demo  // تطبيق SvelteKit تجريبي
└── packages
    └── securekit // مكتبة typescript
```

### التدقيق والاختبار

أنشأت GitHub action للتدقيق في `.github/workflows/lint.yml` وحاولت نشر تطبيق SvelteKit التجريبي على Vercel. ومع ذلك، فشل لأن مساحة عمل Bun لم تعمل بشكل صحيح مع Vercel. كان علي إنشاء نص برمجي مخصص لبناء الحزمة أولاً، ثم التطبيق التجريبي.

### النشر

فشل النشر الأولي لـ **securekit@0.0.1** على npm عدة مرات. بعد استكشاف الأخطاء وإصلاحها وقراءة الوثائق، أدركت أن استخدام Bun كمدير مساحة عمل لم يكن الحل المثالي. هذا قادني للبحث عن حلول monorepo أفضل.

### تطور Monorepo

#### مساحات عمل Pnpm

ذهبت إلى [svelte-markdoc-preprocess](https://github.com/TorstenDittmann/svelte-markdoc-preprocess)، المكتبة التي أستخدمها لتحويل markdown إلى ما تقرأه الآن، ووجدت أنه يستخدم مساحات عمل pnpm لـ monorepo الخاص به. لذلك قررت استخدامه.

كان علي البحث واستبدال bun بـ pnpm في كل مكان في مشروعي وإضافة `pnpm-workspace.yaml`. ثم بعد المحاولة، عمل، ولكن مثل bun، لم يعمل كما هو متوقع، خاصة لتطبيق sveltekit التجريبي الذي نشرته على Vercel. كان يفشل في النشر بسبب النص البرمجي المخصص وفشل في بناء الاعتماد على الحزمة قبل التطبيق. مرة أخرى، كان علي إيجاد حل monorepo أفضل.

#### Turborepo

روجت Vercel لأحد منتجاتها، [**Turborepo**](https://turbo.build/). شاهدت [فيديو Fireship](https://www.youtube.com/watch?v=9iU_IE6vnJ8) عنه، وكان بالضبط ما كنت أحتاجه.

شاهدت فيديو البدء من [mattpocockuk](https://x.com/mattpocockuk) مرة أخرى.

{% youtube #hRyU0bN7qhw /%}

وبدأت على الفور باستخدامه في مشروعي. عدت إلى مدير الحزم `bun` للتثبيت والنشر الأسرع، قمت بإعداد `turborepo`، وتم الالتزام، وعمل على الفور كما هو متوقع.

### الميزة التالية

بعد حل مشاكل monorepo، اكتشفت أن SvelteKit كان لديه بالفعل Content-Security-Policy directives في `sveltekit.config.js`، وكانت مكتبتي تتجاوز هذه الإعدادات. طورت حلاً ونشرته بنجاح كـ **securekit@1.1.0**.

### اختبار الوحدات والمتصفح

لتحسين عملية الاختبار، نفذت:

- اختبار الحزمة باستخدام [Bun test](https://bun.sh/docs/cli/test)
- اختبار المتصفح مع [Playwright](https://playwright.dev/) للتحقق من الرؤوس
- التكامل مع Turbo.json وسير عمل CI

## الخاتمة

قدم هذا المشروع تجارب تعليمية قيمة في:

- إدارة monorepos
- تنفيذ سير عمل CI/CD
- صيانة مكتبة TypeScript مفتوحة المصدر

ستكون هذه التجارب لا تقدر بثمن للمشاريع المستقبلية وتساعد في منع الأخطاء المماثلة.

## المراجع

- [Matt Pocock](https://x.com/mattpocockuk)
- [sveltekit-security-headers](https://github.com/kevinobee/sveltekit-security-headers)
- [Turborepo](https://turbo.build/)
- [فيديو Fireship عن Monorepos](https://www.youtube.com/watch?v=9iU_IE6vnJ8)
