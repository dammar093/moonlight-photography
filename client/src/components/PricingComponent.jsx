import React, { useRef } from 'react'
import Container from './Container'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger);
const prices = [
  {
    id: 1,
    title: 'normal Photoshoot',
    services: ['Photoshooting', 'Editing', 'Transfer Photo Hand within day', 'Normal video recording'],
    price: 2000,
    duration: '4-5 hours',
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae deleniti et illum temporibus aliquam suscipit. Sapiente at"
  },
  {
    id: 2,
    title: 'Brithday Photoshoot',
    services: ['Photoshooting', 'Editing', 'Transfer Photo Hand within day', 'video recording'],
    price: 3000,
    duration: '4-5 hours',
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae deleniti et illum temporibus aliquam suscipit. Sapiente at  "

  },
  {
    id: 3,
    title: 'marriage videography and photoshoot',
    services: ['Videoshooting', 'Photoshooting', 'Editing photos and videos'],
    price: 40000,
    duration: '2 days',
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae deleniti et illum temporibus aliquam suscipit. Sapiente at"

  }
]
const PricingComponent = () => {
  const containerRef = useRef(null)
  const scrollRef = useRef(null)
  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(containerRef.current.children);
      boxes.forEach((box, index) => {
        gsap.from(box, {
          y: 150,
          opacity: 0,
          stagger: 0.2,
          delay: index * 0.06,
          scrollTrigger: {
            trigger: box,
            start: "-50 70%",
            end: "top 20%",
          },
          ease: "power1.inOut",

        });

      });
    },
    { scope: containerRef }
  );
  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(scrollRef.current.children);
      boxes.forEach((box, index) => {
        gsap.from(box, {
          y: 150,
          opacity: 0,
          stagger: 0.2,
          delay: index * 0.06,
          scrollTrigger: {
            trigger: box,
            start: "-50 70%",
            end: "top 20%",
          },
          ease: "power1.inOut",

        });

      });
    },
    { scope: scrollRef }
  );
  return (
    <section>
      <Container>
        <div className='w-full my-4' id='service'>
          <div>
            <div className='my-8' ref={containerRef}>
              <h2 className='capitalize text-[#f3f3f3] font-bold text-[25px] text-center md:text-[30px]'>our Pricing</h2>
              <div className='h-1 w-[100px] rounded bg-orange-500 mx-auto'></div>
            </div>
            <div className='grid grid-cols-1 gap-3 md:grid-cols-3 items-center w-full place-content-center place-items-center' ref={scrollRef}>
              {
                prices.map((price) => (
                  <div key={price.id} >
                    <div className='w-full md:w-[31vw]  bg-[#f4f4f3] rounded p-8' >
                      <div className='my-3 text-3xl text-center font-extrabold text-slate-800'>
                        NRP.{price.price}/{price.duration}
                      </div>
                      <div className='capitalize text-2xl font-bold text-slate-800'>
                        {
                          price.title
                        }
                      </div>
                      <div className='text-lg text-justify my-2 font-semibold text-slate-800'>
                        {
                          price.desc
                        }
                      </div>
                      <div className='px-4'>
                        <ul className='text-lg font-semibold list-disc text-slate-800'>
                          {
                            price.services.map(service => (
                              <li key={service}>{service}</li>
                            ))
                          }
                        </ul>
                      </div>
                      <div className='w-1/2 mx-auto mt-4'>
                        <button className='text-orange-500 border-2 border-solid border-orange-500 hover:bg-orange-500 hover:text-slate-800 px-6 py-2 font-semibold transition-all ease-linear delay-100'>Book Now</button>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </Container>
    </section >
  )
}

export default PricingComponent