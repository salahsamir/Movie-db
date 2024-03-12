import { Router } from "express";
import * as Controller from "./Controller/subcategory.js"
export const SubCategoryRouter = Router();

SubCategoryRouter.route('/:id')
 .post(Controller.CreateSubCategory)
 