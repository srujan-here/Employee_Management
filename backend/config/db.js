import mongoose from "mongoose";
mongoose.set("strictQuery", false);

export const connect = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://srujan:3HHTrNlYRbHXDN50@cluster0.3fbp5mt.mongodb.net/?retryWrites=true&w=majority");
    console.log(`connection to : ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error:${error.message}`);
    process.exit(1);
  }
};
