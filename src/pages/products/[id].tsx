import { Button } from "@chakra-ui/react";
import { NextPage, GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { RatingDisplay } from "../../components/RatingDisplay";
import { productsData } from "../../products";
import {
  getSingleTranslationObj,
  getTranslation,
} from "../../utils/getTranslation";
import { getRating } from "../api/reviews/average/[productId]";
import {
  getCachedProductImages,
  ProductImageData,
} from "../../utils/getCachedProductImages";
import { useState } from "react";
import {
  enWriteReview,
  esWriteReview,
  zhWriteReview,
} from "../../translations/write-review";
import { ReviewForm } from "../../components/ReviewForm";
import { getHeadForPage } from "../../utils/getHead";
import Image from "next/image";

interface ProductDetailsProps {
  product: typeof productsData[0];
  rating: number;
  imagesData: ProductImageData[];
}

const ProductDetails: NextPage<ProductDetailsProps> = ({
  product,
  rating,
  imagesData,
}) => {
  const { locale, reload } = useRouter();
  const [showReviewForm, setShowReviewForm] = useState<boolean>(false);
  const [selectedImgInd, setSelectedImgInd] = useState<number>(0);

  const spacer = <div className="h-full flex-1 md:flex-grow flex-grow-0" />;

  const t = getTranslation(locale, enWriteReview, esWriteReview, zhWriteReview);
  const description = getSingleTranslationObj(locale, product.description);
  const title = getSingleTranslationObj(locale, product.name);

  return (
    <>
      {getHeadForPage({
        description: description,
        path: `/products/${product.id}`,
        title: `${title}`,
      })}
      <div className="flex justify-center items-start p-3 gap-3">
        {spacer}
        <div className="flex-1 md:flex-grow-[3.5] lg:flex-grow-[2.5] flex flex-col">
          <div className=" flex md:flex-row flex-col justify-center gap-4 items-start">
            <div className={`flex-1 flex-grow w-full h-auto rounded-md`}>
              <div className="h-96 w-72 relative rounded-md overflow-hidden">
                <Image
                  src={imagesData[selectedImgInd].href}
                  className="rounded-md object-cover"
                  objectPosition={"top"}
                  layout="fill"
                  alt=""
                />
              </div>
              <div className="gap-1 overflow-x-scroll whitespace-nowrap no-scrollbar my-3">
                {imagesData.map((each, ind) => (
                  <div
                    key={each.href}
                    className="h-24 relative rounded-sm overflow-hidden inline-block mx-4"
                  >
                    <Image
                      src={each.href}
                      alt=""
                      layout="fill"
                      className="rounded-md object-cov object-top"
                      onClick={() => {
                        console.log(`clicked ${ind}`);
                        setSelectedImgInd(ind);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div
              className={`flex flex-col flex-1 flex-grow justify-start items-start p-6 gap-5`}
            >
              <h4 className="font-bold">
                {getSingleTranslationObj(locale, product.name)}
              </h4>
              <RatingDisplay rating={rating} />
              <span className="text-emerald-400">{product.price}€</span>
              <div>{getSingleTranslationObj(locale, product.description)}</div>
              <Button
                onClick={() => {
                  setShowReviewForm((prev) => !prev);
                }}
                className="uppercase mt-10 self-end"
              >
                {showReviewForm ? t.maybeNextTime : t.writeAReview}
              </Button>
            </div>
          </div>
          <ReviewForm
            productId={product.id}
            className={showReviewForm ? "block" : "hidden"}
            onSubmissionSuccess={() => {
              setShowReviewForm(false);
              reload();
            }}
          />
        </div>

        {spacer}
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<
  ProductDetailsProps
> = async ({ params }) => {
  const { id } = params!;
  const product = productsData.find((v) => {
    return v.id == id;
  });

  if (!product) {
    return {
      notFound: true,
    };
  }

  // get product rating with our api
  const rating = await getRating(product.id);

  // get product images with cloudinary
  const imagesData = await getCachedProductImages(product.id);

  return {
    props: {
      product,
      rating,
      imagesData,
    },
  };
};

export default ProductDetails;
