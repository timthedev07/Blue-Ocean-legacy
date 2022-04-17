import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { NextPage } from "next";
import { newReviewSchema } from "../../../utils/yupSchemas";

const WriteReview: NextPage = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    validationSchema: newReviewSchema,
    onSubmit: async (formData) => {
      const response = await fetch("/api/contact", {
        body: JSON.stringify(formData),
        method: "POST",
      });

      const responseText = await response.text();
      console.log(responseText);
    },
  });

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-3 w-72 border rounded-lg p-6"
      >
        <FormControl isRequired>
          <FormLabel as="legend" htmlFor="contact-name">
            {/* {translation.labels.name} */}
          </FormLabel>
          <Input
            id="contact-name"
            className="border-black"
            placeholder="John Doe"
            required
            value={formik.values.name}
            name="name"
            variant="flushed"
            onChange={formik.handleChange}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel as="legend" htmlFor="contact-email">
            {/* {translation.labels.email} */}
          </FormLabel>
          <Input
            id="contact-email"
            className="border-black"
            required
            placeholder="google@gmail.com"
            type="email"
            value={formik.values.email}
            variant="flushed"
            name="email"
            onChange={formik.handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel as="legend" htmlFor="contact-phoneNumber">
            {/* {translation.labels.phoneNumber} */}
          </FormLabel>
          <Input
            className="border-black"
            id="contact-phoneNumber"
            name="phoneNumber"
            variant="flushed"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel as="legend" htmlFor="contact-message">
            {/* {translation.labels.message} */}
          </FormLabel>
          <Textarea
            id="contact-message"
            className="border-black"
            name="message"
            onChange={formik.handleChange}
            variant="flushed"
            resize={"none"}
            value={formik.values.message}
          />
        </FormControl>
        {/* <Button type="submit">{translation.submit}</Button> */}
      </form>
    </>
  );
};

export default WriteReview;
