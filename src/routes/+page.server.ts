import { PrismaClient } from '@prisma/client'
import type { PageServerLoad } from './$types'

const prismaClient = new PrismaClient()

export const load = (async () => {
	return {
		users: await prismaClient.user.findMany(),
	}
}) satisfies PageServerLoad
