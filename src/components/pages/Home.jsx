import React from 'react'
import Banner from '../layout/Banner'
import About from './About'
import Skills from '../layout/InfiniteLoopTry'
import ServicePart from '../layout/ServicePart'
import ContactMe from './ContactMe'
import Projects from './Projects'


const Home = () => {
  return (
    <>
    <Banner/>
    <About/>
    <ServicePart/>
    <Projects/>
    <ContactMe/>
    </>
  )
}

export default Home