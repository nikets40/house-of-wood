import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";

import "../styles/index.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MailinglistBanner from "../components/MailinglistBanner";
import { UserContext } from "../lib/context";
import { useUserData } from "../lib/hooks";
import ProgressBar from "@badrap/bar-of-progress";
import Router, { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
  const progress = new ProgressBar({
    size: 4,
    color: "#fa8c16",
    className: "z-50",
    delay: 100,
  });

  Router.events.on("routeChangeStart", progress.start);
  Router.events.on("routeChangeComplete", progress.finish);
  Router.events.on("routeChangeError", progress.finish);

  const userData = useUserData();
  const router = useRouter();
  const path = router.pathname;
  console.log(path);

  const showHeader = path === "/login" || path === "/signup" ? false : true;

  return (
    <UserContext.Provider value={userData}>
      <div>
        <Toaster />
        <Head>
          <link rel="shortcut icon" href="/favicon.png" />
          <title>House of Wood</title>
        </Head>
        {showHeader && <Header />}
        <div className="m-auto px-10 lg:px-20">
          <Component {...pageProps} />
          {showHeader && <MailinglistBanner />}
        </div>

        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default MyApp;
