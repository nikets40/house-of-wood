import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";

import "../styles/index.css";
import Header from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="m-auto px-10 lg:px-20">
        <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        </Head>
        <Header/>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
