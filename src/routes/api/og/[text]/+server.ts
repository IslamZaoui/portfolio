import { ImageResponse } from './response';
import OGHTML from './og.html?raw';

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

export const GET = async ({ params }) => {
	const text = isStringArabic(params.text) ? flipArabicText(params.text) : params.text;
	const htmlString = OGHTML.replace('{{text}}', text);
	return new ImageResponse(htmlString, {
		width,
		height
	});
};
