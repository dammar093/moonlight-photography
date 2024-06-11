import React, { useEffect } from 'react'
import HeroSection from '../components/HeroSection'
import WelcomeComponen from '../components/WelcomeComponen'
import ServiceComponent from '../components/ServiceComponent'
import Tool from '../components/Tool'
import GalleryComponent from '../components/GalleryComponent'
import PricingComponent from '../components/PricingComponent'

const Home = () => {
  useEffect(() => {
    document.title = "Moonlight Photography"
  }, [])
  return (
    <div className='mt-[70px] '>
      <HeroSection />
      <WelcomeComponen />
      <ServiceComponent />
      <Tool />
      <PricingComponent />
      <GalleryComponent isAll={true} />
    </div>
  )
}

export default Home