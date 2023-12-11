/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { CourseRouter } from "../model/Course/course.route";
import { validateRequest } from "../middleware/validateRequest";
import { createCourseValidationSchema } from "../model/Course/course.validation";

export const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(
  "/api/course",
  // validateRequest(createCourseValidationSchema),
  CourseRouter,
);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Server is running!",
  });
});

// global error handler

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    success: false,
    error: err,
  });
});

// not found handler
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    statusCode: 404,
    message: `Api not found! ${req.path}`,
  });
});
