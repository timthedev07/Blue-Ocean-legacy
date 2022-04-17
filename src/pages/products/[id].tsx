import { Button } from "@chakra-ui/react";
import { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { LazyImage } from "../../components/LazyImage";
import { RatingDisplay } from "../../components/RatingDisplay";
import { productsData } from "../../products";
import { getSingleTranslationObj } from "../../utils/getTranslation";
import { getRating } from "../api/reviews/average/[productId]";

interface ProductDetailsProps {
  product: typeof productsData[0];
  rating: number;
}

const ProductDetails: NextPage<ProductDetailsProps> = ({ product, rating }) => {
  const { locale } = useRouter();

  const spacer = <div className="h-full flex-1 md:flex-grow flex-grow-0"></div>;

  const test = "border rounded-lg border-red-400";

  return (
    <div className="flex justify-center items-start p-3 gap-3">
      {spacer}
      <div className=" flex-1 md:flex-grow-[3.5] lg:flex-grow-[2.5] flex justify-center gap-4 items-start border border-white rounded-lg">
        <div className={`flex-1 flex-grow ${test} `}>
          <LazyImage src="https://assets.vercel.com/image/upload/f_auto,c_limit,q_auto,w_96/front/home/new/leo.png" />
        </div>
        <div
          className={`flex flex-col flex-1 flex-grow justify-start items-start p-6 gap-5 ${test}`}
        >
          <h4 className="font-bold">
            {getSingleTranslationObj(locale, product.name)}
          </h4>
          <RatingDisplay rating={rating} />
          <span className="text-emerald-400">{product.price}€</span>
          <div>{getSingleTranslationObj(locale, product.description)}</div>
          <Link href={`/products/write-review/${product.id}`} passHref>
            <Button className="uppercase mt-10 self-end">Write a Review</Button>
          </Link>
        </div>
      </div>
      {spacer}
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
    fallback: "blocking",
  };
}

export const getStaticProps: GetStaticProps<ProductDetailsProps> = async ({
  params,
}) => {
  const { id } = params!;
  const product = productsData.find((v) => {
    return v.id == id;
  });

  if (!product) {
    return {
      notFound: true,
    };
  }

  const rating = await getRating(product.id);

  return {
    props: {
      product,
      rating,
    },
  };
};

export default ProductDetails;
