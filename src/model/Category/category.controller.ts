import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { CategoryServices } from "./category.service";
import { sendSuccessResponse } from "../../utils/sendSuccessResponse";

const createCategoryIntoDB = catchAsync(async (req: Request, res: Response) => {
  const category = await CategoryServices.createCategoryIntoDB(req.body);
  sendSuccessResponse(res, {
    statusCode: 201,
    message: "Category created successfully",
    data: category,
  });
});

export const CategoryControllers = {
  createCategoryIntoDB,
};
