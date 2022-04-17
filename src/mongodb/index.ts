import * as mongoDB from "mongodb";
import { Review } from "./models/review";
export const collections: { productReviews?: mongoDB.Collection<Review> } = {};

export const connectDB = async () => {
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    process.env.DB_CONN_STRING
  );

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  const productReviewsCollection: mongoDB.Collection = db.collection(
    process.env.DB_COLLECTION_NAME
  );

  collections.productReviews = productReviewsCollection as any;

  console.log(
    `Access to collection "${productReviewsCollection.collectionName}" granted.`
  );
};
