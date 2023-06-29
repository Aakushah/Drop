import React from 'react'

import styled from 'styled-components'


const Container=styled.div`
    width:100vw;
    height: 100vh;
    border:2px solid red;
    background:  linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;


`
const Wrapper=styled.div`
        display:flex;
        flex-direction: column;
        padding:20px;
        width:25%;
        background-color: white;
        

`
const Title=styled.h1`
    font-size: 24px;
    font-size: 300;


`
const Form=styled.form`
    display: flex;
    flex-direction: column;
    
    

`
const Input=styled.input`
    margin:10px 0 ;
    padding:10px; 
    min-width:80%;
    

`

const Button=styled.button`
  padding:15px 20px;
  border:none;
  width:40%;
  background-color:teal;
  color:white;
  cursor: pointer;

`

const Link=styled.a`
    margin:5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor:pointer;


`






const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username"/>

                <Input placeholder="password"/>
                <Button>Login</Button>
                <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>

    </Container> 
 )
}

export default Login;