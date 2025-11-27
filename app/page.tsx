import AddResource from "@/components/AddResource";
import Footer from "@/components/Footer";
import H1 from "@/components/H1";
import Navigation from "@/components/Navigation";
import Tech from "@/components/Tech";
import TechUsed from "@/components/TechUsed";

export default function Home() {

  const htmlResource = [
    {
      id: 'html1',
      icon: '▶️',
      title: 'YouTube Tutorials',
      description: 'Curated list of HTML tutorials on YouTube',
      tag: 'YouTube',
      href: '/yt/html'
    },

    {
      id: 'html2',
      icon: '📃',
      title: 'HTML Cheatsheet',
      description: 'Quick reference to the most commonly used HTML tags',
      tag: 'Cheatsheet',
      href: 'https://web.stanford.edu/group/csp/cs21/htmlcheatsheet.pdf'
    },
  ]

  const cssResource = [
    {
      id: 'css1',
      icon: '▶️',
      title: 'YouTube Tutorials',
      description: 'Curated list of CSS tutorials on YouTube',
      tag: 'YouTube',
      href: '/yt/css'
    },

    {
      id: 'css2',
      icon: '📐',
      title: 'CSS Shapes',
      description: 'How to construct impossible shapes with just CSS',
      tag: 'Cheatsheet',
      href: 'https://css-tricks.com/the-shapes-of-css/'
    },

    {
      id: 'css3',
      icon: '📖',
      title: 'Tailwind Docs',
      description: 'The official site for TailwindCSS. (I refer to it whenever I need to know the Tailwind version of a CSS style)',
      tag: 'Documentation',
      href: 'https://tailwindcss.com'
    },
  ]

  const jsResource = [
    {
      id: 'js1',
      icon: '▶️',
      title: 'YouTube Tutorials',
      description: 'Curated list of JavaScript tutorials on YouTube',
      tag: 'YouTube',
      href: '/yt/js'
    },
  ]

  return (
    <>
      <Navigation />

      <header>
        <div className='flex flex-col gap-2'>
          <H1 />
          <span className='text-xl text-gray-600'>Curated collection of tutorials, cheatsheets, and guides</span>
          <div className='text-sm text-gray-700'>* These are actual resources I regularly use btw ;)</div>
        </div>
      </header>

      <AddResource />

      <main className='border-t border-b border-gray-400/60 rounded-lg p-4 bg-gray-100/30 flex flex-col gap-8'>
        <div className='w-full'>
          <h2 className='text-lg font-semibold text-blue-800/75'>Web Dev</h2>
          <TechUsed />
        </div>

        <Tech tech={'HTML'} resourceArray={htmlResource} id='html'/>
        <Tech tech={'CSS'} resourceArray={cssResource} id='css'/>
        <Tech tech={'JS'} resourceArray={jsResource} id='js' />
      </main>

      <Footer />
    </>
  );
}
