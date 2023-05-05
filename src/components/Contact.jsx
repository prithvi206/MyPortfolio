import React, { useRef, useState } from 'react'
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { Parallax } from 'react-parallax';
import lapbg from "../assets/code.png";
import linkedIn from "../assets/socialMedia/LinkedIn.png";
import github from "../assets/github.png";
import instagram from "../assets/socialMedia/instagram.png";
import mail from "../assets/socialMedia/gmail.png";

const Section = styled.div`
height:100vh;;
scroll-snap-align:center;
flex:1;
flex-direction:row;
padding:50px;

justify-content:flex-end;

`;

const Container = styled.div`
flex:1;
flex-direction:row;
width:70%;
height:100%;
display:flex;
justify-content:flex-end;
gap:50px;
marign:50px;



`;

const Left = styled.div`
flex: 1;
display: flex;
align-items:center;
justify-content: start;
background-color:rbgq(0,0,0,1);
border-radius:15px;


margin:100px;
margin-left:600px;
flex-direction: column;
backdrop-filter:blur(20px);
`;

const Title = styled.h1`
  font-weight: 700;
  font-size:40px;
  padding:15px;
  padding-top:50px;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding:50px;
  padding-top:20px;
  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
  color:#000000;
`;

const TextArea = styled.textarea`
  padding: 20px;
  color:#000000;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

const Button = styled.button`
  background-color: #915EFF;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;
  align-items:center;
  padding-bottom:0px;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;



const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_ac6ipxa', 'template_9pwbx1c', ref.current,"loLtrX3bvE6cYy_Fd")
    .then(function(response) {
       setSuccess(true)
    }, function(error) {
      setSuccess(false);
    });
  }



  return (
    <Parallax  bgImage={ lapbg} strength={600}>
      <section id='contact'>
        <Container >
         
          <Left>
            <Title>Let's Connect</Title>
            <div className='bg-black rounded-lg p-7 items-center flex flex-col'>
            <div className='p-0.5 font-semibold'>Reach Me On</div>
              <div><span><img  src={mail} className="social-icon w-7 h-7 m-1 p-1"/></span>prithviraj2062002@gmail.com </div>
              <div className="social-icon p-2 sm:flex flex-row gap-5">
            <a href="https://www.linkedin.com/in/prithvi-raj-959a95201/" target={"_blank"}><img src={linkedIn} alt="linkedIn" className="w-7 h-7"/></a>
            <a href="https://www.github.com/prithvi206" target={"_blank"}><img src={github} alt="github" className="w-7 h-7" /></a>
            <a href="https://www.instagram.com/prithvi.raj.20/" target={"_blank"}><img src={instagram} alt="instagram" className="w-7 h-7s" /></a>
          </div>
            </div>
          
            <Right >
            
        <Form ref={ref} onSubmit={handleSubmit}>
        <div className='p-0.5 font-bold'>For any Queries:</div>
          <Input placeholder='Name' name='name' required/>
          <Input placeholder='Email' name="email" required type="email"/>
          <TextArea placeholder='Write your message'
            name='message'
            rows={2}
            required
          />
          <Button type="submit">Send</Button>
          {success && "Your message has been sent!."}
      </Form>
          </Right>
          
          </Left>
        

   
    </Container>
  </section></Parallax>
   
  )
}

export default Contact
