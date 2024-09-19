import { sequence } from '@sveltejs/kit/hooks';
import { i18n } from '$lib/i18n';
import type { Handle } from '@sveltejs/kit';
import { nanoid } from 'nanoid';

const handleAntiCSRFToken: Handle = async ({ event, resolve }) => {
    const csrfToken = event.cookies.get('csrfToken');

    if (!csrfToken) {
        const newCsrfToken = nanoid(16);
        event.locals.csrfToken = newCsrfToken;
        event.cookies.set('csrfToken', newCsrfToken, {
            httpOnly: true,
            sameSite: 'strict',
            secure: true,
            path: '/',
            maxAge: 60 * 60 * 24
        });
    } else {
        event.locals.csrfToken = csrfToken;
    }

    return await resolve(event)
}

export const handle = sequence(
    i18n.handle(),
    handleAntiCSRFToken
);
