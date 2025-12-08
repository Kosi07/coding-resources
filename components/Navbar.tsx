import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

function HamburgerIcon({ color, handleClick } : {color: string, handleClick: Dispatch<SetStateAction<boolean>>}){
    return(
      <svg 
        className={`w-10 h-9/10 ${color} 
                    hover:cursor-pointer hover:text-indigo-600 active:text-indigo-400 duration-100`}
        onClick={()=>handleClick(true)}
        viewBox='0 0 24 24' 
        fill='none' 
        stroke='currentColor'
      >
        <line x1='3' y1='6' x2='21' y2='6' strokeWidth='2' />
        <line x1='3' y1='12' x2='21' y2='12' strokeWidth='2' />
        <line x1='3' y1='18' x2='21' y2='18' strokeWidth='2' />
      </svg>
    )
  }

function Profile({ color } : {color: string}){
    return(
      <svg 
        className={`w-10 h-9/10 ${color}
                    hover:cursor-pointer hover:text-gray-50 active:text-white duration-200 ease-out`}
        viewBox='0 0 24 24' 
        fill='none' 
        stroke='currentColor'
        strokeWidth='1.5'
      >
        <circle cx='12' cy='12' r='10' />
        <circle cx='12' cy='9' r='3' />
        <path d='M6.5 18.5c0-3 2.5-5 5.5-5s5.5 2 5.5 5' />
      </svg>
    )
  }

interface user {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    emailVerified: boolean;
    name: string;
    image?: string | null | undefined | StaticImport;
}

const Navbar = ({ setOpenAside, user }:{setOpenAside: Dispatch<SetStateAction<boolean>>, user: user|undefined}) => {

  return (
    <nav className='backdrop-blur-lg rounded-lg flex justify-between'>
        <HamburgerIcon color='text-gray-700' handleClick={setOpenAside} />

        {user?
          <>
            <span className='text-3xl font-bold text-slate-600'>Welcome, {user.name}</span>

            {user.image &&
              <Image 
              src={user.image} 
              alt='' 
              width={50}
              height={50}
              className='w-10 h-10 rounded-full'
            />
            }

          </>
        :
          <Profile color='text-gray-700' />
        }
    </nav>
  )
}

export default Navbar;