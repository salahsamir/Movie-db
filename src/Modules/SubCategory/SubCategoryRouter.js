import { Router } from "express";
import * as Controller from "./Controller/subcategory.js";
export const SubCategoryRouter = Router({mergeParams:true});
SubCategoryRouter.route('/')
 .post(Controller.CreateSubCategory)
 .get(Controller.GetSubCategories)
 .get(Controller.GetSpecialSubCategory)
 
