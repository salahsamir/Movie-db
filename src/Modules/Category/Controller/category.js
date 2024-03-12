import { CategoryCollection } from "../../../../Db/Models/Category.js";
import { AsyncHandeller } from "../../../Utils/ErrorHandling.js";


export const CreateCategory=AsyncHandeller(
    async(req,res,next)=>{
        const {name}=req.body;
        if(await CategoryCollection.findOne({name})){
            return next(new Error("category already exist",{cause:400}));
        }
        const newCategory=await CategoryCollection.create({name})
        return newCategory? res.status(201).json({message:"done",newCategory}):next(new Error("category not created"))
        
    }
)
export const GetCategories=AsyncHandeller(
    async(req,res,next)=>{
        const categories = await CategoryCollection.find();
        return categories? res.status(200).json({message:"done",categories}):next(new Error("categories not found"))
    }
)
export const GetOneGategory=AsyncHandeller(
    async(req,res,next)=>{
        const {id}=req.params
        const category=await CategoryCollection.findOne({_id:id,isDeleted:false})
        return category? res.status(200).json({message:"done",category}):next(new Error("category not found or soft deleted"))
    }
)
export const UpdateCategory=AsyncHandeller(
    async(req,res,next)=>{
        const {id}=req.params
        const {name}=req.body
        //check name
        if(await CategoryCollection.findOne({name})){
            return next(new Error("category already exist",{cause:400}))
        }
        const category=await CategoryCollection.findOne({_id:id})
        if(!category){
            return next(new Error("category not found",{cause:400}))
        }
        const updatedCategory=await CategoryCollection.findByIdAndUpdate(id,{name},{new:true})
        return updatedCategory? res.status(200).json({message:"done",updatedCategory}):next(new Error("category not updated"))
    })
export const DeleteCategory=AsyncHandeller(
    async(req,res,next)=>{
        const {id}=req.params
        const category=await CategoryCollection.findOne({_id:id})
        if(!category){
            return next(new Error("category not found",{cause:400}))
        }
        const deletedCategory=await CategoryCollection.findByIdAndUpdate(id,{isDeleted:true},{new:true})
        return deletedCategory? res.status(200).json({message:"done",deletedCategory}):next(new Error("category not deleted"))
    }
)