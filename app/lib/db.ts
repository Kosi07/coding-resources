import { Db, MongoClient } from "mongodb";

//Connect to MongoDB
let cachedDB : Db;

const connectToDB = async() => {
    const client = new MongoClient(process.env.MONGO_DB_URI as string)

  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const db = await client.db()
    cachedDB = db
    cachedDB.command({ ping: 1 }); 
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  }
  catch(err){
    console.log(err)
  }
}
// connectToDB();

export default cachedDB;