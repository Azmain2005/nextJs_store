import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://azmain2005mahtab_db_user:password@cluster0.6klkamu.mongodb.net/StoreDb');
    console.log ("database connected");
}
