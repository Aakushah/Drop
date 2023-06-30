import React from 'react'

import {Facebook,Instagram,Twitter,Pinterest,Room,Email,Phone} from '@material-ui/icons'

import styled from 'styled-components'
import {mobile} from '../responsive'


const Container=styled.div`
    display: flex;

    ${mobile({flexDirection:"column" ,wrap:"wrap"})}




`;
const Left=styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    ${mobile({justifyContent:"center",alignItems:"center"})}
`;
const Center=styled.div`
    flex:1;
    padding:20px
`;


const Title=styled.h3`
    
    margin-bottom: 30px;
    
    ${mobile({textAlign:"center",fontSize:"25px",textDecoration:"underline"})}


`;
const List=styled.ul`
    margin: 0;
    padding: 0;
    list-style:none;
    display: flex;
    flex-wrap:wrap;


    ${mobile({textAlign:"center"})}

`;
const ListItem=styled.li`

    width: 50%;
    /* border:2px solid red; */
    margin-bottom:10px




`;


const Right=styled.div`
    flex:1;
    padding:20px

`;



const ContactItem=styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;


    


`;

const Payment=styled.img`
    width: 50%;
    ${mobile({width:"75%"})}

`;


const Logo =styled.h1``;
const Description =styled.p`
    margin:20px 0px;
    ${mobile({textAlign:"center"})}
    
`;
const SocialContainer =styled.div`
    display: flex;
    column-gap:5px;
  

`;
const SocialIcons =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width:40px;
    height: 40px;
    border-radius: 50%;
    color:white;
    background-color: #${props => props.color};
    



`;


const Footer = () => {
  return (
    <Container>


        <Left>
            <Logo>Shipmate.</Logo>
            <Description>
                There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don’t look even slightly believable.

            </Description>
            <SocialContainer>
                <SocialIcons color="3B5999">
                    <Facebook/>
                </SocialIcons>
                <SocialIcons color="E4405f">
                    <Twitter/>
                </SocialIcons>
                <SocialIcons color="55ACEE ">
                    <Instagram/>
                </SocialIcons>
                <SocialIcons color="E60023 ">
                    <Pinterest/>

                </SocialIcons>


            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accesories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>terms</ListItem>
            </List>
        
        
        </Center>
        <Right>

            <Title>contact</Title>
            <ContactItem>
            <Room style={{marginRight:'10px'}}/>
            Azad Bhwan c vadodara,Gujarat,india.
            
            
            </ContactItem>
            <ContactItem>
            <Phone style={{marginRight:'10px'}}/>
            +78702 428908
            
            </ContactItem>
            <ContactItem>
            <Email style={{marginRight:'10px'}}/>
                ashokpoudel321@gmail.com
            
            </ContactItem>
            
            
            

            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"  />      
            
        </Right>


    </Container>
    
  )
}

export default Footer