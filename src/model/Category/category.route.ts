import { Router } from "express";
import { CategoryControllers } from "./category.controller";

const router = Router();

router.post("/categories", CategoryControllers.createCategoryIntoDB);

router.get("/categories", CategoryControllers.getAllCategoriesFromDB);

export const CategoryRouters = router;
