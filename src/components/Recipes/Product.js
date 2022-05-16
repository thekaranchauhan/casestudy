import { useContext } from "react";
import PropTypes from "prop-types";
import { state } from "../../Context";
import styled from "styled-components";
import { BiCookie } from 'react-icons/bi';

const Image = styled.img`
  width: 80%;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
  padding: 2rem;
  width: 100%;
`;

const Title = styled.h3`
  font-weight: 300;
  font-size: 25px;
  text-align: center;
  color: #007f6a;
`;

const Vendor = styled.h5`
  font-weight: 300;
  text-align: center;
`;

const AddBtn = styled.button`
  font-weight: 300;
  color: #fff;
  padding: 0.5rem;
  margin: 1rem;
  background: #007f6a;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const InfoContainer = styled.div`
  padding: 1.5rem;
`;
const Data = styled.span``;

const Product = ({
  id,
  title,
  image,
  vendor,
  fats,
  carbs,
  protein,
  calories,
}) => {
  const { cart, setCart } = useContext(state);
  const productStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "column",
    maxWidth: "300px",
    minHeight: "500px",
    margin: "1rem",
    boxShadow: "0px 0px 15px 0px #e7e7e7",
    borderRadius: "5px",
  };

  const addToCart = () => {
    // Check if item already exists in cart
    const productIfExists = cart.products.filter(
      (product) => id === product.id
    );

    if (productIfExists.length === 0) {
      // If doesnt exist just add the product in cart
      setCart({
        products: [...cart.products, { id, title, image, vendor, qty: 1 }],
        qty: cart.qty + 1,
      });
    }
    if (productIfExists.length > 0) {
      const index = cart.products.indexOf(productIfExists[0]);
      // Make new array with right values
      const newArray = [...cart.products];
      newArray[index].qty += 1;
      setCart({
        products: newArray,
        qty: cart.qty + 1,
      });
    }
  };
  return (
    <div style={productStyle}>
      <Image src={image} alt="" />
      <Container>
        {" "}
        <Title>{title}</Title>
        <Vendor>From - {vendor}</Vendor>
        <InfoContainer>
          <Data>
            {" "}
            <BiCookie/>
            &nbsp;Fats:- {fats}
          </Data>
          <br />
          <Data>
          <BiCookie/>
            &nbsp;Carbs:- {carbs}
          </Data>
          <br />
          <Data>
          <BiCookie/>
            &nbsp;Protein:- {protein}
          </Data>
          <br />
          <Data>
          <BiCookie/>
            &nbsp;Calories:- {calories}
          </Data>
        </InfoContainer>
        <AddBtn onClick={addToCart}>Add To Cart</AddBtn>
      </Container>
    </div>
  );
};

// Typecheck for the component props
Product.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  vendor: PropTypes.string.isRequired,
};

export default Product;
