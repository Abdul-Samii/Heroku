export interface CreateUserInput{
    name:string;
    address:string;
    phone:string;
    email:string;
    password:string;
    dp:string
}

export interface LoginLoginInputs{
    email:string;
    password:string;
}

export interface UserPayload{
    _id:string;
    email:string;
    name:string;
}