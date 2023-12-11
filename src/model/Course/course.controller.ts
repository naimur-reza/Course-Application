import { RequestHandler } from "express";
import { CourseServices } from "./course.service";

const createCourseIntoDB: RequestHandler = async (req, res, next) => {
  try {
    const course = await CourseServices.createCourseIntoDB(req.body);
    res.status(201).json({
      success: true,
      data: course,
    });
  } catch (error: any) {
    throw new Error(error);
  }
};

export const CourseController = {
  createCourseIntoDB,
};
