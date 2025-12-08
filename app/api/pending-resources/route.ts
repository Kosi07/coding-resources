import { auth } from '@/app/lib/auth';
import { MongoClient } from 'mongodb';
import { headers } from 'next/headers';

const client = new MongoClient(process.env.MONGO_DB_URI as string);

export async function POST(req: Request) {
  try {
    // Check if user is signed in
    const session = await auth.api.getSession({
        headers: await headers()
    });

    if (!session) {
        return Response.json(
            { error: 'You must be signed in to share resources' }, 
            { status: 401 }
        );
    }

    const email = session.user.email

    // Get the data from the request
    const { title, category:topic, tag, icon, href, description } = await req.json();

    // Connect to MongoDB
    await client.connect();
    const db = client.db();
    
    // Save to pending-resources collection
    const result = await db.collection('pending-resources').insertOne({
      topic,
      icon,
      title,
      description,
      tag,
      href,
      email,
      createdAt: new Date()
    });

    return Response.json({ 
      success: true,
      id: result.insertedId 
    });

  } catch (err) {
    console.error('Error saving resource:', err);
    return Response.json(
      { error: 'Failed to save resource' }, 
      { status: 500 }
    );
  }
}