import mongoose from "mongoose";

export const connectDB = async ()=> {
    await mongoose.connect('mongodb+srv://TeepeeTech:Cosmopet1@cluster0.y5bok.mongodb.net/Estore').then(()=>console.log("DB connected"));
}