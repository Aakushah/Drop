import {Search,ShoppingCartOutlined} from '@material-ui/icons'
import {Badge} from '@material-ui/core';

import {mobile} from '../responsive'

import React from 'react'

import styled from 'styled-components';

console.log(mobile);

const Container = styled.div`

    height: 60px;
    overflow:hidden;

    ${mobile({height:"50px"})}
    
`;

const Wrapper =styled.div`
    padding:10px 20px;
    display: flex;
    /* background-color: yellow; */
    align-items: center;
    justify-content: space-between;
    ${mobile({padding:"10px 0px"})}


`;

const Language =styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display:"none"})}

`;

const SearchContainer =styled.div`

    border:1px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left:25px;
    padding:5px;
    ${mobile({marginLeft:"5px"})}


`;

const Input=styled.input`
      border:none;
      ${mobile({width:"50px",paddingLeft:"0px"})}

`;
const Logo =styled.h1`
  font-weight:bold;
  ${mobile({fontSize:"20px"})}
`

const Left=styled.div`
  flex:1;
  display: flex;
  align-items: center;
`;
const Center=styled.div`
  flex:1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Right=styled.div`
  flex:1;
  display: flex;
  align-items: center;
  justify-content:flex-end;

  ${mobile({justifyContent:"center",flex:2})}

`;

const MenuItem=styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({fontSize:"12px",marginLeft:"10px"})}

  
  

`




const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="search"/>
            <Search style={{fontSize:16, color:"gray"}}/>
          
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Shipmate.</Logo>
        </Center>
        <Right>

          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGNIN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
             <ShoppingCartOutlined/>
            </Badge>
          </MenuItem>

        </Right>
      </Wrapper>
    </Container>

  )
}

export default Navbar