import { Prisma } from "@/generated/prisma";
import { prisma } from '@/lib/prisma-client'

export type UserType = Prisma.UserGetPayload<{
    include: {
        _count: { select: { articles: true, comments: true }, },
        accounts: true,
        articles: true,
        comments: true,
        sessions: true
    }
}>

export async function getAllUsers() {
    const users: UserType[] | undefined = await prisma?.user?.findMany({
        include: {
            _count: { select: { articles: true, comments: true } },
            accounts: true,
            articles: true,
            comments: true,
            sessions: true
        }
    })
    return users;
}


export async function getUserById(id: string) {
    const user: UserType | null = await prisma.user.findUnique({
        where: { id },
        include: {
            _count: { select: { articles: true, comments: true } },
            accounts: true,
            articles: true,
            comments: true,
            sessions: true
        }
    })
    return user
}