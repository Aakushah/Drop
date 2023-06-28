import React from 'react'

import styled from 'styled-components';

const Container=styled.div`
  flex:1 ;
  margin:3px;
  height: 70vh;
  position:relative;


`;
const Image=styled.img`
  width: 100%;
  height: 100%;;
  object-fit: cover; 

`;
const Info=styled.div`
    position:absolute;
    top:0px;
    left:0px;
    width: 100%;;
    height: 100%;
    
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

`;
const Title=styled.h1`
  flood-color: white;
  margin-bottom: 20px;

`;
const Button=styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;




const CategoriesItem = ({item}) => {
  return (
        <Container>
          
          <Image src={item.img}/>
          <Info>

            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>

          </Info>
        
        </Container>  
        )
}

export default CategoriesItem