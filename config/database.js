import mongoose from "mongoose";
const connectDB = async () =>{
    if(mongoose.connections[0].readyStae){
        return true;
    }
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Mongodb connected')
        return true;
    }catch(error){
         console.log(error)
    }
}
export default connectDB;