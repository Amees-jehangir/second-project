import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import LogisticInfo from './LogisticInfo'
import ServicesInfo from './ServicesInfo'
import Stats from './Stats'
import WhoWeAre from './WhoWeAre'
import Testimonial from './WordsofCustomer'
import Partners from './Partners'
import Footer from './Footer'

export default function LandingPage() {
  return (
    <>
        <Header/>
         <Navbar/> 
        <HeroSection/>
        <LogisticInfo/>
        <ServicesInfo/>
        <Stats/>
        <WhoWeAre/>
        <Testimonial/>
        <Partners/> 
        <Footer/> 
    </>
  )
}
