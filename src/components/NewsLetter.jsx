import { Send } from '@material-ui/icons'
import React from 'react'


import styled from 'styled-components'

const Container=styled.div`
    height: 60vh;
    background-color:#fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`;
const Title=styled.h1`
    font-size:70px;
    font-weight:300;

`;
const Description=styled.div`
    font-size: 25px;
    font-weight:300;
    margin-block:30px;
    text-align: center;

`;
const InputContainer=styled.div`
    width:50%;
    height: 40px;
    background-color: white;
    
    display: flex;
    justify-content: space-between;


`;

const Input=styled.input`
    border:none;
    flex:8;
    padding-left:20px;
    font-size:18px;

`;
const Button=styled.button`
    flex:1;
    border:none;
    background-color:teal;
    color:white;
    cursor:pointer;

`;

const NewsLetter = () => {
  return (
    
    <Container>
        <Title>Newletter</Title>
        <Description>Get timely updates about your favourite product</Description>
        <InputContainer>
            <Input placeholder='your email'/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>



    </Container>




  )
}

export default NewsLetter