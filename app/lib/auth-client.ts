
import { createAuthClient } from "better-auth/client"

export const authClient = createAuthClient()

export const signInWithGoogle = async () => {
  try{
    await authClient.signIn.social({
      provider: "google",
    })
  }
  catch(err){
    console.error('Signin Error', err);
  }
}

export const signOut = async () => {
  await authClient.signOut()
}