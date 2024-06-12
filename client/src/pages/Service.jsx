import React, { useEffect } from 'react'
import ServiceComponent from '../components/ServiceComponent'

export const Service = () => {
  useEffect(() => {
    document.title = "Moonlight | Service"
  }, [])
  return (
    <div className='mt-[80px] min-h-screen'>
      <ServiceComponent />
    </div>
  )
}
