import type { Handle } from '@sveltejs/kit'
import { sequence } from '@sveltejs/kit/hooks'
import { detectLocale } from '$lib/i18n/i18n-util'
import { initAcceptLanguageHeaderDetector } from 'typesafe-i18n/detectors'
import { SvelteKitAuth } from '@auth/sveltekit'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import Google from '@auth/core/providers/google'
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '$env/static/private'

if (!GOOGLE_CLIENT_ID) {
    throw new Error('Missing GOOGLE_CLIENT_ID in .env')
}

if (!GOOGLE_CLIENT_SECRET) {
    throw new Error('Missing GOOGLE_CLIENT_SECRET in .env')
}

// TODO: move this to a sharedfile
const prisma = new PrismaClient()

const handleDetectLocale = (async ({ event, resolve }) => {
    // TODO: get lang from header
    // TODO: get lang from cookie

    const acceptLanguageHeaderDetector = initAcceptLanguageHeaderDetector(event.request)
    const locale = detectLocale(acceptLanguageHeaderDetector)
    event.locals.locale = locale

    return resolve(event, {
        transformPageChunk: ({ html }) => html.replace('%lang%', locale),
    })
}) satisfies Handle

const handleAuth = SvelteKitAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        Google({
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
        }),
    ],
})

export const handle = sequence(handleDetectLocale, handleAuth)
