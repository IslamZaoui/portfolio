import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { markdoc } from 'svelte-markdoc-preprocess';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		markdoc({
			tags: join(dirname(fileURLToPath(import.meta.url)), './src/lib/markdoc/tags/Tags.svelte'),
			nodes: join(dirname(fileURLToPath(import.meta.url)), './src/lib/markdoc/nodes/Nodes.svelte')
		})
	],
	extensions: ['.svelte', '.md'],
	kit: {
		adapter: adapter({
			pages: "public",
			assets: "public",
			fallback: "200.html"
		}),
		alias: {
			"@/*": "./src/lib/*",
			"@assets/*": "./user/assets/*",
			"@posts/*": "./user/posts/*",
			"@config": "./user/config.ts",
		}
	}
};

export default config;
