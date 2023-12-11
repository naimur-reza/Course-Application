import { Types } from "mongoose";

interface ITags {
  name: string;
  isDeleted: boolean;
}

interface IDetails {
  level: string;
  description: string;
}

export interface ICourse {
  title: string;
  instructor: string;
  category: Types.ObjectId;
  price: number;
  tags: ITags[];
  startDate: Date;
  endDate: Date;
  language: string;
  provider: string;
  durationInWeeks: number;
  details: IDetails;
}
