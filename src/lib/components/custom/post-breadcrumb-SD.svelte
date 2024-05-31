<script lang="ts">
	import config from '@config';

	export let title: string;
	export let date: string;
	export let image: string;
</script>

<svelte:head>
	{@html `<script type="application/ld+json">
        [{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "${title}",
          ${
						image &&
						`"image": [
            "${config.site_url}${image}"
           ],`
					}
          "datePublished": "${date}",
          "author": [{
              "@type": "Person",
              "name": "Islam Zaoui",
              "url": "${config.site_url}"
            }]
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "Blog",
                "item": "${config.site_url}/blog"
            },{
                "@type": "ListItem",
                "position": 2,
                "name": "${title}"
            }]
            }
    ]
    </script>`}
</svelte:head>
