import { NextApiHandler } from "next";
import { collections, connectDB } from "../../../mongodb";
import { Review } from "../../../mongodb/models/review";

const handler: NextApiHandler = async (_, res) => {
  await connectDB();

  if (!collections.productReviews) {
    res.status(500).end();
    return;
  }

  const reviews = (await collections.productReviews
    .find()
    .toArray()) as any as Review[];
  res.json({
    reviews,
  });
};
export default handler;
