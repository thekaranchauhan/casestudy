import { useContext } from "react";
import { state } from "../../Context";
import CartItem from "./CartItem";
import styled from "styled-components";

const CartTitle = styled.h1`
  text-align: center;
  font-weight: 300;
  font-size: 50px;
`;

const Cart = () => {
  const { cart, setCart } = useContext(state);
  const decreaseQty = (id) => {
    const product = cart.products.find((product) => id === product.id);
    const index = cart.products.indexOf(product);
    // Make new array with right values
    const newArray = [...cart.products];
    newArray[index].qty -= 1;
    // If qty ===0  i want to delete the item
    if (newArray[index].qty === 0) {
      newArray.splice(index, 1);
    }
    setCart({
      products: newArray,
      qty: cart.qty - 1,
    });
  };
  const increaseQty = (id) => {
    const product = cart.products.find((product) => id === product.id);
    const index = cart.products.indexOf(product);
    // Make new array with right values
    const newArray = [...cart.products];
    newArray[index].qty += 1;
    setCart({
      products: newArray,
      qty: cart.qty + 1,
    });
  };
  return (
    <div
      style={{
        width: "25%",
        position: "fixed",
        top: "45px",
        right: "0px",
        padding: "0.5rem",
        background: "white",
        boxShadow: "0px 0px 15px 0px #d4d4d4",
        borderRadius: "5px",
      }}
    >
      <CartTitle>Cart</CartTitle>
      {cart.products.map((product) => (
        <CartItem
          key={product.id}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
          id={product.id}
          image={product.image}
          title={product.title}
          qty={product.qty}
        />
      ))}
    </div>
  );
};

export default Cart;
