import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
`;
const Image = styled.img`
  width: 80px;
  height: 80px;
`;
const InfoContainer = styled.div``;
const Title = styled.h1`
  font-size: 20px;
  font-weight: 400;
  color: #007f6a;
`;
const CounterContainer = styled.div``;
const CounterBtn = styled.button`
  padding: 1rem;
  font-size: 16px;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;
const Count = styled.span``;

const CartItem = ({ id, image, title, decreaseQty, increaseQty, qty }) => {
  return (
    <Container key={id}>
      <Image src={image} alt="" />
      <InfoContainer>
        <Title>{title}</Title>
        <CounterContainer>
          <CounterBtn onClick={() => decreaseQty(id)}>-</CounterBtn>
          <Count>{qty}</Count>
          <CounterBtn onClick={() => increaseQty(id)}>+</CounterBtn>
        </CounterContainer>
      </InfoContainer>
    </Container>
  );
};

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  decreaseQty: PropTypes.func.isRequired,
  increaseQty: PropTypes.func.isRequired,
  qty: PropTypes.number.isRequired,
};

export default CartItem;
