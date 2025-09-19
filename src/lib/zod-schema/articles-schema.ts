import z from "zod";


export const ArticleSchema = z.object({
    title: z.string().min(1, 'title field is required'),
    body: z.string().min(1, 'body field is required'),
    image: z.instanceof(File)
        .refine(file => file.size > 0, 'image field is required')
        .refine(file => ['image/png', 'image/jpeg', 'image/webp', 'image/gif'].includes(file.type), 'unsupport file type')
})