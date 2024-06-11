import React, { useRef } from 'react'
import { FaCamera } from "react-icons/fa";
import Container from './Container';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP)

const HeroSection = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.from('.heading', {
      y: 100,
      delay: '100ms',
      time: 2
    });
  },
    {
      scope: container
    }
  )
  return (
    <section className='h-[640px] lg:h-[50vh] xl:h-[90vh] relative w-full' ref={container}>
      <img className='h-full w-full object-cover absolute left-0 right-0' src="https://demo-gutenify-com.s3.amazonaws.com/wp-content/uploads/sites/146/2023/11/19112428/New-Project.jpg" alt="" />
      <Container>
        <div className='absolute w-full md:w-[50%] mt-[50px]  md:mt-20  left-0 right-0 px-2 md:px-6'>
          <div className='text-[#f3f3f3] text-[35px] font-semibold capitalize heading'>
            Capture Your Memory
          </div>
          <div className='text-orange-500 mt-5 text-[50px] font-bold capitalize heading '>
            Moonlight Photography
          </div>
          <div className='text-[#f3f3f3] mt-5 text-lg font-semibold text-justify heading'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint dolorum cum rem quod eveniet perspiciatis cupiditate quam obcaecati et eaque lorem20 sjkfjlsdfk;l ksdjflskdfj;
          </div>
          <div className='mt-10 '>
            {/* <div>
              <button className='px-3 py-2 bg-trasparent  border-orange-500 border-2 border-solid text-orange-500 hover:bg-orange-500 hover:text-slate-800 transition-all delay-100 ease-linear '>Explore More</button>
            </div> */}
            <div className="flex gap-2 items-center heading">
              <div className="w-[50px] h-[50px] rounded-full border-2 border-solid border-orange-500 flex justify-center items-center">
                <div className="rounded-full ray">
                  <div className='bg-orange-500 w-[40px] h-[40px] rounded-full flex justify-center items-center'>
                    <FaCamera />
                  </div>
                </div>
              </div>
              <span className='text-orange-500 text-lg font-semibold'>Click your Day</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection