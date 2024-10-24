import { ImageResponse as VercelOGImageResponse } from '@vercel/og';
import { html } from 'satori-html';

function unescapeHtml(html: string) {
	return html
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/&#039;/g, "'");
}

export class ImageResponse extends VercelOGImageResponse {
	constructor(htmlString: string, options?: ConstructorParameters<typeof VercelOGImageResponse>[1]) {
		const element = html(unescapeHtml(htmlString));
		super(element, options);
	}
}
