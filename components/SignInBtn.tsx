'use client';

import { signInWithGoogle } from "@/app/lib/auth-client";

const SignInBtn = () => {
  return (
    <button
    className='p-2 border rounded-lg'
        onClick={()=> signInWithGoogle()}
    >
        SignIn with Google
    </button>
  )
}

export default SignInBtn