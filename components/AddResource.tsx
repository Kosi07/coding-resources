'use client';
import { useState } from "react";

 

const AddResource = () => {
    const [openForm, setOpenForm] = useState(false);
  return (
    <>
        <div className='flex justify-end py-1'>
            <button className='group p-2 px-4 bg-gray-100 rounded-sm text-xl flex flex-row justify-center items-center border-[0.4px] border-transparent
                            hover:cursor-pointer hover:bg-gray-200 hover:border-indigo-600/60 hover:shadow-lg hover:-translate-x-0.5 
                            active:scale-105 active:shadow-md active:px-3 duration-100 ease-in-out'
                    onClick={()=>setOpenForm(true)}
            > 
            <span className='text-gray-600 group-hover:animate-pulse' id='plus-icon'>
                +
            </span>
            <span className='font-extrabold text-transparent bg-clip-text bg-linear-to-r from-orange-500 via-sky-400 via-70% to-black to-90%'>
                &nbsp;Add yours
            </span>
            &nbsp;❤️
            </button>
        </div>

        <div>Form</div>

        <div id='overlay-for-form'></div>
    </>
  )
}

export default AddResource