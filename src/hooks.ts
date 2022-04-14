// https://gist.github.com/acoyfellow/d8e86979c66ebea25e1643594e38be73
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
// https://scotthelme.co.uk/content-security-policy-an-introduction/
// scanner: https://securityheaders.com/
// Sentry documentation: https://docs.sentry.io/product/security-policy-reporting/

import type { Handle } from '@sveltejs/kit';
import { config } from 'dotenv';

config();

const rootDomain = import.meta.env.DEV ? 'localhost' : import.meta.env.VITE_DOMAIN; // or your server IP for dev

const directives = {
	'base-uri': ["'self'"],
	'child-src': ["'self'"],
	'connect-src': ["'self'", 'ws://localhost:*'],
	// 'connect-src': ["'self'", 'ws://localhost:*', 'https://hcaptcha.com', 'https://*.hcaptcha.com'],
	'img-src': ["'self'", 'data:'],
	'font-src': ["'self'", 'data:', 'https://fonts.gstatic.com'],
	'form-action': ["'self'"],
	'frame-ancestors': ["'self'"],
	'frame-src': [
		"'self'",
		// "https://*.stripe.com",
		// "https://*.facebook.com",
		// "https://*.facebook.net",
		// 'https://hcaptcha.com',
		// 'https://*.hcaptcha.com',
		'https://utteranc.es'
	],
	'manifest-src': ["'self'"],
	'media-src': ["'self'", 'data:'],
	'object-src': ["'none'"],
	'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
	// 'style-src': ["'self'", "'unsafe-inline'", 'https://hcaptcha.com', 'https://*.hcaptcha.com'],
	'default-src': [
		"'self'",
		rootDomain
		// `ws://${rootDomain}`
		// 'https://*.google.com',
		// 'https://*.googleapis.com',
		// 'https://*.firebase.com',
		// 'https://*.gstatic.com',
		// 'https://*.cloudfunctions.net',
		// 'https://*.algolia.net',
		// 'https://*.facebook.com',
		// 'https://*.facebook.net',
		// 'https://*.stripe.com',
		// 'https://*.sentry.io',
	],
	'script-src': [
		"'self'",
		"'unsafe-inline'",
		'https://utteranc.es'
		// 'https://*.stripe.com',
		// 'https://*.facebook.com',
		// 'https://*.facebook.net',
		// 'https://hcaptcha.com',
		// 'https://*.hcaptcha.com',
		// 'https://*.sentry.io',
		// 'https://polyfill.io',
	],
	'worker-src': ["'self'"],
	// remove report-to & report-uri if you do not want to use Sentry reporting
	'report-to': ["'csp-endpoint'"],
	'report-uri': [
		`https://o1128842.ingest.sentry.io/api/6329949/security/?sentry_key=323711c731c14daa9181f1e638bcc49a`
	]
};

const csp = Object.entries(directives)
	.map(([key, arr]) => key + ' ' + arr.join(' '))
	.join('; ');

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);
	response.headers.set('X-Frame-Options', 'SAMEORIGIN');
	response.headers.set('Referrer-Policy', 'no-referrer');
	response.headers.set(
		'Permissions-Policy',
		'accelerometer=(), autoplay=(), camera=(), document-domain=(), encrypted-media=(), fullscreen=(), gyroscope=(), interest-cohort=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), sync-xhr=(), usb=(), xr-spatial-tracking=(), geolocation=()'
	);
	response.headers.set('X-Content-Type-Options', 'nosniff');
	/* Switch from Content-Security-Policy-Report-Only to Content-Security-Policy once you are satisifed policy is what you want
	 * on switch comment out the Report-Only line
	 */
	// response.headers.set('Content-Security-Policy-Report-Only', csp);
	response.headers.set('Content-Security-Policy', csp);
	response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
	response.headers.set(
		'Expect-CT',
		`max-age=86400, report-uri="https://o1128842.ingest.sentry.io/api/6329949/security/?sentry_key=323711c731c14daa9181f1e638bcc49a"`
	);
	response.headers.set(
		'Report-To',
		`{group: "csp-endpoint", "max_age": 10886400, "endpoints": [{"url": "https://o1128842.ingest.sentry.io/api/6329949/security/?sentry_key=323711c731c14daa9181f1e638bcc49a"}]}`
	);
	response.headers.set(
		'Public-Key-Pins',
		'report-uri="https://o1128842.ingest.sentry.io/api/6329949/security/?sentry_key=323711c731c14daa9181f1e638bcc49a"'
	);
	return response;
};
