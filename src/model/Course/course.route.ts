import { Router } from "express";
import { CourseController } from "./course.controller";

const router = Router();

router.post("/course", CourseController.createCourseIntoDB);

router.get("/courses", CourseController.getAllCourseFromDB);

export const CourseRouter = router;
