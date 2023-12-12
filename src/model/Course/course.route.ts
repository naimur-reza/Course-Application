import { Router } from "express";
import { CourseController } from "./course.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { createCourseSchemaValidation } from "./course.validation";

const router = Router();

router.post(
  "/course",
  validateRequest(createCourseSchemaValidation),
  CourseController.createCourseIntoDB,
);

router.get("/courses", CourseController.getAllCourseFromDB);

router.patch("/courses/:courseId", CourseController.updateCourseFromDB);

router.get("/courses/:courseId/reviews", CourseController.getCourseWithReviews);

router.get("/course/best", CourseController.getBestCourseFromDB);

export const CourseRouter = router;
