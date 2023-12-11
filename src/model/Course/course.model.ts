import { Schema, model } from "mongoose";
import { ICourse } from "./course.interface";

const courseSchema = new Schema<ICourse>({
  title: { type: String, unique: true },
  instructor: { type: String, unique: true },
  category: { type: Schema.Types.ObjectId },
  price: { type: Number },
  tags: { type: [{ name: String, isDeleted: Boolean }] },
  startDate: { type: Date },
  endDate: { type: Date },
  durationInWeeks: { type: Number },
  language: { type: String },
  provider: { type: String },
  details: { type: { level: String, description: String } },
});

export const Course = model<ICourse>("Course", courseSchema);
