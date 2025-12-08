'use client';

import Link from "next/link";

const SignInBtn = () => {
  return (
    <Link
     href='/sign-in'
    className='mt-4 p-2 border rounded-lg'
    >
        SignIn with Google
    </Link>
  )
}

export default SignInBtn