import z from "zod";


export const RegisterSchema = z.object({
    name: z.string().min(1, 'Name field is required'),
    email: z.string().email().min(1, 'Email field is required'),
    password: z.string().min(1, 'Password field is required')
});

