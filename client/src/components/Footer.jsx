import React from 'react'
import Container from './Container'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaMailBulk, FaMailchimp, FaPhone, FaYoutube } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <section className='w-full mt-[70px]'>
      <footer className='bg-slate-800'>
        <Container>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-3 py-4 w-full'>
            <div className='text-[#f2f2f2] w-full md:w-[23vw] p-2'>
              <div>
                <Logo />
                <h2 className='font-bold'>Moonlight Photography</h2>
              </div>
              <div className='flex mt-2 gap-2'>
                <Link>
                  <div className='w-[40px] h-[40px] rounded-full bg-orange-500 flex items-center justify-center text-2xl hover:bg-orange-600'>
                    <FaFacebook />
                  </div>
                </Link>
                <Link>
                  <div className='w-[40px] h-[40px] rounded-full bg-orange-500 flex items-center justify-center text-2xl hover:bg-orange-600'>
                    <FaInstagram />
                  </div>
                </Link>
                <Link>
                  <div className='w-[40px] h-[40px] rounded-full bg-orange-500 flex items-center justify-center text-2xl hover:bg-orange-600'>
                    <FaYoutube />
                  </div>
                </Link>
                <Link to={"tel:+977-9809498493"}>
                  <div className='w-[40px] h-[40px] rounded-full bg-orange-500 flex items-center justify-center text-2xl hover:bg-orange-600'>
                    <FaPhone />
                  </div>
                </Link>
              </div>

            </div>
            <div className=' text-[#f2f2f2] w-full md:w-[23vw] p-2'>
              <h2 className='font-bold text-lg'>Quick Links</h2>
              <ul className='my-4'>
                <li><Link className='hover:text-orange-500' to={'/gallery'}>Gallery</Link></li>
                <li><Link className='hover:text-orange-500' to={'/service'}>Service</Link></li>
                <li><Link className='hover:text-orange-500' to={'/pricing'}>Pricing</Link></li>
                <li><Link className='hover:text-orange-500' to={'/about'}>About Us</Link></li>
              </ul>

            </div>
            <div className='text-[#f2f2f2] w-full md:w-[23vw] p-2'>
              <h2 className='font-bold text-lg'>Services</h2>
              <ul className='my-4'>
                <li>Photography</li>
                <li>VideoGraphy</li>
                <li>Printing</li>
                <li>Photo Framing</li>
              </ul>
            </div>
            <div className='bg-white w-full md:w-[23vw]'>
              <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111988.81601512968!2d80.26001360584533!3d28.700099672088786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a1b8a93b193b91%3A0x6880e5ddda5c740f!2sBelauri!5e0!3m2!1sen!2snp!4v1718102331041!5m2!1sen!2snp" loading="lazy" ></iframe>
            </div>
          </div>
        </Container>
        <div className='text-center py-2 text-white border-t text-[12px] md:text-md'>
          Copyright &copy; {new Date().getFullYear()} All-right reserved by Moonlight Photography powered by <Link className='text-blue-600' to={'https://www.facebook.com/dammarrana093'}>Dammar Singh Rana</Link>
        </div>
      </footer>
    </section>
  )
}

export default Footer