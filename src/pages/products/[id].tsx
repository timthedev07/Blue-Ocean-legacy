import { NextPage, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { productsData } from "../../products";

const Spacer = () => {
  return <div></div>;
};

const ProductDetails: NextPage<{ product: typeof productsData[0] }> = ({
  product,
}) => {
  const { locale } = useRouter();
  locale;
  return (
    <div className="flex justify-center items-start">
      <div></div>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: productsData.map((each) => ({
      params: {
        id: each.id,
      },
    })),
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params!;

  return {
    props: {
      product: productsData.find((v) => {
        return v.id == id;
      }),
    },
  };
};

export default ProductDetails;
