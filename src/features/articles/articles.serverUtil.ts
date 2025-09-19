'use server'

import { Prisma } from '@/generated/prisma';
import fs from 'fs'
import path from 'path'
import { prisma } from '@/lib/prisma-client'


export async function fileUpload(file: File, dir?: string) {

    if (!fs.existsSync(path.join(process.cwd(), '/public/', dir as string))) {
        await fs.promises.mkdir(path.join(process.cwd(), '/public/', dir as string));
    };

    const fileName = `${crypto.randomUUID()}-${file.name}`
    const filePath = path.join(dir as string, fileName);

    const bufferFile = Buffer.from(await file.arrayBuffer());

    if (bufferFile) {
        await fs.promises.writeFile(path.join(process.cwd(), 'public', filePath), bufferFile)
    }
    return filePath;
};

export type ArticleType = Prisma.ArticleGetPayload<{
    include: {
        author: true, categories: true, comments: true, _count: {
            select: { comments: true, categories: true }
        }
    },

}>
export async function getAllArticles() {
    const articles: ArticleType[] | undefined = await prisma?.article.findMany({
        include: {
            author: true, categories: true, comments: true, _count:
                { select: { comments: true, categories: true } }
        }
    })
    return articles;
}


export async function getArticelById(id?: string) {
    const article: ArticleType | null = await prisma?.article?.findUnique({
        where: { id },
        include: {
            author: true, categories: true, comments: true, _count: {
                select: { categories: true, comments: true }
            }
        }
    })
    return article
}