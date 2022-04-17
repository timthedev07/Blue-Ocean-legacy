import { NextPage, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { LazyImage } from "../../components/LazyImage";
import { productsData } from "../../products";
import { getSingleTranslationObj } from "../../utils/getTranslation";

const ProductDetails: NextPage<{ product: typeof productsData[0] }> = ({
  product,
}) => {
  const { locale } = useRouter();
  locale;

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
          className={`flex flex-col flex-1 flex-grow justify-start items-start p-6 gap-3 ${test}`}
        >
          <h4 className="font-bold">
            {getSingleTranslationObj(locale, product.name)}
          </h4>
          <span className="text-emerald-400">{product.price}€</span>
          <div>{getSingleTranslationObj(locale, product.description)}</div>
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
