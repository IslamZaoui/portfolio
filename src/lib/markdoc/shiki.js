import { createHighlighterCoreSync } from 'shiki/core';
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';
import {
	transformerNotationDiff,
	transformerNotationErrorLevel,
	transformerNotationHighlight
} from '@shikijs/transformers';

import java from 'shiki/langs/java.mjs';
import python from 'shiki/langs/python.mjs';
import bash from 'shiki/langs/bash.mjs';

import githubDark from 'shiki/themes/github-dark.mjs';

const shiki = createHighlighterCoreSync({
	themes: [githubDark],
	langs: [java, python, bash],
	engine: createJavaScriptRegexEngine()
});

const availableLanguages = shiki.getLoadedLanguages();

/**
 * @param {string} content Code content as a string.
 * @param {string} language Language to use for highlighting.
 * @returns {Promise<string>} The highlighted HTML.
 */
export default async (content, language) => {
	const lang = availableLanguages.includes(language) ? language : 'plaintext';
	return shiki.codeToHtml(content, {
		lang,
		theme: 'github-dark',
		transformers: [
			transformerNotationDiff(),
			transformerNotationErrorLevel(),
			transformerNotationHighlight()
		]
	});
};
