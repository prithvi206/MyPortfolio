import React from 'react'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from "../variants/variant.js"
import { Parallax } from 'react-parallax';
import herobgrev from "../assets/about.png"
import styled from "styled-components";
import cat from '../assets/cat.png';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-around;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  margin-right:100px;
  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;
const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 500px;
  height: 700px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  border: none;
  border-radius: 5px;
  animation: animate 3.8s infinite ease alternate;
  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;
const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  
`;

const Desc = styled.p`
  font-size: 20px;
  font-weight:100;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const About = () => {
  const [ref, InView] = useInView({
    threshold:0.5,
  })
  return (
    <Parallax bgImage={herobgrev} strength={400}>
      <Section id='about'>
        <Container>
        <Right >
          <Img src={cat} title={"meow"} className="w-85 h-90 "/>
        </Right>
        <Left>
            <Title>   
           <div><span>About Me</span></div>
            </Title>
            <div className="desc bg-black p-5 rounded-lg">
              <Desc><pre>{
               `I'm a Computer Science Junior Student in JSSSTU, India. 
Always excited to Learn and work on new Technologies.
I have explored various aspects of Computer World such
as Web tech, UI/UX, Flutter, AI and collaborated for WEB,
UI/UX and Flutter projects.`
              }</pre></Desc>
            </div>
          </Left>
          </Container>
      </Section></Parallax>
  
  )
}

export default About