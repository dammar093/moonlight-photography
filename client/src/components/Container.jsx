import React from 'react'

const Container = ({ children }) => {
  return (
    <div className='px-2 max-w-7xl md:px-6 min-w-[300px] mx-auto py-1'>
      {children}
    </div>
  )
}

export default Container