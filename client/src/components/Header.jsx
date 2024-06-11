import React, { useState } from 'react'
import Logo from './Logo'
import Container from './Container'
import { NavLink } from 'react-router-dom'
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const navLinks = [
  {
    id: 1,
    title: 'Home',
    to: '/'
  },
  {
    id: 2,
    title: 'Services',
    to: '/services'
  },
  {
    id: 3,
    title: 'Pricing',
    to: '/pricing'
  },
  {
    id: 4,
    title: 'Gallery',
    to: '/gallery'
  },
  {
    id: 5,
    title: 'About',
    to: '/about'
  },
]
const Header = () => {
  const [active, setActive] = useState(false)
  return (
    <header className='bg-[#000000] w-full h-[80px] relative'>
      <Container>
        <div className='flex justify-between items-center relative'>
          <div>
            <Logo />
          </div>
          <div className='relative'>
            <nav>
              <ul className='list-none hidden md:flex md:gap-10'>
                {
                  navLinks.map((link) => (
                    < li key={link.id}>
                      <NavLink to={link.to} className={({ isActive }) => isActive ? "text-orange-500 text-md font-semibold" : "text-white text-md font-semibold hover:text-orange-500"}>
                        <span>{link.title}</span>
                      </NavLink>
                    </li>
                  ))
                }
              </ul>
              <div className='text-white text-[30px] md:hidden'
                onClick={() => setActive(prev => !prev)}
              >
                {
                  !active ? <RiMenu3Fill className='transition-all delay-300' /> : <RxCross2 className='transition-all delay-300' />
                }
              </div>
            </nav>

          </div>

        </div>
      </Container>
      <nav className={`${active ? 'right-0' : '-right-[-100vw]'} absolute top-[70px]  w-full h-screen bg-black md:hidden transition-all delay-300`}>
        <ul className='flex items-center flex-col gap-8 mt-10'>
          {
            navLinks.map((link) => (
              < li key={link.id}>
                <NavLink to={link.to} className={({ isActive }) => isActive ? "text-orange-500 text-[30px] font-semibold" : "text-white text-[30px] font-semibold hover:text-orange-500"}
                  onClick={() => setActive(prev => !prev)}
                >
                  <span>{link.title}</span>
                </NavLink>
              </li>
            ))
          }
        </ul>
      </nav>
    </header >
  )
}

export default Header