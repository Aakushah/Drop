import { Send } from '@material-ui/icons'
import React from 'react'

import {mobile} from '../responsive'



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
    width:40%;
    height: 40px;
    display: flex;

    justify-content:center;
    align-items:center;
    ${mobile({width:"70%"})}
   


`;

const Input=styled.input`
    border:none;
    height: 100%;
    flex:10;
  
    padding-left:20px;
    font-size:18px;
    

`;
const Button=styled.button`
    height: 100%;
    padding:10px;
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