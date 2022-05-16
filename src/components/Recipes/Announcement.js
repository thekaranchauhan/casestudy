import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background: #007f6a;
  color: white;
  text-align: center;
  height: 30px;
`;

const Announcement = () => {
  return <Container>15% off on your first order use code FRESHMEAL</Container>;
};
export default Announcement;
