import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { NextPage } from "next";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
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

const WriteReview: NextPage = () => {
  const { locale, query } = useRouter();

  const formik = useFormik({
    initialValues: {
      authorName: "",
      review: "",
      rating: 0,
    },
    validationSchema: newReviewSchema,
    onSubmit: async (formData) => {
      const response = await fetch("/api/reviews/newReview", {
        body: JSON.stringify({ ...formData, productId: query.id }),
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
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-3 w-72 border rounded-lg p-6"
      >
        <FormControl isRequired>
          <FormLabel as="legend" htmlFor="author-name">
            {t.authorName}
          </FormLabel>
          <Input
            id="author-name"
            className="border-black"
            required
            value={formik.values.authorName}
            name="name"
            variant="flushed"
            onChange={formik.handleChange}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel as="legend" htmlFor="rating">
            {t.rating}
          </FormLabel>
          <Input
            id="contact-email"
            className="border-black"
            required
            placeholder="google@gmail.com"
            type="email"
            value={formik.values.rating}
            variant="flushed"
            name="email"
            onChange={formik.handleChange}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel as="legend" htmlFor="contact-message">
            {t.review}
          </FormLabel>
          <Textarea
            id="contact-message"
            className="border-black"
            name="message"
            onChange={formik.handleChange}
            variant="flushed"
            resize={"none"}
            value={formik.values.review}
          />
        </FormControl>
        <Button type="submit">{t.submit}</Button>
      </form>
    </>
  );
};

export default WriteReview;
