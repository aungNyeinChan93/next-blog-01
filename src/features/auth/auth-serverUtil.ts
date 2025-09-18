import { auth } from "@/lib/auth";
import { Session } from "better-auth";
import { headers } from "next/headers";
import { cache } from "react";


export type ServerSession = typeof auth.$Infer.Session;
export const getServerSession = cache(async () => {
    const session: ServerSession | null = await auth.api.getSession({ headers: await headers() })
    return session
})