
const ResourceCard = ({ icon, title, description, tag, href } :
    {icon:string, title: String, description: String, tag: String, href: string}
) => {
  return (
    <a href={href} target='_blank' className='flex flex-col gap-3 w-full min-w-[200px] max-w-[400px] p-4 border-[0.5px] border-gray-900/50 rounded-lg bg-white
                    hover:cursor-pointer hover:border-indigo-700 hover:shadow-lg hover:bg-blue-600/5 hover:[&>span]:text-indigo-700 active:border-indigo-700 active:shadow-lg active:bg-blue-600/5 active:[&>span]:text-indigo-700 duration-100'>
        <div className='flex flex-row justify-between'>
            <span className='text-2xl'>
                {icon}
            </span>

            <div className='text-indigo-800 text-sm py-1 px-3 rounded-sm bg-blue-800/10 h-9 flex items-center justify-center'>{tag}</div>
        </div>

        <span className='font-bold text-lg'>{title}</span>

        <div className='text-gray-600'>{description}</div>
    </a>
  )
}

export default ResourceCard