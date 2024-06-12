import React, { useEffect } from 'react'
import GalleryComponent from '../components/GalleryComponent'

const Gallery = () => {
  useEffect(() => {
    document.title = "Moonlight | Gallery"
  }, [])
  return (
    <div className='mt-[80px] min-h-screen'>
      <GalleryComponent isAll={false} />
    </div>
  )
}

export default Gallery