import React from 'react'

import styled from 'styled-components';

const Container=styled.div`
    height: 40px;
    background-color: teal;
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
    text-align:center;
`

const Announcement = () => {
  return (
    <Container>
       Shop now and save big! Enjoy free delivery on all orders over $50. Don't miss out on this amazing deal!"
    </Container>
  )
}

export default Announcement