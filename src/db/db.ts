import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import { DB_NAME } from "../constants";
export const connectDb=async ()=>{
    dotenv.config()
    try{
        const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONNECTION_STRING??"")

        if(!process.env.DB_CONNECTION_STRING){
            throw new Error("Could not Load .env string 'process.env.DB_CONNECTION_STRING' ")
        }
        await client.connect()
        console.log("Successfully sonnected to database")
        
        const db:mongoDB.Db=client.db(DB_NAME)

        return db
    }catch(error){
        if (error instanceof Error) {
            // This safely narrows the type of error to an instance of Error
            console.error("Error connecting to the database:", error.message);
          } else {
            // If it's not an instance of Error, handle it here as a generic unknown type
            console.error("An unknown error occurred:", error);
          }
    }


}