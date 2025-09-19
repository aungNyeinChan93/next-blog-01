'use server'

import { getServerSession } from "../auth/auth-serverUtil";



export async function createCommentAction(initialState: any, formData: FormData) {
    const body = formData.get('body') as string;
    const article_id = formData.get('article_id') as string;

    const session = await getServerSession();
    const user_id = session?.user?.id;

    console.log({ body, });


    if (!body || !article_id || !user_id) {
        return { success: false, errors: { body: 'Comment field is required!' } }
    };

    try {
        const comment = await prisma?.comment?.create({
            data: { body, article_id, user_id }
        })
    } catch (error) {
        return { success: false, errors: { body: 'comment fail' } }
    }
    return { success: true }
};

export async function deleteCommentByAction(id: string) {
    const success = !!(await prisma?.comment.delete({ where: { id } }))
    return success;
} 