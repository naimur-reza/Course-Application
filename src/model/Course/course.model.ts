import { Schema, model } from "mongoose";
import { ICourse, IDetails, ITags } from "./course.interface";

const tagsSchema = new Schema<ITags>({
  name: { type: String },
  isDeleted: { type: Boolean },
});
const detailsSchema = new Schema<IDetails>({
  level: {
    type: String,
    enum: ["Beginner", "Intermediate", "Advanced"],
  },
  description: { type: String },
});

const courseSchema = new Schema<ICourse>({
  title: { type: String, unique: true },
  instructor: { type: String, unique: true },
  category: { type: Schema.Types.ObjectId },
  price: { type: Number },
  tags: tagsSchema,
  startDate: { type: Date },
  endDate: { type: Date },
  durationInWeeks: { type: Number },
  language: { type: String },
  provider: { type: String },
  details: detailsSchema,
});

export const Course = model<ICourse>("Course", courseSchema);
