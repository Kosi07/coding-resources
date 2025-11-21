import Image from 'next/image'
import htmlIcon from '@/public/html-5.svg';
import cssIcon from '@/public/css-3.svg';
import jsIcon from '@/public/js.svg';
import reactIcon from '@/public/react.svg';
import nextIcon from '@/public/nextjs.svg';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';

const TechUsed = () => {

    function TechCard({ src, alt, title, href}:{src: string|StaticImport, alt:string, title:string, href:string}){
        return(
            <a href={href} 
                className='flex flex-col
                            hover:cursor-pointer'>
                <Image
                    src={src}
                    alt={alt}
                    className='w-13 h-13 rounded-sm'
                />
                <span className='font-semibold text-gray-500 text-center'>{title}</span>
            </a>
        )
    }

  return (
    <div className='w-full flex flex-col items-center'>
        <p>Tech Used</p>
        <div className='flex flex-row gap-6 md:gap-9 w-full justify-center'>
            <TechCard src={htmlIcon} alt='HTML icon' title='HTML' href='' />
            <TechCard src={cssIcon} alt='CSS icon' title='CSS' href='' />
            <TechCard src={jsIcon} alt='JavaScript icon' title='JS' href='' />
            <TechCard src={reactIcon} alt='ReactJS icon' title='React' href='' />
            <TechCard src={nextIcon} alt='NextJS icon' title='NextJS' href='' />
        </div>
    </div>
  )
}

export default TechUsed