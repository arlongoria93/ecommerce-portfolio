import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/client";

type Props = {
  heroBanner: {
    image: string;
    buttonText: string;
    productText: string;
    Desc: string;
    smallText: string;
    midText: string;
    largeText1: string;
    largeText2: string;
    discountText: Number;
    saleTime: string;
  };
};

const HeroBanner = ({ heroBanner }: Props) => {
  console.log(heroBanner);
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img
          src={urlFor(heroBanner.image)}
          alt=""
          className="hero-banner-image"
        />
        <div>
          <Link href="/product/ID">
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>DESCRIPTION</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
