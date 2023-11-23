import type { LayoutServerLoad } from './$types'

export const load = (async ({ locals, locals: { getSession } }) => {
    return {
        session: await getSession(),
        locale: locals.locale,
    }
}) satisfies LayoutServerLoad
