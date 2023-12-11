import mongoose from "mongoose";
import { ICourse } from "./course.interface";
import { Course } from "./course.model";

const createCourseIntoDB = async (payload: ICourse): Promise<ICourse> => {
  const result = await Course.create(payload);
  return result;
};

const getAllCourseFromDB = async (): Promise<ICourse[]> => {
  const result = await Course.find({});
  return result;
};

const getSingleCourseFromDB = async (id: string): Promise<ICourse | null> => {
  const result = await Course.findById(id);
  return result;
};

const updateCourseIntoDB = async (
  id: string,
  payload: Partial<ICourse>,
): Promise<ICourse | null> => {
  const { tags, details, ...remainingData } = payload;

  const modifiedData: Record<string, unknown> = {
    ...remainingData,
  };

  if (tags && Object.keys(tags).length > 0) {
    for (const [key, value] of Object.entries(tags)) {
      modifiedData[`tags.${key}`] = value;
    }
  }
  if (details && Object.keys(details).length > 0) {
    for (const [key, value] of Object.entries(details)) {
      modifiedData[`details.${key}`] = value;
    }
  }
  const result = await Course.findByIdAndUpdate(id, modifiedData, {
    new: true,
    runValidators: true,
  });

  return result;
};

const getCourseWithReviews = async (id: string) => {
  const result = await Course.aggregate([
    {
      $match: {
        _id: new mongoose.Types.ObjectId(id),
      },
    },
    {
      $lookup: {
        from: "reviews",
        localField: "_id",
        foreignField: "courseId",
        as: "reviews",
      },
    },
  ]);
  return result;
};

const deleteCourseFromDB = async (id: string) => {
  const result = await Course.findByIdAndDelete(id);
  return result;
};

export const CourseServices = {
  createCourseIntoDB,
  getAllCourseFromDB,
  getSingleCourseFromDB,
  updateCourseIntoDB,
  deleteCourseFromDB,
  getCourseWithReviews,
};
