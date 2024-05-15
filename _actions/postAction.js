'use server'
import PostModel from "../models/postModels"
import connectDB from "../config/database"
export async function getPosts(){
  try{
    await connectDB();
    // return {msg:'GET'}
    const data = JSON.parse(JSON.stringify(await PostModel.find()));
    throw new Error('Error!')
    return {data}
  }catch(error){
    return {errMsg:error.message}
  }
}