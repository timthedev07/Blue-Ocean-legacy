import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "dragontail-experimental";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import toast from "react-hot-toast";
import {
  enWriteReview,
  esWriteReview,
  zhWriteReview,
} from "../translations/write-review";
import { getSingleTranslation, getTranslation } from "../utils/getTranslation";
import { toastConfig } from "../utils/toastConfig";
import { newReviewSchema } from "../utils/yupSchemas";

interface ReviewFormProps {
  productId: string;
  className?: string;
  onSubmissionSuccess?: Function;
}

export const ReviewForm: FC<ReviewFormProps> = ({
  productId,
  className = "",
  onSubmissionSuccess,
}) => {
  const { locale } = useRouter();
  const [formDisabled, setFormDisabled] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      authorName: "",
      review: "",
      rating: 1,
      productId,
    },
    validationSchema: newReviewSchema,
    onSubmit: async (formData) => {
      setFormDisabled(true);

      const response = await fetch("/api/reviews/newReview", {
        body: JSON.stringify({ ...formData }),
        method: "POST",
      });

      const status = response.status;
      console.log(status);

      if (199 < status && status < 300) {
        toast.success(
          getSingleTranslation(
            locale,
            "Review submitted!",
            "La crítica ya está subido!",
            "评价已提交！"
          ),
          toastConfig
        );
        if (onSubmissionSuccess) onSubmissionSuccess();
      } else {
        toast.error(
          getSingleTranslation(
            locale,
            "Sorry, your request cannot be processed at the moment. Try again later.",
            "Lo sentimos, su crítica no puede ser procesada en este momento. Vuelva a intentarlo más tarde.",
            "非常抱歉，您的评论未能被收录，请稍后再试。"
          ),
          toastConfig
        );
      }
    },
  });

  const t = getTranslation(locale, enWriteReview, esWriteReview, zhWriteReview);

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className={`flex flex-col gap-3 w-[95%] max-w-3xl border rounded-lg p-6 ${className}`}
      >
        <FormControl label="authorName" isRequired>
          <FormLabel>
            {t.authorName}
          </FormLabel>
          <Input
            isDisabled={formDisabled}
            className="border-black"
            required
            value={formik.values.authorName}
            name="authorName"
            variant="underline"
            onChange={formik.handleChange}
          />
        </FormControl>
        <FormControl label="rating" isRequired className="my-2">
          <FormLabel>
            {t.rating}
          </FormLabel>
          <input
            name="rating"
            min={1}
            // isDisabled={formDisabled}
            max={5}
            defaultValue={1}
            onChange={(val) => {
              formik.setFieldValue("rating", val, true);
            }}
          />
            {/* {[1, 2, 3, 4, 5].map((each) => (
              <SliderMark
                key={each}
                value={each}
                mt="1.5"
                ml="-1"
                fontSize="sm"
              >
                {each}
              </SliderMark>
            ))} */}

            {/* <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider> */}
        </FormControl>

        <FormControl label="review" isRequired>
          <FormLabel>
            {t.review}
          </FormLabel>
          <Textarea
            id="review"
            className="border-black"
            name="review"
            onChange={formik.handleChange}
            variant="underline"
            isDisabled={formDisabled}
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
        <Button isDisabled={formDisabled} type="submit">
          {t.submit}
        </Button>
      </form>
    </>
  );
};
