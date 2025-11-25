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

const Navbar = ({ setOpenAside }:{setOpenAside: Dispatch<SetStateAction<boolean>>}) => {

  return (
    <nav className='backdrop-blur-lg rounded-lg'>
        <HamburgerIcon color='text-gray-700' handleClick={setOpenAside} />
    </nav>
  )
}

export default Navbar;