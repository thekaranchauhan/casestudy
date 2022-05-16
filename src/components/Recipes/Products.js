import { useEffect, useContext } from "react";
import { state } from "../../Context";
import Product from "./Product";
import styled from "styled-components";
const Container = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
`;

const Products = () => {
  const { products, setProducts } = useContext(state);
  useEffect(() => {
    // Here i am loading the data from the products.json file into the global state
    const loadData = async () => {
      let data = await fetch("products.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      data = await data.json();
      setProducts(data.products);
    };
    loadData();
  }, [setProducts]);

  return (
    <Container>
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          image={product.image.src}
          title={product.title}
          vendor={product.vendor}
          calories={product.calories}
          carbs={product.carbs}
          fats={product.fats}
          protein={product.protein}
        />
      ))}
    </Container>
  );
};

export default Products;
