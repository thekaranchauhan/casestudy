import Hero from "../Hero";
import Products from "../Products";
import Feature from "../Feature";
import { productData, productDataTwo } from "../Products/data";

export default function Homepage() {
  return (
    <>
      <Hero />
      <Products heading="Top Picks of the Week" data={productData} />
      <Feature />
      <Products heading="Sweet Treats for You" data={productDataTwo} />
    </>
  );
}
