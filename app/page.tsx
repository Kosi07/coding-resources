import AddResource from "@/components/AddResource";
import Footer from "@/components/Footer";
import H1 from "@/components/H1";
import Navigation from "@/components/Navigation";
import Tech, { Resource } from "@/components/Tech";
import TechUsed from "@/components/TechUsed";
import { MongoClient } from "mongodb";

export default async function Home() {

  let htmlResource
  let cssResource
  let jsResource

  //Connect to MongoDB
  const client = new MongoClient(process.env.MONGO_DB_URI as string);
  try{
    await client.connect()

    const db = client.db();

    htmlResource = await db.collection('resources')
      .find({ topic: 'html' })
      .toArray() as unknown as Resource[];


    cssResource = await db.collection('resources')
      .find({ topic: 'css' })
      .toArray() as unknown as Resource[];

    jsResource = await db.collection('resources')
      .find({ topic: 'js' })
      .toArray() as unknown as Resource[];
  }
  catch(err){console.error(err)}

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
