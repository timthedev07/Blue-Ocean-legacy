import { Cloudinary } from "@cloudinary/url-gen";
export { v2 } from "cloudinary";
import { v2 } from "cloudinary";

export const cloudinaryInstance = new Cloudinary({
  cloud: {
    cloudName: "blueoceaninternationalimgcdn0",
    apiKey: process.env.CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_API_SECRET,
  },
});

export const cloudinaryV2Config = v2.config({
  cloud_name: "blueoceaninternationalimgcdn0",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
