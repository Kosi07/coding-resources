'use client';
import { FormEvent, useState } from "react";
import Overlay from "./Overlay";

const AddResource = () => {
    const [openForm, setOpenForm] = useState(false);

    const handleSubmit = (e:FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('Form submitted!');

        setOpenForm(false);
    }

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
                        ${openForm? '' : 'hidden'} `}>

            <form className='w-6/10 min-w-[330px] bg-white p-5 rounded-lg flex flex-col gap-6'>
                <h2 className='text-2xl font-extrabold'>Share a Resource</h2>

                <div id='form-inputs' className='[&>label]:block flex flex-col gap-5'>
                    <div>
                        <label htmlFor='title' className='block font-semibold text-slate-700 text-sm'>Title</label>
                        <input id='title' type='text' placeholder='e.g; JavaScript Cheatsheet' 
                            className='w-7/10 bg-gray-50 border-[0.2px] rounded-lg border-gray-600 p-2'
                        />
                    </div>

                    <div className='flex flex-row justify-between flex-wrap'>
                        <div className='mb-2'>
                            <label htmlFor='category' className='font-semibold text-slate-700 text-sm mr-4'>Category</label>
                            <select id='category' className='bg-gray-50 border-[0.2px] rounded-lg p-2'>
                                <option>HTML</option>
                                <option>CSS & Styling</option>
                                <option>JS</option>
                                <option>React</option>
                                <option>NextJS</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor='tag' className='font-semibold text-slate-700 text-sm mr-4'>Tag</label>
                            <select id='tag' className='bg-gray-50 border-[0.2px] rounded-lg p-2'>
                                <option>Video</option>
                                <option>Blog-post</option>
                                <option>Documentation</option>
                                <option>Social-media-post</option>
                                <option>Cheatsheet</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label htmlFor='url' className='block font-semibold text-slate-700 text-sm'>URL</label>
                        <input id='url' type='text' placeholder='https://example.com' 
                            className='w-7/10 bg-gray-50 border-[0.2px] rounded-lg border-gray-600 p-2'
                        />
                    </div>

                    <div>
                        <label htmlFor='description' className='block font-semibold text-slate-700 text-sm'>Description</label>
                        <input id='description' type='text' placeholder='Brief description' 
                            className='w-7/10 bg-gray-50 border-[0.2px] rounded-lg border-gray-600 p-2'
                        />
                    </div>
                </div>

                <div id='form-buttons'
                    className='flex flex-row justify-between p-1'
                >
                    <button 
                        className='w-9/20 border-[0.4px] rounded-lg p-1 font-semibold text-slate-700
                                    hover:cursor-pointer hover:scale-102 
                                active:scale-103 duration-100 ease-out'
                        onClick={()=>setOpenForm(false)}
                    >
                        Cancel
                    </button>

                    <button 
                        className='w-9/20 border-[0.4px] rounded-lg p-1 font-semibold text-white bg-blue-500
                                hover:cursor-pointer hover:scale-102 
                                active:scale-103 duration-100 ease-out'
                        onClick={handleSubmit}
                    >
                        Share
                    </button>
                </div>
            </form>

        </div>

        <Overlay statefulVar={openForm} func={setOpenForm}/>
    </>
  )
}

export default AddResource