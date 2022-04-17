import { object, string, number } from "yup";

export const newReviewSchema = object({
  authorName: string().required(),
  productId: string().required(),
  rating: number().required().integer().max(5).min(1),
  review: string().required().max(250),
});
