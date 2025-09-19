'use server'

import { ArticleSchema } from "@/lib/zod-schema/articles-schema";
import { fileUpload } from "./articles.serverUtil";
import { getServerSession } from "../auth/auth-serverUtil";
import { prisma } from '@/lib/prisma-client'

export async function createArticleAction(initialStat: any, formData: FormData) {
    const session = await getServerSession();
    const data = Object.fromEntries(formData.entries());

    const { success, data: fields, error } = await ArticleSchema.safeParseAsync({ ...data })
    if (!success) {
        return {
            success, errors: {
                title: error?.format().title?._errors[0],
                body: error?.format().body?._errors[0],
                image: error?.format().image?._errors[0],
            }
        }
    }


    const imagePath = await fileUpload(fields?.image, '/articles');

    if (session && imagePath) {
        try {
            const article = await prisma?.article?.create({
                data: { ...fields, image: imagePath, author_id: session?.user?.id }
            });

        } catch (error) {
            return { success: false, errors: { other: error instanceof Error ? error?.message : 'create fail' } }
        }
    }

    return { success: true }
}