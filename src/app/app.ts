import express, { Application, Request, Response } from "express";
import cors from "cors";
import { CourseRouter } from "../model/Course/course.route";

import globalErrorHandler from "../middleware/globalErrorHandler";
import notFound from "../middleware/notFoundHandler";

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

app.use(globalErrorHandler); // global error handler

app.use(notFound); // not found handler
