import React, { useContext } from "react";
import { Cloudinary } from "@cloudinary/url-gen";

interface CloudinaryContextType {
  cloudinary: Cloudinary;
}
const CloudinaryContext = React.createContext<
  CloudinaryContextType | undefined
>(undefined);

export const useCloudinary = () => {
  return useContext(CloudinaryContext);
};

export const CloudinaryProvider: React.FC = ({ children }) => {
  const cloudinary = new Cloudinary({
    cloud: {
      cloudName: "blueoceaninternationalimgcdn0",
      apiKey: process.env.CLOUDINARY_API_KEY,
      apiSecret: process.env.CLOUDINARY_API_SECRET,
    },
  });

  const value: CloudinaryContextType = {
    cloudinary,
  };
  return (
    <CloudinaryContext.Provider value={value}>
      {children}
    </CloudinaryContext.Provider>
  );
};
