import type { Handle } from '@sveltejs/kit';
import { initAcceptLanguageHeaderDetector } from 'typesafe-i18n/detectors';

export const handle = (async ({ event, resolve }) => {
	// TODO: get lang from header
	// TODO: get lang from cookie
	event.locals.lang = initAcceptLanguageHeaderDetector(event.request)();

	return resolve(event);
}) satisfies Handle;
