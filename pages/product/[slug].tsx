import React, { useState } from "react";
import { urlFor, client } from "../../lib/client";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import Product from "../../components/Product";

type product = {
  _id: string;
  image: [{}];
  name: string;
  price: number;
  details: string;
  slug: {
    current: string;
  };
};
interface Props {
  product: product;
  products: product[];
}

const ProductDetails = ({ product, products }: Props) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img
              src={urlFor(image && image[index])}
              className="product-detail-image"
            />
          </div>
          <div className="small-images-container">
            {image.map((img, i) => (
              <img
                key={i}
                src={urlFor(img)}
                className={
                  i === index ? "small-image selected-image" : "small-image"
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
          <p>(20)</p>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">${price}</p>
          <div className="quantity">
            <h3>Quantity: </h3>
            <p className="quantity-desc">
              <span className="minus">
                <AiOutlineMinus />
              </span>
              <span className="num">0</span>
              <span className="plus">
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button className="add-to-cart">
              <p>Add to Cart</p>
            </button>
            <button className="buy-now">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((product: product) => (
              <Product product={product} key={product._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product },
  };
};
export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;
  const products = await client.fetch(query);
  const paths = products.map((product: product) => ({
    params: { slug: product.slug.current },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};
export default ProductDetails;
