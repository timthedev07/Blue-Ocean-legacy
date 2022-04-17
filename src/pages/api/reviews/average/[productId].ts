import { NextApiHandler } from "next";
import { collections, connectDB } from "../../../../mongodb";

export const getRating = async (productId: string) => {
  const reviews = await collections
    .productReviews!.find({
      productId,
    })
    .toArray();

  return (
    Math.round(
      (reviews.reduce((prevTotal, curr) => {
        return prevTotal + curr.rating;
      }, 0) /
        reviews.length) *
        2
    ) / 2
  );
};

const handler: NextApiHandler = async (req, res) => {
  if (req.method?.toLowerCase() !== "get") {
    res.status(405).end();
  }

  const productId = req.query.productId as string;

  await connectDB();

  if (!collections.productReviews) {
    res.status(503).end();
    return;
  }

  const rating = await getRating(productId);
  res.status(200).send(rating);
};
export default handler;
