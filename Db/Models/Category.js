import { Schema, model } from "mongoose";


const CategorySchema=new Schema({
    name:{
        type:"string",
        required:[true,"name is required"],
        unique:[true,"name must be unique"],
        trim:true,

    },
    isDeleted:{
        type:"boolean",
        default:false
    }

},{
    timestamps:true})

export const CategoryCollection=model.Category||model("Category",CategorySchema)