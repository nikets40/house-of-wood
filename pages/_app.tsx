import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";

import "../styles/index.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MailinglistBanner from "../components/MailinglistBanner";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const path = router.pathname;
  console.log(path);
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>House of Wood</title>
      </Head>
      {path != "/login" && <Header />}
      <div className="m-auto px-10 lg:px-20">
        <Component {...pageProps} />
        {path != "/login" && <MailinglistBanner />}
      </div>

      <Footer />
    </div>
  );
}

export default MyApp;
