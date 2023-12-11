import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { CourseServices } from "./course.service";
import { sendSuccessResponse } from "../../utils/sendSuccessResponse";

const createCourseIntoDB: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const course = await CourseServices.createCourseIntoDB(req.body);
    sendSuccessResponse(res, {
      statusCode: 201,
      message: "Course created successfully",
      data: course,
    });
  },
);

const getAllCourseFromDB: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const course = await CourseServices.getAllCourseFromDB();
    sendSuccessResponse(res, {
      statusCode: 201,
      message: "Course created successfully",
      data: course,
    });
  },
);

export const CourseController = {
  createCourseIntoDB,
  getAllCourseFromDB,
};
