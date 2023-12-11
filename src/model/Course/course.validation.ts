import { z } from "zod";

const tagSchema = z.object({
  name: z.string(),
  isDeleted: z.boolean(),
});

export const createCourseValidationSchema = z.object({
  title: z.string().min(1),
  instructor: z.string().min(1),
  category: z.string(),
  price: z.number(),
  tags: z.array(tagSchema),
  startDate: z.date(),
  endDate: z.date(),
  durationInWeeks: z.number(),
  language: z.string(),
  provider: z.string(),
  details: z.object({
    level: z.string(),
    description: z.string(),
  }),
});

export const updateTourValidationSchema =
  createCourseValidationSchema.partial();
