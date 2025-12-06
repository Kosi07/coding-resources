import { Dispatch, FormEvent, SetStateAction } from "react";

const AddResourceForm = ({openForm, setOpenForm} : {
    openForm: boolean,
    setOpenForm: Dispatch<SetStateAction<boolean>>,
}) => {
    const handleSubmit = (e:FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('Form submitted!');

        setOpenForm(false);
    }

  return (
    <form className={`w-6/10 min-w-[330px] bg-white p-5 rounded-lg flex flex-col gap-6 md:px-13 md:py-6 
                            ${openForm? 'scale-100' : 'scale-80 opacity-0'} duration-150 ease-out`}>
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
                        <label htmlFor='emoji' className='block font-semibold text-slate-700 text-sm'>Emoji</label>
                        <input id='emoji' type='text' placeholder='😊' 
                            className='text-center w-5/10 bg-gray-50 border-[0.2px] rounded-lg border-gray-600 p-2'
                        />
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
                        type='button'
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
  )
}

export default AddResourceForm