import { Query } from "mongoose";
import IQueryObj from "../types/IQueryObj";

const priceFilterHelper = <T>(model: Query<T[], T>, query: IQueryObj) => {
  if (query.minPrice && query.maxPrice) {
    const queryObj = {
      $lte: parseFloat(query.minPrice),
      $gte: parseFloat(query.maxPrice),
    };
    const result = model.find({
      price: queryObj,
    });
    return result;
  }
  return model;
};

export default priceFilterHelper;
