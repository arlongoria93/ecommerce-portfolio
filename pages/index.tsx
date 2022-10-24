import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import FooterBanner from "../components/FooterBanner";
import HeroBanner from "../components/HeroBanner";
import Product from "../components/Product";
import { client } from "../lib/client";

type Product = {
  name: string;
  image: string;
  slug: string;
  price: number;
  details: string;
  _id: string;
};
type BannerData = {
  image: string;
  buttonText: string;
  productText: string;
  desc: string;
  smallText: string;
  midText: string;
  largeText: string;
  largeText2: string;
  discount: string;
  SaleTime: string;
};
interface Props {
  products: Product[];
  bannerData: BannerData[];
}
const Home = ({ products, bannerData }: Props) => {
  return (
    <>
      <Head>
        <title>OTBC</title>
        <meta name="description" content="The best keycaps of the 22" />
      </Head>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      {console.log(products, bannerData)}
      <div className="products-heading">
        <h1>Only The Best Caps</h1>
        <p>Keycaps froms the gods</p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = `*[_type=="product"]`;
  const products = await client.fetch(query);
  const bannerQuery = `*[_type == "banner"]`;
  const bannerData = await client.fetch(bannerQuery);
  return {
    props: { products, bannerData },
  };
};

export default Home;
