import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { productsData } from "../../../products";
import {
  enWriteReview,
  esWriteReview,
  zhWriteReview,
} from "../../../translations/write-review";
import {
  getSingleTranslation,
  getTranslation,
} from "../../../utils/getTranslation";
import { newReviewSchema } from "../../../utils/yupSchemas";

interface Props {
  productId: string;
}

const WriteReview: NextPage<Props> = ({ productId }) => {
  const { locale } = useRouter();

  const formik = useFormik({
    initialValues: {
      authorName: "",
      review: "",
      rating: 1,
      productId,
    },
    validationSchema: newReviewSchema,
    onSubmit: async (formData) => {
      const response = await fetch("/api/reviews/newReview", {
        body: JSON.stringify({ ...formData }),
        method: "POST",
      });

      const status = response.status;
      toast.success(
        199 > status && status < 300
          ? getSingleTranslation(
              locale,
              "Review submitted!",
              "La crítica ya está subido!",
              "评价已提交！"
            )
          : getSingleTranslation(
              locale,
              "Sorry, your request cannot be processed at the moment. Try again later.",
              "Lo sentimos, su crítica no puede ser procesada en este momento. Vuelva a intentarlo más tarde.",
              "非常抱歉，您的评论未能被收录，请稍后再试。"
            ),
        {
          style: {
            background: "#0f172a",
            color: "#fff",
          },
          duration: 5000,
        }
      );
    },
  });
  const t = getTranslation(locale, enWriteReview, esWriteReview, zhWriteReview);

  return (
    <div className="flex justify-center items-center min-h-[500px]">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-3 w-[95%] max-w-3xl border rounded-lg p-6"
      >
        <FormControl isRequired>
          <FormLabel as="legend" htmlFor="authorName">
            {t.authorName}
          </FormLabel>
          <Input
            id="authorName"
            className="border-black"
            required
            value={formik.values.authorName}
            name="authorName"
            variant="flushed"
            onChange={formik.handleChange}
          />
        </FormControl>
        <FormControl isRequired className="my-2">
          <FormLabel as="legend" htmlFor="rating">
            {t.rating}
          </FormLabel>
          <Slider
            aria-label="slider-ex-6"
            name="rating"
            min={1}
            max={5}
            defaultValue={1}
          >
            {[1, 2, 3, 4, 5].map((each) => (
              <SliderMark
                key={each}
                value={each}
                mt="1.5"
                ml="-1"
                fontSize="sm"
              >
                {each}
              </SliderMark>
            ))}

            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </FormControl>

        <FormControl isRequired>
          <FormLabel as="legend" htmlFor="review">
            {t.review}
          </FormLabel>
          <Textarea
            id="review"
            className="border-black"
            name="review"
            onChange={formik.handleChange}
            variant="flushed"
            resize={"none"}
            value={formik.values.review}
          />
        </FormControl>
        <input
          hidden
          value={formik.values.productId}
          name="productId"
          onChange={formik.handleChange}
        />
        <Button type="submit">{t.submit}</Button>
      </form>
    </div>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: productsData.map((each) => ({
      params: {
        id: each.id,
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const { id } = params!;
  const product = productsData.find((v) => {
    return v.id == id;
  });

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      productId: product.id,
    },
  };
};

export default WriteReview;
