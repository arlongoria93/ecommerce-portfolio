import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HeroBanner from "../components/HeroBanner";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>OTBC</title>
        <meta name="description" content="The best keycaps of the 22" />
      </Head>
      <HeroBanner />
      <div className="products-heading">
        <h1>Only The Best Caps</h1>
        <p>Keycaps froms the gods</p>
      </div>
      <div className="products-container">
        {["wth"].map((product) => product)}
      </div>
    </>
  );
};

export default Home;
