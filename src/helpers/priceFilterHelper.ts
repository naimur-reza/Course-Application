import { Query } from "mongoose";
import IQueryObj from "../types/IQueryObj";

const priceFilterHelper = <T>(model: Query<T[], T>, query: IQueryObj) => {
  if (query.minPrice && query.maxPrice) {
    const queryObj = {
      $lte: Number(query.minPrice),
      $gte: Number(query.maxPrice),
    };
    const result = model.find({
      price: queryObj,
    });
    return result;
  }
  return model;
};

export default priceFilterHelper;
