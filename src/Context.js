import { createContext, useState } from "react";

// Here I have created the global data for the app, the products array is one of the global values shared in the app

export const state = createContext();

export const Provider = (props) => {
  const [products, setProducts] = useState([]);

  // const productType = {
  //   ...product,
  //   quantity: 0,
  // };

  const [cart, setCart] = useState({
    products: [], // in this array productType is being used
    qty: 0,
  });
  return (
    <state.Provider value={{ products, setProducts, cart, setCart }}>
      {props.children}
    </state.Provider>
  );
};
