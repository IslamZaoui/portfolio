import { RateLimiter } from 'sveltekit-rate-limiter/server';

export const contactRateLimiter = new RateLimiter({
	IP: [3, 'h'] // 3 tries per hour
});
