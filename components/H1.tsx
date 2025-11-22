import Link from "next/link"

const H1 = () => {
  return (
    <h1 className='text-4xl font-bold mb-2'>
        <Link href='/' 
            className='hover:cursor-pointer hover:text-gray-600 active:text-gray-600 duration-100'
        >
            Coding Resources
        </Link>
    </h1>
  )
}

export default H1