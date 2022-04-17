import { ObjectId } from "mongodb";

export class Review {
  constructor(
    public authorName: string,
    public review: string,
    public rating: 1 | 2 | 3 | 4 | 5,
    public productId: string,
    public id?: ObjectId
  ) {}
}
