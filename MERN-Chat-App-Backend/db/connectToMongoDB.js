import mongoose from "mongoose";

const connectToMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("Connected to Mongodb");
  } catch (error) {
    console.log(error);
  }
};

export default connectToMongoDb;
