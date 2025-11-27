import Footer from "@/components/Footer";
import H1 from "@/components/H1";

function YTVideo({ src, title, summary }:{src: string, title: string, summary: string}){
    return(
      <div className='flex flex-col my-2'>
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

const Page = async({ params } : {params: {lang: string}}) => {
  const { lang } = await params;
  console.log(lang)
  let videosInfo;

  if(lang==='html'){
    videosInfo = [
      {
        src: 'https://www.youtube.com/embed/cndko2lx-_Y?si=jnpQqMDBj4erf79L&amp;start=602',
        title: "@codeWithAnia's HTML + CSS + JS video",
        summary: 'summary',
      },

      {
        src: 'https://www.youtube.com/embed/HD13eq_Pmp8?si=QNkXSUgm256L9CRW',
        title: "@BroCode's HTML video",
        summary: 'summary',
      },

      {
        src: 'https://www.youtube.com/embed/FQdaUv95mR8?si=WHZhOxWxM3LhJzSa',
        title: "@Kevin's HTML video",
        summary: 'summary',
      },
    ]
  }
  else if(lang==='css'){
    videosInfo = [
      {
        src: 'https://www.youtube.com/embed/cndko2lx-_Y?si=InlV5wfszgFkRwaJ&amp;start=7487',
        title: "@codeWithAnia's HTML + CSS + JS video",
        summary: 'summary',
      },

      {
        src: 'https://www.youtube.com/embed/wRNinF7YQqQ?si=yVwGjsoEgLpTt2j1',
        title: "@BroCode's CSS video", 
        summary: 'summary',
      },
    ]
  }
  else if(lang==='js'){
    videosInfo = [
      {
        src: 'https://www.youtube.com/embed/lfmg-EJ8gm4?si=1ROhc0p_bSTh3PFd',
        title: "@BroCode's JS video", 
        summary: 'summary',
      },
    ]
  }
  
  return (
    <div>
      <header>
        <H1 />
        <p className='text-xl text-gray-600'>The bare minimum videos to get started with {lang.toUpperCase()}</p>
      </header>

      <main className='bg-gray-100/30 rounded-lg flex flex-col gap-8'>
        { videosInfo && videosInfo.map(video => <YTVideo key={video.src} src={video.src} title={video.title} summary={video.summary} /> )}
      </main>

      <Footer />
    </div>
  )
}

export default Page