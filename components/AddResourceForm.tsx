import { useRouter } from "next/navigation";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";

const AddResourceForm = ({openForm, setOpenForm} : {
    openForm: boolean,
    setOpenForm: Dispatch<SetStateAction<boolean>>,
}) => {
    const router = useRouter()

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('HTML')
    const [tag, setTag] = useState('Video')
    const [icon, setIcon] = useState('')
    const [href, setHref] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e:FormEvent<HTMLButtonElement>) => {
        e.preventDefault()

        const saveToMongodb = async() => {
            try {
                const response = await fetch('/api/pending-resources', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title,
                    category,
                    tag,
                    icon,
                    href,
                    description
                })
                });

                const data = await response.json();
                console.log(data)

                if (response.ok) {
                 alert('Success!\nResource saved!');
                }
                else {
                    alert(`Failed to save.\n${data.error}`);
                    if(response.status===401){
                        console.log(response.status)
                        router.push('/sign-in')
                    }
                }
            }
            catch (error) {
                console.error('Error:', error);
                //alert('Error saving resource');
            }
        }

        if(title.trim()!=='' && category.trim()!=='' && tag.trim()!=='' && href.trim()!=='' && description.trim()!==''){
            if(icon===''){
                setIcon('no emoji')
            }
            
            saveToMongodb()

            setOpenForm(false)

            console.log('Form submitted!')
        }
        else{
            alert('Please fill all fields')
        }
    }

  return (
    <form className={`w-6/10 min-w-[330px] bg-white p-5 rounded-lg flex flex-col gap-6 md:px-13 md:py-6 overflow-auto
                            ${openForm? 'scale-100' : 'scale-80 opacity-0'} duration-150 ease-out`}>
                <h2 className='text-2xl font-extrabold'>Share a Resource</h2>

                <div id='form-inputs' className='[&>label]:block flex flex-col gap-5'>
                    <div>
                        <label htmlFor='title' className='block font-semibold text-slate-700 text-sm'>Title{title.trim()===''&&<span className='text-red-500'>*</span>}</label>
                        <input id='title' type='text' placeholder='e.g; JavaScript Cheatsheet' 
                            className='w-7/10 bg-gray-50 border-[0.2px] rounded-lg border-gray-600 p-2'
                            value={title}
                            onChange={(e)=>setTitle(e.target.value)}
                        />
                    </div>

                    <div className='flex flex-row justify-between flex-wrap'>
                        <div className='mb-2'>
                            <label htmlFor='category' className='font-semibold text-slate-700 text-sm mr-4'>Category</label>
                            <select id='category' className='bg-gray-50 border-[0.2px] rounded-lg p-2'
                                value={category}
                                onChange={(e)=>setCategory(e.target.value)}
                            >
                                <option>HTML</option>
                                <option>CSS & Styling</option>
                                <option>JS</option>
                                <option>React</option>
                                <option>NextJS</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor='tag' className='font-semibold text-slate-700 text-sm mr-4'>Tag</label>
                            <select id='tag' className='bg-gray-50 border-[0.2px] rounded-lg p-2'
                                value={tag}
                                onChange={(e)=>setTag(e.target.value)}
                            >
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
                            value={icon}
                            onChange={(e)=>setIcon(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor='url' className='block font-semibold text-slate-700 text-sm'>URL{href.trim()===''&&<span className='text-red-500'>*</span>}</label>
                        <input id='url' type='url' placeholder='https://example.com' 
                            className='w-7/10 bg-gray-50 border-[0.2px] rounded-lg border-gray-600 p-2'
                            value={href}
                            onChange={(e)=>setHref(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor='description' className='block font-semibold text-slate-700 text-sm'>Description{description.trim()===''&&<span className='text-red-500'>*</span>}</label>
                        <input id='description' type='text' placeholder='Brief description' 
                            className='w-7/10 bg-gray-50 border-[0.2px] rounded-lg border-gray-600 p-2'
                            value={description}
                            onChange={(e)=>setDescription(e.target.value)}
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