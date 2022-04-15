import { NextPage, GetStaticProps } from "next";
import { useRouter } from "next/router";

const ProductDetails: NextPage<{ product: string }> = ({ product }) => {
  const { query } = useRouter();
  const productId = query.id as string;
  return <>{productId}</>;
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "0" } }],
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const { slug } = params!;

  return {
    props: {
      product: "",
    },
  };
};

export default ProductDetails;
