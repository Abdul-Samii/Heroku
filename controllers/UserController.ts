import { Request,Response, NextFunction } from "express";
import { PostDto } from "../dto/Post.dto";
import { Post } from "../models";



//Create Post
export const CreatePost = async(req:Request,res:Response,next:NextFunction)=>{
    const {users,text,time,images,comments,commenter} = <PostDto>req.body;
//    console.log(req.body)


    const createPost = await Post.create({
        users:users,
        text:text,
        images:images,
        time:time,
        comments:comments,
        commenter:commenter
    })
    const result = await createPost.save();

    res.status(200).json(result);

}

//Test
export const Test=async(req:Request,res:Response,next:NextFunction)=>{
    res.send("Working");
}
//Get a Post
export const GetPost = async(req:Request,res:Response,next:NextFunction)=>{
    // const user = req.user;

        const posts = await Post.find().populate("users")
        if(posts!==null)
        {
            return res.status(200).json(posts)
        }
        return res.status(400).json({"message":"No Posts Availible"});

    
    return res.status(400).json({"message":"Posts information not found"});

}