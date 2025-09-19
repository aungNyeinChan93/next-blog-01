import { Prisma } from "@/generated/prisma"



export type CommentType = Prisma.CommentGetPayload<{
    include: { article: true, user: true }
}>

export async function getAllCommentsByArticleId(article_id: string) {
    const comments: CommentType[] | undefined = await prisma?.comment?.findMany(
        {
            where: { article_id: article_id as string },
            include: { article: true, user: true },
            orderBy: { createdAt: "desc" }
        }
    )
    return comments
}