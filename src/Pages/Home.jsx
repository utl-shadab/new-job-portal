import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Categories from '../components/Categories/Categories'
import WorkingProcess from "../components/Working/WorkingProcess"
import Features from '../components/Features/Features'
import Recruiters from '../components/Recruiter/Recruiters'
import LogoSlider from '../components/LogoSlider/LogoSlider'
import Action from '../components/Action/Action'
import BlogSlider from '../components/Blog/BlogSlider'
import Testimonial from '../components/Testimonial/Testimonial'
import Footer from '../components/Footer/Footer'
const Home = () => {
  return (
    <div>
       <Navbar />
      <Hero />
      <Categories />
      <WorkingProcess />
      <Features />
      <Recruiters/>
      <LogoSlider/>
      <Action/>
      <BlogSlider/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default Home
