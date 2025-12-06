import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb"; // your mongodb client

//Connect to MongoDB
const client = new MongoClient(process.env.MONGO_DB_URI as string)

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