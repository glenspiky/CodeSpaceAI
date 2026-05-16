import { MongoClient, Db } from "mongodb";

if (!process.env.MONGODB_URL) {
  throw new Error("Please add your MONGODB_URL to .env");
}

const url = process.env.MONGODB_URL;
const client = new MongoClient(url);

// Define a singleton to prevent multiple connections in development
let db: Db;

export async function connectToDatabase(): Promise<Db> {
  if (db) return db;
  await client.connect();
  db = client.db();
  return db;
}
