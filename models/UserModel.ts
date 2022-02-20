import mongoose,{Schema,Document} from "mongoose";

interface UserDoc extends Document{
    name:string;
    email:string;
    address:string;
    age:number;
    dp:string;
    phone:number;
}

const UserSchema = new Schema({
   
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
    },
    address:{
        type:String,
    },
    age:{
        type:Number
    },
    dp:{
        type:String,
    },
    phone:{
        type:Number
    }

},
{
    timestamps:true
}
);

const User = mongoose.model<UserDoc>('user',UserSchema);
export {User}