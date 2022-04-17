import { NextApiHandler } from "next";
import { collections, connectDB } from "../../../../mongodb";

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

  const reviews = await collections.productReviews
    .find({
      productId,
    })
    .toArray();

  res.status(200).send(
    Math.round(
      (reviews.reduce((prevTotal, curr) => {
        return prevTotal + curr.rating;
      }, 0) /
        reviews.length) *
        2
    ) / 2
  );
};
export default handler;
