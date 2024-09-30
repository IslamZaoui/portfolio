import adapter from '@sveltejs/adapter-vercel';
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
		adapter: adapter(),
		alias: {
			'@/*': './src/lib/*',
			'@assets/*': './user/assets/*',
			'@posts/*': './user/posts/*',
			'@config': './user/config.ts',
			'@uses/*': './user/uses/*',
			'@experiences/*': './user/experiences/*',
			'@projects/*': './user/projects/*',
			'@i18n': './src/lib/paraglide/messages.js'
		},
		csp: {
			mode: 'auto',
			directives: {
				'base-uri': ["'self'"],
				'child-src': ["'self'"],
				'connect-src': ["'self'", 'ws://localhost:*', "wss://ws-us3.pusher.com", "https://sockjs-us3.pusher.com"],
				'img-src': ["'self'", 'https:'],
				'font-src': ["'self'"],
				'form-action': ["'self'"],
				'frame-ancestors': ["'self'"],
				'frame-src': ["'self'", 'https://www.youtube-nocookie.com', "https://vercel.live"],
				'manifest-src': ["'self'"],
				'media-src': ["'self'", 'https:'],
				'object-src': ["'none'"],
				'style-src': ["'self'", "'unsafe-inline'"],
				'default-src': ["'self'"],
				'script-src': ["'self'", "https://vercel.live"],
				'worker-src': ["'self'"]
			}
		}
	}
};

export default config;
