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
        width:40%;
        background-color: white;
        

`
const Title=styled.h1`
    text-align: center;
    font-size: 24px;
    font-size: 300;


`
const Form=styled.form`
    display: flex;
    flex-wrap: wrap;


    
    

`
const Input=styled.input`
    margin:20px 10px 0 0;
    padding:10px; 
    flex:1;
    min-width:40%;
    

`
const Agreement=styled.span`
    font-size: 12px;
    margin:20px 0px;

`
const Button=styled.button`
  padding:15px 20px;
  border:none;
  width:40%;
  background-color:teal;
  color:white;
  cursor: pointer;

`





const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="name"/>
                <Input placeholder="last name"/>
                <Input placeholder="username"/>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>
                <Agreement>
                    By creating an account,I  consent to the processing of my 
                    personal data in accordance with the
                      <b>PRIVACY POLICY</b>
                </Agreement>

                <Button>Create</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register;