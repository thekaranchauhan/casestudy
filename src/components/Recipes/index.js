import Products from "./Products";
import Cart from "./Cart";
import Announcement from "./Announcement";

const Recipes = () => {
  return (
    <div>
      <Announcement />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Products />
        <Cart />
      </div>
    </div>
  );
};

export default Recipes;
