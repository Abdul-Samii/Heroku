import { Request,Response,NextFunction } from "express";
import { User } from "../models";
import { CreateUserInput } from "../dto";


//Create User
export const RegisterUser = async(req:Request,res:Response,next:NextFunction)=>{
    console.log(req.body)
    const {name,email,address,phone,dp} = <CreateUserInput>req.body;
    const createUser = await User.create({
        name:name,
        email:email,
        address:address,
        phone:phone,
        dp:dp
    })
    const result = await createUser.save();

    res.status(200).json(result);

}
