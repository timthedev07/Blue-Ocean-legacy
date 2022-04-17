import { NextApiHandler } from "next";
import { collections, connectDB } from "../../../mongodb";
import { newReviewSchema } from "../../../utils/yupSchemas";

const handler: NextApiHandler = async (req, res) => {
  if (req.method?.toLowerCase() !== "post") {
    res.status(405).end();
    return;
  }

  let reviewInfo;
  try {
    reviewInfo = await newReviewSchema.validate(req.body);
  } catch (err) {
    res.status(400).end();
    return;
  }

  await connectDB();

  if (!collections.productReviews) {
    res.status(503).end();
    return;
  }

  try {
    await collections.productReviews.insertOne(reviewInfo as any);
    res.status(201).end();
  } catch (err) {
    console.log(err);
    res.status(400).end();
  }
};

export default handler;
