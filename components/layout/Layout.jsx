import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Head from "next/head";

const Layout = ({ children,title }) => {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/logo_black.svg"></link>
        <meta name="description" content="Transform your online presence with Himanstech's digital marketing expertise. From strategy to insights, we help your business succeed. Enquire now!" />
        <title>{title}</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
