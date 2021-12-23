import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/layout";
import { ChakraProvider } from "@chakra-ui/react";
import { chakraTheme } from "../utils/chakraTheme";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <ChakraProvider theme={chakraTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Layout>
  );
};

export default App;
