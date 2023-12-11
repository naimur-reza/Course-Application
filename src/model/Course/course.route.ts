import { Router } from "express";
import { CourseController } from "./course.controller";

const router = Router();

router.post("/course", CourseController.createCourseIntoDB);

router.get("/courses", CourseController.getAllCourseFromDB);

router.patch("/courses/:courseId", CourseController.updateCourseFromDB);

export const CourseRouter = router;
