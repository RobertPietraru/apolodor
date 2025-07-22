import type { Handle } from '@sveltejs/kit';
import { paraglideMiddleware } from '$lib/paraglide/server';
import { extractLocaleFromRequest, localizeUrl } from '$lib/paraglide/runtime';

const handleParaglide: Handle = ({ event, resolve }) =>
	paraglideMiddleware(event.request, ({ request, locale }) => {
		event.request = request;

		// Get the URL locale and redirect if needed
		const urlLocale = extractLocaleFromRequest(request);
		const url = new URL(request.url);
		const localizedUrl = localizeUrl(url, { locale: urlLocale });

		if (localizedUrl.pathname !== url.pathname) {
			return new Response(null, {
				status: 302,
				headers: { Location: localizedUrl.pathname }
			});
		}

		return resolve(event, {
			transformPageChunk: ({ html }) => html.replace('%paraglide.lang%', locale)
		});
	});

export const handle: Handle = handleParaglide;
