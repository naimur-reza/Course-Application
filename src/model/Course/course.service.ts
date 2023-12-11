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
  const result = await Course.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
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
};
