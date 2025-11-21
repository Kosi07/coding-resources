'use client';

import Link from "next/link"

import Navbar from "./Navbar"
import { useState } from "react"

const Header = () => {
    const [openAside, setOpenAside] = useState(false);

  return (
    <header className='sticky top-0.5 rounded-lg p-1'>
        <Navbar setOpenAside={setOpenAside}/>

        <aside className={`w-1/2 min-w-[250px] fixed top-0 bottom-0 left-0 z-20 bg-gray-100 p-2 rounded-sm
                            ${openAside? 'translate-x-0':'-translate-x-full opacity-5'} duration-200 ease-out`}>
            <div className='text-3xl text-gray-800 text-right border-b-[0.1px] mb-3 p-1
                            hover:cursor-pointer hover:text-gray-500 active:text-gray-500 duration-100'
                onClick={()=>setOpenAside(false)}
            >
                X
            </div>

            <div className='flex flex-col gap-6 mt-3
                            [&>a]:text-xl [&>a]:font-semibold 
                            [&>a]:hover:cursor-pointer [&>a]:hover:text-indigo-700
                          [&>a]:active:text-indigo-700 duration-200 ease-out'>
                <Link href='#html' onClick={()=>setOpenAside(false)}>HTML</Link>

                <Link href='#css' onClick={()=>setOpenAside(false)}>CSS</Link>

                <Link href='#js' onClick={()=>setOpenAside(false)}>JavaScript</Link>

                <Link href='#react' onClick={()=>setOpenAside(false)}>React</Link>
                
                <Link href='#nextjs' onClick={()=>setOpenAside(false)}>NextJS</Link>
            </div>
        </aside>

        <div id='overlay'
            className={`fixed inset-0 z-10 bg-gray-400/60
                        ${openAside? '':'hidden'}`}
            onClick={()=>setOpenAside(false)}
        >
        </div>
    </header>
  )
}

export default Header