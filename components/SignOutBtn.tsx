import { signOut } from "@/app/lib/client-side-auth-client"

const SignOutBtn = () => {
  return (
      <button
        className='p-2 border rounded-lg'
            onClick={()=> signOut()}
        >
            Sign Out
        </button>
  )
}

export default SignOutBtn