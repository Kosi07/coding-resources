import Footer from '@/components/Footer';

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
        <h1 className='text-4xl font-bold'>HTML YT tutorials</h1>
        <p className='text-xl text-gray-600'>The bare minimum videos to get started with HTML</p>
      </header>

      <main className='bg-gray-100/30 rounded-lg flex flex-col gap-8'>
        <YTVideo src='https://www.youtube.com/embed/cndko2lx-_Y?si=jnpQqMDBj4erf79L&amp;start=602' title="CodeWithAnia's HTML + CSS + JS video" summary='summary' /> 

        <div className='w-full p-2 text-center text-lg font-bold'>OR</div>

        <YTVideo src='https://www.youtube.com/embed/HD13eq_Pmp8?si=QNkXSUgm256L9CRW' title="BroCode's HTML video" summary='summary' />
      </main>

      <Footer />
    </>
  )
}

export default Page;