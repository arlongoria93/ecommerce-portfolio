import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = {};

const Layout = ({ children }: Props) => {
  return (
    <div className="layout">
      <Head>
        <title>OTBC</title>
        <header>
          <Navbar />
        </header>
        <main className="main-container">{children}</main>
        <footer>
          <Footer />
        </footer>
      </Head>
    </div>
  );
};

export default Layout;
