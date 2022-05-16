import styled from "styled-components";
import * as EmailValidator from "email-validator";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Image = styled.img`
  width: 60%;
`;
const EmailPinForm = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
  width: 40%;
  padding: 2rem;
`;
const Title = styled.h1``;
const Input = styled.input`
  padding: 0.5rem;
  margin: 1rem 0;
`;
const Container = styled.div`
  display: flex;
`;

const SubmitBtn = styled.button`
  width: 200px;
  margin-top: 0.5rem;
  padding: 1rem 0.5rem;
  background: #333;
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
`;

const Label = styled.label`
  color: red;
`;

const PIN = "10001";

const VerifyPin = () => {
  const [formData, setFormData] = useState({ pin: "", email: "" });
  const [alerts, setAlerts] = useState({ pin: false, email: false });
  const { email, pin } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    setAlerts({ email: false, pin: false });
    if (pin !== PIN) return setAlerts({ ...alerts, pin: true });
    if (!EmailValidator.validate(email))
      return setAlerts({ ...alerts, email: true });

    navigate("/recipes");
  };
  return (
    <Container>
      <Image
        src={
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        }
      />
      <EmailPinForm>
        <Title>Enter Your Details</Title>
        {alerts.pin && <Label>Pin is invalid</Label>}
        <Input
          onChange={(e) => onChange(e)}
          name={"pin"}
          value={pin}
          placeholder={"Enter Pin code"}
        />
        {alerts.email && <Label>Email is invalid</Label>}
        <Input
          onChange={(e) => onChange(e)}
          placeholder={"Enter Email"}
          name={"email"}
          value={email}
        />
        <SubmitBtn onClick={(e) => onSubmit(e)}>Submit</SubmitBtn>
      </EmailPinForm>
    </Container>
  );
};

export default VerifyPin;
