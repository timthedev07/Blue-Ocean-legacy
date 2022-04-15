import { Cloudinary } from "@cloudinary/url-gen";

export const cloudinaryInstance = new Cloudinary({
  cloud: {
    cloudName: "blueoceaninternationalimgcdn0",
    apiKey: process.env.CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_API_SECRET,
  },
});
