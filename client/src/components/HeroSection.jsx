import React, { useRef } from 'react'
import { FaCamera } from "react-icons/fa";
import Container from './Container';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import hero from '/hero.jpg'
gsap.registerPlugin(useGSAP)

const HeroSection = () => {
  const containerRef = useRef();

  useGSAP(() => {
    const items = gsap.utils.toArray(containerRef.current.children);
    items.forEach((item, index) => {
      gsap.from(item, {
        y: 150,
        opacity: 0,
        stagger: 0.2,
        delay: index * 0.06,
        ease: "power1.inOut",
      });
    });
  },
    {
      scope: containerRef
    }
  )
  return (
    <section className='w-full' >
      <div className='h-[640px] lg:h-[50vh]  xl:h-[100vh] relative w-full'>
        <img className='h-full w-full  object-cover absolute top-0 left-0 right-0' src={hero} alt="" />
        <Container>
          <div className='absolute w-full md:w-[50%] mt-[50px]  md:mt-20  left-0 right-0 px-2 md:px-6' ref={containerRef}>
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
      </div>
    </section>
  )
}

export default HeroSection