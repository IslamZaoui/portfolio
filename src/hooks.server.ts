import { sequence } from '@sveltejs/kit/hooks';
import { i18n } from '$lib/i18n';
import type { Handle } from '@sveltejs/kit';
import { nanoid } from 'nanoid';
import config from '@config';

const handleSecurityHeaders: Handle = async ({ event, resolve }) => {
    const response = await resolve(event)

    response.headers.set('X-Frame-Options', 'SAMEORIGIN')
    response.headers.set('X-Content-Type-Options', 'nosniff')
    response.headers.set('Referrer-Policy', 'no-referrer-when-downgrade')
    response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
    response.headers.set('Access-Control-Allow-Origin', config.site_url || '*')

    return response
}


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
    handleAntiCSRFToken,
    handleSecurityHeaders
);
