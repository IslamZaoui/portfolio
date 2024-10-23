// copied from https://github.com/jdgamble555/sveltekit-vercel-og
import { ImageResponse as VercelOGImageResponse } from '@vercel/og';
import type { ComponentProps, Component } from 'svelte';
import { html } from 'satori-html';

function unescapeHtml(html: string) {
	return html
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/&#039;/g, "'");
}

export interface SvelteComponentSSR<T extends Component<ComponentProps<T>>> {
	render: (props?: ComponentProps<T>) => SvelteRenderResult;
}

export interface SvelteRenderResult {
	html: string;
	css: {
		code: string;
		map: null;
	};
	head: string;
}

export class ImageResponse<T extends Component<ComponentProps<T>>> extends VercelOGImageResponse {
	constructor(
		component: T,
		options?: ConstructorParameters<typeof VercelOGImageResponse>[1],
		props?: ComponentProps<T>
	) {
		const result = (component as unknown as SvelteComponentSSR<T>).render(props);
		const element = html(unescapeHtml(`${result.html}<style>${result.css.code}</style>`));
		super(element, options);
	}
}
