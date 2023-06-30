
import { ArrowLeftOutlined,ArrowRightOutlined } from '@material-ui/icons';
import { useState } from 'react';
import styled from 'styled-components';
import {sliderItems} from '../data.jsx'
import {mobile} from '../responsive'

const Container=styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
 
    position: relative;
    overflow: hidden;
    justify-content: space-between;
    align-items:center;

    ${mobile({display:"none"})}



`;

const Arrow =styled.div`

    width: 50px;
    height: 50px;
    background-color: #eee8e8;
    border-radius: 50%;
    display: flex;
    justify-content:center;
    align-items: center;

    position: absolute;
    top:0;
    bottom: 0;
    margin:auto;
    cursor: pointer;
    z-index: 2;

    left:${props => props.direction === "left" && "10px"};
    right:${props => props.direction === "right" && "10px"};
    opacity:0.5; 
    

`;

const Wrapper=styled.div`
    height: 100%;
    display: flex;
    transition: all 0.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`;

const Slide=styled.div`
   
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    padding: 2px;
    background-color:#${props => props.bg};
    transform: translateX(00vw);
    
    

`;

const ImgContainer=styled.div`

   
    height: 100%;
    flex: 1;


`;

const Image=styled.img`
    height: 80%;
    margin-top:100px;

    


`

const InfoContainer=styled.div`
    flex: 1;
    padding: 50px;

`;

const Title=styled.h1`
    font-size:70px;


`
const Desc=styled.p`
    margin:50px 0px;
    font-size :20px;
    font-weight: 500;
    letter-spacing:3px;

`
const Button=styled.button`

    padding:10px;
    font-size: 20px;
    background-color: transparent;
    cursor:pointer;




`



const Slider = () => {
    const [slideIndex,setSlideIndex]=useState(0);


    const handleClick = (direction)=>{

        if(direction === 'left')
        {
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
        }
        else
        {
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0 );
        }
       

    }


  return (
    
        <Container>

            <Arrow direction='left' onClick={()=>handleClick('left')}>
                <ArrowLeftOutlined/>
            </Arrow>

            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item)=>(
                    <Slide bg={item.bg} key={item.key}>
                        <ImgContainer>
                            <Image src={item.img}/>
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>SHOW NOW</Button>
                        </InfoContainer>
                    </Slide>

                ))}

                


            </Wrapper>

            <Arrow direction='right' onClick={()=>handleClick('right')}>
                <ArrowRightOutlined/>
            </Arrow>


        </Container>



  )
}

export default Slider;