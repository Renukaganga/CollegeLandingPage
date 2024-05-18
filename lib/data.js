import {Post} from '@/models/user'
import {connectMongoDB} from "@/lib/mongodb"
export const getPosts= async ()=>{
    try{
        await connectMongoDB();
        const posts= await Post.find()
        return posts;
    }catch(error){
        console.log(error)
        throw new Error(error);
    }
}
export const getPost= async (id)=>{
    try{
        await connectMongoDB();
        const post= await Post.find(id)
        return post;
    }catch(error){
        console.log(error)
        throw new Error(error);
    }
}
export const getUser= async (id)=>{
    try{
        await connectMongoDB();
        const user= await User.find(id)
        return user;
    }catch(error){
        console.log(error)
        throw new Error(error);
    }
}
export const getUsers= async ()=>{
    try{
        await connectMongoDB();
        const users= await Users.find()
        return users;
    }catch(error){
        console.log(error)
        throw new Error(error);
    }
}