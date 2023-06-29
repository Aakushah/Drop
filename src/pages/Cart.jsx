import React from 'react'

import styled from 'styled-components'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Announcement from '../components/Announcement'



const Container=styled.div`
    /* display:flex; */
    


`
const Wrapper=styled.div`
    padding:20px;


`
const Title=styled.h1`
font-weight: 300;
text-align: center;


`
const Top=styled.div`

display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;



`

const TopButton =styled.button`
    padding:10px;
    font-weight: 600;
    border:${ props => props.type === "filled" && "none"};
    background-color:${props=>props.type === "filled" ? "black" : "none"};
    color:${props=>props.type === "filled" && "white"};



`    

const TopTexts =styled.div``
const TopText =styled.span`
    text-decoration:underline;
    cursor: pointer;
    margin:0 10px;


`

const Bottom =styled.div`
    display: flex;
    justify-content: center;


`
const Info =styled.div`

flex:3;

`


const Product=styled.div`

`
const ProductDetail=styled.div`

`
const Image=styled.img`

`
const Details=styled.div`

`

const ProductName=styled.span`

`
const ProductId=styled.span`
`
const ProductColor=styled.span`
`
const ProductSize=styled.div`
`
const PriceDetail=styled.div`
`

const Summary =styled.div`

flex:1;
background-color: red;

`



const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>



            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                            <Details>
                                <ProductName><b>Proudct:</b>JESSIE THUNDER SHOES</ProductName>
                                <ProductId><b>ID:</b>1AFA4442KF</ProductId>
                                <ProductColor />
                                <ProductSize><b>Size:</b>9</ProductSize>
                            </Details>
                        </ProductDetail>

                        <PriceDetail>
                            price
                        </PriceDetail>


                    </Product>



                </Info>
                <Summary>summary</Summary>




            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart