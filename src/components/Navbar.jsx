import {Search,ShoppingCartOutlined} from '@material-ui/icons'
import {Badge} from '@material-ui/core';

import React from 'react'

import styled from 'styled-components';

const Container = styled.div`

    height: 60px;

    overflow:hidden;

`;

const Wrapper =styled.div`
    padding:10px 20px;
    display: flex;
    /* background-color: yellow; */
    align-items: center;
    justify-content: space-between;

`;

const Language =styled.span`
    font-size: 14px;
    cursor: pointer;
`;

const SearchContainer =styled.div`

    border:1px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left:25px;
    padding:5px;
`;

const Input=styled.input`
      border:none;
`;
const Logo =styled.h1`
  font-weight:bold;
`

const Left=styled.div`
  flex:1;
  display: flex;
  align-items: center;
`;
const Center=styled.div`
  flex:1;
  text-align: center;
`;
const Right=styled.div`
  flex:1;
  display: flex;
  align-items: center;
  justify-content:flex-end;
`;

const MenuItem=styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  
  

`




const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input/>
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