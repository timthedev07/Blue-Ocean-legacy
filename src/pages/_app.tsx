import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/layout";
import { DragontailProvider } from "dragontail-experimental";
import { AnimatePresence } from "framer-motion";

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <DragontailProvider theme={"dark"}>
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </DragontailProvider>
  );
};

export default App;
