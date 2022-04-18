import { FC, useEffect, useState } from "react";
import Head from "next/head";
import { Nav } from "./navigation/Nav";
import { Footer } from "./footers/Footer";
import { MobileNav } from "./navigation/mobile";
import { Toaster } from "react-hot-toast";
import { MobileFooter } from "./footers/MobileFooter";

export const metadata = {
  title: "Blue Ocean",
  image: "",
  description: "",
  domain: "https://something.com",
};

const MOBILE_THRESHOLD = 820;
const SMALL_MOBILE_THRESHOLD = 450;

export const Layout: FC = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(true);
  const [isSmallMobile, setIsSmallMobile] = useState<boolean>(true);

  useEffect(() => {
    setIsMobile(window.innerWidth <= MOBILE_THRESHOLD);
    setIsSmallMobile(window.innerWidth <= SMALL_MOBILE_THRESHOLD);
    const resizeHandler = () => {
      setIsMobile(window.innerWidth <= MOBILE_THRESHOLD);
      setIsSmallMobile(window.innerWidth <= SMALL_MOBILE_THRESHOLD);
    };
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.title} />
        <meta name="keywords" content="one, two, three" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="0 days" />
        <meta name="author" content="Tim <timpersonal07@gmail.com>" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:site_name" content={metadata.title} />
        <meta property="og:url" content={metadata.domain} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:description" content={metadata.description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@timthedev07" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
      </Head>

      <Toaster />
      <div id="App" className="bg-slate-800 min-w-[450px] relative">
        {!isMobile ? <Nav /> : <MobileNav isSmallMobile={isSmallMobile} />}
        <div className="min-h-screen">{children}</div>
      </div>
      {!isMobile ? <Footer /> : <MobileFooter />}
    </>
  );
};
