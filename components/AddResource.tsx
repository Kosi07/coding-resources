'use client';
import { useState } from "react";
import Overlay from "./Overlay";
import AddResourceForm from "./AddResourceForm";

const AddResource = () => {
    const [openForm, setOpenForm] = useState(false);

  return (
    <>
        <div className='flex justify-end'>
            
            <button className='group p-2 px-4 bg-gray-100 rounded-sm text-xl flex flex-row justify-center items-center border-[0.4px] border-transparent
                            hover:cursor-pointer hover:bg-gray-200 hover:border-indigo-600/60 hover:shadow-lg hover:-translate-x-0.5 
                            active:scale-105 active:shadow-md active:px-3 duration-100 ease-in-out'
                    onClick={()=>setOpenForm(true)}
            > 
                <span className='text-gray-600 group-hover:animate-pulse' id='plus-icon'>
                    +
                </span>

                <>
                    <span className='animate-gradient bg-size-[200%_100%] group-hover:text-2xl duration-200 ease-in font-extrabold text-transparent bg-clip-text bg-linear-to-r from-pink-500 via-yellow-400 to-purple-500'>
                        &nbsp;Add yours
                    </span>

                    <style jsx>{`
                        @keyframes gradient {
                            0% {
                            background-position: 0% 0%;
                            }
                            100% {
                            background-position: 200% 0%;
                            }
                        }
                        .animate-gradient {
                            animation: gradient 4s ease-out infinite;
                        }
                        `}
                    </style>
                </>
                
                &nbsp;❤️
            </button>

        </div>

        <div className={`w-12/13 flex flex-row justify-center
                        fixed top-20 z-30
                        ${openForm? '' : 'opacity-0 pointer-events-none'} duration-200 ease-out`}>

            <AddResourceForm openForm={openForm} setOpenForm={setOpenForm}/>

        </div>

        <Overlay statefulVar={openForm} func={setOpenForm}/>
    </>
  )
}

export default AddResource