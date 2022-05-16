import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroBtn
} from './HeroElements';
import { useNavigate } from "react-router-dom"


const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate=useNavigate();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Healthy Meals In Minutes</HeroH1>
          <HeroBtn onClick={()=>navigate("/verify-email")}>Get Started</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
