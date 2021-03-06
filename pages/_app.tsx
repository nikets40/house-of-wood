import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";

import "../styles/index.css";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import MailinglistBanner from "../components/common/MailinglistBanner";
import { UserContext } from "../lib/context";
import { useUserData } from "../lib/auth-hooks";
import ProgressBar from "@badrap/bar-of-progress";
import Router, { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import {store, persistor} from "../redux/store";
import { PersistGate } from 'redux-persist/integration/react'
 

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
  const showHeader =
    path === "/login" || path === "/signup" || path.startsWith("/admin")
      ? false
      : true;
  const isAdminPage = path.startsWith("/admin");

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <UserContext.Provider value={userData}>
        <div>
          <Toaster />
          <Head>
            <link rel="shortcut icon" href="/favicon.png" />
            <title>House of Wood</title>
          </Head>
          {!isAdminPage && showHeader && <Header />}
          <div className={`${isAdminPage ? "" : "m-auto px-10 lg:px-20"}`}>
            <Component {...pageProps} />
            {showHeader && !isAdminPage && <MailinglistBanner />}
          </div>

          {!isAdminPage && <Footer />}
        </div>
      </UserContext.Provider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
