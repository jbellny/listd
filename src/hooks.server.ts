import { detectLocale } from '$lib/i18n/i18n-util';
import type { Handle } from '@sveltejs/kit';
import { initAcceptLanguageHeaderDetector } from 'typesafe-i18n/detectors';

export const handle = (async ({ event, resolve }) => {
	// TODO: get lang from header
	// TODO: get lang from cookie

	const acceptLanguageHeaderDetector = initAcceptLanguageHeaderDetector(event.request);
	const locale = detectLocale(acceptLanguageHeaderDetector);
	event.locals.locale = locale;

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', locale)
	});
}) satisfies Handle;
