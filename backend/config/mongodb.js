import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on('connected', () => console.log('Mongodb is Connected'))
  await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`)
}

export default connectDB