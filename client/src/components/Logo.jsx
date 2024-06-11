import React from 'react'
import logo from '/logo.png'
import { Link } from 'react-router-dom'
const Logo = () => {
  return (
    <Link to={"/"}>
      <div className='w-[100px] h-[70px]'>
        <img className='w-full h-full object-cover' src={logo} alt="logo" />
      </div>
    </Link>
  )
}

export default Logo