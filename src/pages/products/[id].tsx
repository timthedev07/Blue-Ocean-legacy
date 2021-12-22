import { NextPage } from "next";
import { useRouter } from "next/router";

const ProductDetails: NextPage = () => {
  const { query } = useRouter();
  const productId = query.id as string;
  return <>{productId}</>;
};

export default ProductDetails;
