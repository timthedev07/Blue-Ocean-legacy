import { useFormik } from "formik";
import { NextPage } from "next";
import {
  Input,
  Button,
  Textarea,
  FormLabel,
  FormControl,
  Box,
  Heading,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export interface ContactFormValues {
  name: string;
  email: string;
  phoneNumber?: string;
  message: string;
}

const Contact: NextPage = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    } as ContactFormValues,
    onSubmit: async (formData) => {
      // const { email, name } = formData;
      console.log(formData);
      const response = await fetch("/api/contact", {
        body: JSON.stringify(formData),
        method: "POST",
      });

      const responseText = await response.text();
      console.log(responseText);
    },
  });

  return (
    <motion.div
      className="flex w-full justify-center items-center"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="p-3 min-w-[20rem] max-w-sm w-full border rounded-lg mt-7">
        <Box textAlign="center">
          <Heading>Contact Us</Heading>
        </Box>
        <Box className="my-4 text-left">
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
            <FormControl isRequired>
              <FormLabel as="legend" htmlFor="contact-name">
                Your name
              </FormLabel>
              <Input
                id="contact-name"
                className="border-black"
                placeholder="John Doe"
                required
                value={formik.values.name}
                name="name"
                onChange={formik.handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel as="legend" htmlFor="contact-email">
                Email
              </FormLabel>
              <Input
                id="contact-email"
                className="border-black"
                required
                placeholder="google@gmail.com"
                type="email"
                value={formik.values.email}
                name="email"
                onChange={formik.handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel as="legend" htmlFor="contact-phoneNumber">
                Phone number
              </FormLabel>
              <Input
                className="border-black"
                id="contact-phoneNumber"
                name="phoneNumber"
                onChange={formik.handleChange}
                value={formik.values.phoneNumber}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel as="legend" htmlFor="contact-message">
                Message
              </FormLabel>
              <Textarea
                id="contact-message"
                className="border-black"
                name="message"
                onChange={formik.handleChange}
                value={formik.values.message}
              />
            </FormControl>
            <Button type="submit">Submit</Button>
          </form>
        </Box>
      </div>
    </motion.div>
  );
};

export default Contact;
