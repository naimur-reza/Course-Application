import { CategoryRouters } from "../model/Category/category.route";
import { CourseRouter } from "../model/Course/course.route";

import { Router } from "express";

const router = Router();

const routes = [
  {
    path: "/",
    route: CourseRouter,
  },
  {
    path: "/",
    route: CategoryRouters,
  },
];

routes.forEach(el => router.use(el.path, el.route));

export const globalRouter = router;
