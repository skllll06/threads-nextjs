import mongoose from "mongoose";

let isConnected = false; // var to check if the connection is already open

export const connectTODB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL)
    return console.error("MongoDB URL is not provided");

  try {
  } catch (error) {}
};
