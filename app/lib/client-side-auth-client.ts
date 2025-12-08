import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient()

export const signOut = async () => {
  await authClient.signOut()
}