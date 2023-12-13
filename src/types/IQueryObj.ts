interface IQueryObj {
  page?: string;
  limit?: string;
  sortBy?: string;
  sortOrder?: string;
  minPrice?: string;
  tags?: string;
  startDate?: Date;
  endDate?: Date;
  language?: string;
  provider?: string;
  durationInWeeks?: string;
  level?: string;
}

export default IQueryObj;
