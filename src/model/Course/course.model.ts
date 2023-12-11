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

const courseSchema = new Schema<ICourse>(
  {
    title: { type: String, unique: true },
    instructor: { type: String, unique: true },
    category: { type: Schema.Types.ObjectId },
    price: { type: Number },
    tags: [tagsSchema],
    startDate: { type: Date },
    endDate: { type: Date },
    language: { type: String },
    provider: { type: String },
    details: detailsSchema,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

courseSchema.virtual("durationInWeeks").get(function () {
  const startDate = new Date(this.startDate).getTime();
  const endDate = new Date(this.endDate).getTime();

  const millisecondsInWeek = 7 * 24 * 60 * 60 * 1000;
  const totalWeeks = Math.ceil((endDate - startDate) / millisecondsInWeek);
  return totalWeeks;
});

// todo
// courseSchema.pre("findOneAndUpdate", async function (next) {
//   const docToUpdate = await this.model.findOne(this.getQuery());
//   if (!docToUpdate) {
//     return next(new Error("Course not found"));
//   }
//   return next();
// });

export const Course = model<ICourse>("Course", courseSchema);
