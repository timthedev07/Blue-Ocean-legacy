import { NextApiHandler } from "next";
import { collections, connectDB } from "../../../mongodb";
import { Review } from "../../../mongodb/models/review";

const handler: NextApiHandler = async (req, res) => {
  if (req.method?.toLowerCase() !== "get") return;

  const productId = req.query.productId as string;

  await connectDB();

  if (!collections.productReviews) {
    res.status(500).end();
    return;
  }

  const query = { productId };
  const reviews = (await collections.productReviews
    .find(query)
    .toArray()) as any as Review[];
  res.json({
    reviews,
  });
};
export default handler;
