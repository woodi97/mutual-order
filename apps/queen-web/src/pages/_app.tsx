import "@src/styles/globals.css";

import { NextPage } from "next";
import { AppProps } from "next/app";
import Head from "next/head";

const App: NextPage = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        ></meta>
      </Head>
      <Component {...pageProps} key={router.route} />
    </>
  );
};

export default App;
