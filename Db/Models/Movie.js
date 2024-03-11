import { Schema } from "mongoose";


const schema=new Schema({
    name:{
        type:"string",
        required:[true,"name is required"],
        unique:[true,"name must be unique"],
        trim:true,
        lowercase: true

    },
    description:{
        type:"string",
        trim:true,
        lowercase: true,

    },
    rating:{
        type:"number",
        required:[true,"rating is required"],
        min:[0,"rating must be greater than 0"],
        max:[10,"rating must be less than 10"],
    
    },
    year:{
        type:"number",
        required:[true,"year is required"],
        min:[1900,"year must be greater than 1900"],
        max:[2024,"year must be less than 2024"],
    },
    ReleaseDate:{
      type:"date",  
    },
    genre:{
        type:["string"],
        required:[true,"genre is required"],
        trim:true,
        lowercase: true
    },
    actors:{
        type:["string"],
        required:[true,"actors is required"],
        
    },
    directors:{
        type:["string"],
        required:[true,"directors is required"],
    },
    CoverImage:{
        type:"string",
        required:[true,"CoverImage is required"],
    },
    price:{
        type:"number",
        required:[true,"price is required"],
        min:[0,"price must be greater than 0"],
        default:0
    }

},{timestamps:true});
