import { Router } from "express";
import { CategoryControllers } from "./category.controller";

const router = Router();

router.post("/categories", CategoryControllers.createCategoryIntoDB);

export const CategoryRouters = router;
