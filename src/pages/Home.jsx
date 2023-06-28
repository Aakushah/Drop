import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Home = () => {
  return (   
    <>
    <Announcement/>
    <Navbar/>
    <Slider/>
    <Categories/>
    <Products/>
    <NewsLetter/>
    <Footer/>
    </>
  )
}

export default Home