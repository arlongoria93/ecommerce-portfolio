import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HeroBanner from "../components/HeroBanner";
import { client } from "../lib/client";

type Product = {
  name: string;
  image: string;
  slug: string;
  price: number;
  details: string;
};
type BannerData = {
  image: string;
  buttonText: string;
  ProductText: string;
  Desc: string;
  smallText: string;
  midText: string;
  LargeText: string;
  LargeText2: string;
  DiscountText: Number;
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
      <HeroBanner />
      {console.log(products, bannerData)}
      <div className="products-heading">
        <h1>Only The Best Caps</h1>
        <p>Keycaps froms the gods</p>
      </div>
      <div className="products-container">
        {products?.map((product) => product.name)}
      </div>
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
