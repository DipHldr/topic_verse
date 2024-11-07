import {Schema,model} from 'mongoose'

interface UserType{
    name:string;
    email:string;
    username:string;
    dob:Date;
    bio:string;
    avatar:string;
}

const userSchema=new Schema<UserType>({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    bio:{
        type:String
    },
    avatar:{
        type:String,
        required:true
    }
},{timestamps:true});

export const User=model<UserType>('User',userSchema)