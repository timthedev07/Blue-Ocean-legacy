import { Cloudinary } from "@cloudinary/url-gen";

export const cloudinaryInstance = new Cloudinary({
  cloud: {
    cloudName: "blueoceaninternationalimgcdn0",
    apiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    apiSecret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
  },
});

export const cloudinaryV2Config = {
  cloud_name: "blueoceaninternationalimgcdn0",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
};
