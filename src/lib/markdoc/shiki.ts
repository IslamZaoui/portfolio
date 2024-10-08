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

export const availableLanguages = shiki.getLoadedLanguages();

export const codeToHtml = (content: string, language: string) => {
	return shiki.codeToHtml(content, {
		lang: language,
		theme: 'github-dark',
		transformers: [
			transformerNotationDiff(),
			transformerNotationErrorLevel(),
			transformerNotationHighlight()
		]
	});
};
