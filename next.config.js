/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en-US", "es-ES", "zh-CN"],
    defaultLocale: "en-US",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};
