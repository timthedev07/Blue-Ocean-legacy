import * as mongoDB from "mongodb";
export const collections: { productReviews?: mongoDB.Collection } = {};

export const connectDB = async () => {
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    process.env.DB_CONN_STRING
  );

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  const productReviewsCollection: mongoDB.Collection = db.collection(
    process.env.DB_COLLECTION_NAME
  );

  collections.productReviews = productReviewsCollection;

  console.log(
    `Access to collection "${productReviewsCollection.collectionName}" granted.`
  );
};
