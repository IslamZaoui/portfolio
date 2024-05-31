import { ImageResponse } from './response';
import OG from './og.svelte';

const fontUrl = '/fonts/Tajawal-Bold.ttf';

const height = 630;
const width = 1200;

function isStringArabic(input: string) {
	const arabicRegex = /^[\u0600-\u06FF\s]+$/;
	return arabicRegex.test(input);
}

function flipArabicText(text: string) {
	const words = text.split(/\s+/);
	const reversedWords = words.reverse();
	const reversedText = reversedWords.join(' ');
	return reversedText;
}

export const GET = async ({ params, fetch }) => {
	const text = isStringArabic(params.text) ? flipArabicText(params.text) : params.text;
	const fontData = await fetch(fontUrl).then((res) => res.arrayBuffer());

	const imageResponse = new ImageResponse(
		OG as any,
		{
			width,
			height,
			fonts: [
				{
					name: 'Tajawal',
					data: fontData,
					style: 'normal'
				}
			]
		},
		{
			text
		}
	);

	return new Response(imageResponse.body, {
		status: 200,
		headers: {
			...imageResponse.headers,
			'Cache-Control': 'public, max-age=86400, immutable'
		}
	});
};
