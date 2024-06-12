import React, { useEffect } from 'react'
import AboutComponent from '../components/AboutComponent'

const About = () => {
  useEffect(() => {
    document.title = "Moonlight | About"
  }, [])
  return (
    <div className='mt-[80px] min-h-screen'>
      <AboutComponent />
    </div>
  )
}

export default About