import { auth } from "@/app/lib/auth"
import { toNextJsHandler } from "better-auth/next-js"

console.log("🔥 route.ts was called!")  

export const { GET, POST } = toNextJsHandler(auth)