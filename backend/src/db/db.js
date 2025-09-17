// src/db/db.js
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDb = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in .env");
    }

    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Connected to MongoDB with Mongoose");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
};

const connections = {};

export const getDbConnection = (dbName) => {
  if (connections[dbName]) return connections[dbName];

  const uri = process.env.MONGODB_URI; // should NOT have a dbName at the end
  if (!uri) {
    throw new Error("MONGODB_URI is not defined in .env");
  }

  const conn = mongoose.createConnection(`${uri}/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connections[dbName] = conn;
  return conn;
};
