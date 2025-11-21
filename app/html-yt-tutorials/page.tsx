import Footer from '@/components/Footer';

const Page = () => {
  function YTVideo({ href, title, summary }:{href: string, title: string, summary: string}){
    return(
      <div className='flex flex-col'>
        <a href={href} target='_blank'>
          <img src='public/batman.png' alt='?'/>
        </a>
        <div>
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
        <YTVideo href='' title="CodeWithAnia's HTML + CSS + JS video" summary='summary' /> 

        <div>OR</div>

        <YTVideo href='' title="BroCode's HTML + CSS video" summary='summary' />
      </main>

      <Footer />
    </>
  )
}

export default Page;