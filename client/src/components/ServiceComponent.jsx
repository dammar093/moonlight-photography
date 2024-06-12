import React, { useRef } from 'react'
import Container from './Container'
import { FaCamera, FaVideo } from "react-icons/fa";
import { IoIosPrint } from "react-icons/io";
import { GiWoodFrame } from "react-icons/gi";
import { DiPhotoshop } from "react-icons/di";
import { MdVideoSettings } from "react-icons/md";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: "Photography",
    icon: FaCamera,
    desc: "click high quality photo"
  },
  {
    id: 2,
    title: "Videography",
    icon: FaVideo,
    desc: "record high quality video"
  },
  {
    id: 3,
    title: "Printing",
    icon: IoIosPrint,
    desc: "print photo and document"
  },
  {
    id: 4,
    title: "Framming",
    icon: GiWoodFrame,
    desc: "framing any size of photo"
  },
  {
    id: 5,
    title: "Photo Editing",
    icon: DiPhotoshop,
    desc: "edit photo as you want"
  },
  {
    id: 6,
    title: "Video Editing",
    icon: MdVideoSettings,
    desc: "editing video in high quality"
  }
]


const ServiceComponent = () => {
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
          delay: index * 0.05,
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
              <h2 className='capitalize text-[#f3f3f3] font-bold text-[25px] text-center md:text-[30px]'>Our Services</h2>
              <div className='h-1 w-[100px] rounded bg-orange-500 mx-auto'></div>
            </div>
            <div className='grid grid-cols-1 gap-3 md:grid-cols-3 items-center w-full place-content-center place-items-center' ref={scrollRef}>
              {
                services.map((service) => (
                  <div key={service.id}>
                    <div className='h-[200px] w-full md:w-[31vw]  bg-[#f3f3f3] rounded service hover:bg-orange-400 transition-all ease-linear delay-100' >
                      <div className='text-[60px] text-slate-800 text-center p-4 my-2 w-full flex justify-center capitalize'>
                        {
                          <service.icon />
                        }
                      </div>
                      <div className='text-center text-2xl font-semibold capitalize'>
                        {
                          service.title
                        }
                      </div>
                      <div className='text-slate-800 text-lg capitalize text-center  font-semibold'>
                        {
                          service.desc
                        }
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ServiceComponent