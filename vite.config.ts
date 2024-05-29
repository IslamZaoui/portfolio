import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, searchForWorkspaceRoot } from 'vite';
import { imagetools } from 'vite-imagetools';
import ViteYaml from '@modyfi/vite-plugin-yaml';

export default defineConfig({
	plugins: [imagetools(), ViteYaml(), sveltekit()],
	server: {
		fs: {
			allow: [searchForWorkspaceRoot(process.cwd()), './user/*']
		}
	}
});
