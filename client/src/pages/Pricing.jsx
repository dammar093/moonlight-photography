import React, { useEffect } from 'react'
import PricingComponent from '../components/PricingComponent'

const Pricing = () => {
  useEffect(() => {
    document.title = "Moonlight | Pricing"
  }, [])
  return (
    <div className='mt-[80px]'>
      <PricingComponent />
    </div>
  )
}

export default Pricing