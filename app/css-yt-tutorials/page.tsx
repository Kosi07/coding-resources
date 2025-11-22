import Footer from '@/components/Footer';
import H1 from '@/components/H1';

const Page = () => {
  function YTVideo({ src, title, summary }:{src: string, title: string, summary: string}){
    return(
      <div className='flex flex-col'>
        <iframe width='427' height='250'
          src={src} 
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' 
          referrerPolicy='strict-origin-when-cross-origin' 
          allowFullScreen 
          className='p-2'
        />
        <div className='p-2'>
          <div className='font-bold text-lg'>{title}</div>
          <div className='text-gray-600'>{summary}</div>
        </div>
      </div>
    )
  }

  return (
    <>
      <header>
        <H1 />
        <p className='text-xl text-gray-600'>The bare minimum videos to get started with CSS</p>
      </header>

      <main className='bg-gray-100/30 rounded-lg flex flex-col gap-8'>
        <YTVideo src='https://www.youtube.com/embed/cndko2lx-_Y?si=InlV5wfszgFkRwaJ&amp;start=7487' title="@codeWithAnia's HTML + CSS + JS video" summary='summary' /> 

        <div className='w-full p-2 text-center text-lg font-bold'>OR</div>

        <YTVideo src='https://www.youtube.com/embed/wRNinF7YQqQ?si=yVwGjsoEgLpTt2j1' title="@BroCode's CSS video" summary='summary' />
      </main>

      <Footer />
    </>
  )
}

export default Page;