import { Router } from "express";
import * as Controller from "./Controller/category.js";
export const CategoryRouter = Router();

CategoryRouter.route("/")
  .get(Controller.GetCategories)
  .post(Controller.CreateCategory);

CategoryRouter
  .route("/:id")
  .get(Controller.GetOneGategory)
  .put(Controller.UpdateCategory)
  ///i used soft delete here to make it easier to delete category
  .patch(Controller.DeleteCategory)
  