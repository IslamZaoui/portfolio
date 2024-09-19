import { RateLimiter } from 'sveltekit-rate-limiter/server';

export const contactRateLimiter = new RateLimiter({
	IP: [1, 'h'] // 1 request per hour
});
