import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'

const Home = () => {
  return (   
    <>
    <Announcement/>
    <Navbar/>
    <Slider/>
    <Categories/>
    </>
  )
}

export default Home