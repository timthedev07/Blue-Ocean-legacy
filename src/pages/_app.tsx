import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/layout";
import { ChakraProvider } from "@chakra-ui/react";
import { chakraTheme } from "../utils/chakraTheme";
import { AnimatePresence } from "framer-motion";

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <Layout>
      <ChakraProvider theme={chakraTheme}>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </ChakraProvider>
    </Layout>
  );
};

export default App;
