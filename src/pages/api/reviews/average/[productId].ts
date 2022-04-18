import { NextApiHandler } from "next";
import { collections, connectDB } from "../../../../mongodb";

export const getRating = async (productId: string) => {
  await connectDB();

  if (!collections.productReviews) {
    throw 503;
  }

  const reviews = await collections
    .productReviews!.find({
      productId,
    })
    .toArray();

  if (!reviews.length) return 0;

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

  try {
    const rating = await getRating(productId);
    res.status(200).send(rating);
  } catch (errStatusCode) {
    res.status(errStatusCode as number).end();
  }
};
export default handler;
