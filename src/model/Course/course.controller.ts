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
    const course = await CourseServices.getAllCourseFromDB(req.query);
    sendSuccessResponse(res, {
      statusCode: 201,
      message: "Course created successfully",
      data: course,
    });
  },
);

const updateCourseFromDB: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { courseId } = req.params;
    const course = await CourseServices.updateCourseIntoDB(courseId, req.body);
    sendSuccessResponse(res, {
      statusCode: 200,
      message: "Course updated successfully",
      data: course,
    });
  },
);

const getCourseWithReviews = catchAsync(async (req: Request, res: Response) => {
  const { courseId } = req.params;
  const course = await CourseServices.getCourseWithReviews(courseId);
  sendSuccessResponse(res, {
    statusCode: 200,
    message: "Course and Reviews retrieved successfully",
    data: course,
  });
});

const getBestCourseFromDB = catchAsync(async (req: Request, res: Response) => {
  const course = await CourseServices.getBestCourseFromDB();
  sendSuccessResponse(res, {
    statusCode: 200,
    message: "Best course retrieved successfully",
    data: course,
  });
});

export const CourseController = {
  createCourseIntoDB,
  getAllCourseFromDB,
  updateCourseFromDB,
  getCourseWithReviews,
  getBestCourseFromDB,
};
