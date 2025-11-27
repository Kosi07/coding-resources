import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb"; // your mongodb client

//Connect to MongoDB
const client = new MongoClient(process.env.MONGO_DB_URI as string)

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db().command({ ping: 1 }); 
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  }
  catch(err){
    console.log(err)
  }
}

run();

export const auth = betterAuth({
    database: mongodbAdapter(client.db()),

    socialProviders: {
        google: { 
            prompt: "select_account",
            clientId: process.env.GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
        }, 
    },
});