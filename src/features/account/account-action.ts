'use server'

import { Role } from "@/generated/prisma"


export async function changeRoleAction(initState: any, formData: FormData) {
    const role = formData.get('role') as string
    const user_id = formData.get('user_id') as string

    if (!user_id || !role) {
        return
    };

    try {
        const success = !!(await prisma?.user?.update({
            where: { id: user_id as string },
            data: { role: role as Role }
        }))

        if (!success) {
            return { success: false, errors: { role: 'fail' } }
        }

    } catch (error) {
        return { success: false, errors: { role: error instanceof Error ? error?.message : "fail" } }
    }

    return { success: true }
}