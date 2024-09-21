import { paraglide } from '@inlang/paraglide-sveltekit/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, searchForWorkspaceRoot } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import ViteYaml from '@modyfi/vite-plugin-yaml';

export default defineConfig({
	plugins: [
		paraglide({ project: './project.inlang', outdir: './src/lib/paraglide' }),
		ViteYaml(),
		enhancedImages(),
		sveltekit()
	],
	server: {
		fs: {
			allow: [searchForWorkspaceRoot(process.cwd()), './user/*']
		}
	}
});
