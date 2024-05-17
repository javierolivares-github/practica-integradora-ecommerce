import mongoose from "mongoose";

const urlDb = "mongodb+srv://admin:123456admin@e-commerce.dqrqnwy.mongodb.net/ecommerce";

export const connectMongoDB = async () => {
  try {
    // Connection with the DataBase
    mongoose.connect(urlDb);
    console.log("MongoDB connected.");
  } catch (error) {
    console.log(error);
  }
}