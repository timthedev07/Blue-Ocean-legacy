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
import { getStaggerVariants, listItemVariants } from "../utils/variants";
import { useRouter } from "next/router";
import { getSingleTranslation, getTranslation } from "../utils/getTranslation";
import { enContact, esContact, zhContact } from "../translations/contact";
import { toast } from "react-hot-toast";
import { toastConfig } from "../utils/toastConfig";

export interface ContactFormValues {
  name: string;
  email: string;
  phoneNumber?: string;
  message: string;
}

const pinVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const Contact: NextPage = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    } as ContactFormValues,
    onSubmit: async (formData) => {
      const response = await fetch("/api/contact", {
        body: JSON.stringify(formData),
        method: "POST",
      });

      const status = response.status;
      if (199 < status && status < 300) {
        toast.success(
          getSingleTranslation(
            locale,
            "Thanks for contacting us!",
            "Gracias por contactarnos.",
            "感谢您联系我们"
          ),
          toastConfig
        );
      } else {
        toast.error(
          getSingleTranslation(
            locale,
            "Sorry, your request cannot be processed at the moment. Try again later.",
            "Lo sentimos, su solicitud no puede ser procesada en este momento. Vuelva a intentarlo más tarde.",
            "非常抱歉，您的信息未能发送成功，请稍后再试。"
          ),
          toastConfig
        );
      }
    },
  });
  const { locale } = useRouter();
  const translation = getTranslation(locale, enContact, esContact, zhContact);

  return (
    <motion.div
      className="flex w-full flex-col justify-center items-center gap-6 p-3 md:p-16"
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
    >
      <Heading>{translation.heading}</Heading>
      <div className="rounded-lg border w-full h-60 p-5 bg-slate-900 flex justify-between">
        <div className="grow shrink basis-1">
          <h3 className="font-semibold">{translation.subheading}</h3>
          <motion.ul className="pl-6" variants={getStaggerVariants(0.2)}>
            <motion.li className="flex gap-3 m-3" variants={listItemVariants}>
              <img className="w-6" src="/images/email.svg" alt="emailIcon" />
              blueocean.co.official@gmail.com
            </motion.li>
            <motion.li className="flex gap-3 m-3" variants={listItemVariants}>
              <img className="w-6" src="/images/phone.svg" alt="phoneIcon" />
              643611778
            </motion.li>
          </motion.ul>
        </div>
        <div className="h-full md:flex justify-end hidden md:justify-center items-center grow shrink basis-1">
          <motion.img
            src="/images/pin.svg"
            alt="pinIcon"
            className="w-24 h-24 md:w-32 md:h-32"
            variants={pinVariants}
          />
        </div>
      </div>
      <div className="w-full h-full flex gap-8 flex-col-reverse md:flex-row">
        <div className="p-6 min-w-[20rem] w-full border rounded-lg grow shrink basis-0 h-full bg-slate-900">
          <Box className="my-4 text-left">
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-3"
            >
              <FormControl isRequired>
                <FormLabel as="legend" htmlFor="contact-name">
                  {translation.labels.name}
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
                  {translation.labels.email}
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
                  {translation.labels.phoneNumber}
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
                  {translation.labels.message}
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
              <Button type="submit">{translation.submit}</Button>
            </form>
          </Box>
        </div>
        <div className="grow shrink basis-0">
          <motion.iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6217.914351759194!2d-0.4487569153254044!3d38.40311527582633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6239aea5f80955%3A0x501aba76bd580f0b!2sCarrer%20la%20Melva%2C%2003540%20Alacant!5e1!3m2!1sen!2ses!4v1641047121756!5m2!1sen!2ses"
            width="100%"
            height="100%"
            className="border-none rounded-lg"
            allowFullScreen
            loading="lazy"
            variants={{
              initial: {
                scale: 0.01,
              },
              animate: {
                scale: 1,
                transition: {
                  duration: 0.5,
                  ease: [0.6, -0.05, 0.01, 0.99],
                },
              },
            }}
          ></motion.iframe>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
