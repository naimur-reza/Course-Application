/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import IErrorResponse from "../types/IErrorResponse";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const errorResponse: IErrorResponse = {
    success: false,
    statusCode: err.statusCode || 500,
    message: "error",
    errorMessage: err.message || "Something went wrong",
  };

  if (err instanceof mongoose.Error.CastError) {
    errorResponse.message = "Invalid Id";
    const regex = /"(.*?)"/;
    const matches = err.message.match(regex);
    errorResponse.message = `${matches![1]} is not a valid ID!`;
  }

  res.status(errorResponse.statusCode).json({
    success: errorResponse.success,
    message: errorResponse.message,
    errorMessage: errorResponse.errorMessage,
    errorDetails: err,
    stack: err.stack,
  });
};

export default globalErrorHandler;
