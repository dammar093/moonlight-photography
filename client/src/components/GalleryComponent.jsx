import React, { useRef } from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger);
const galleries = [
  {
    id: 1,
    image: "https://media.istockphoto.com/id/1127706701/photo/hindi-wedding-ceremony.webp?b=1&s=170667a&w=0&k=20&c=WY7FE3-F12A96XM2SyaRQCoE_anfmpRHslzVRWswHUw=",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 3,
    image: "https://media.istockphoto.com/id/1479789881/photo/boy-blowing-birthday-candles-on-a-birtday-party.webp?b=1&s=170667a&w=0&k=20&c=bh2H6eKmXMgrr86cXPsZszDifEYA-YWDNG_vFMAO_4Y="
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFycmlhZ2V8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1517456215183-9a2c3a748d0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hcnJpYWdlfGVufDB8fDB8fHww"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1564622598035-61122bd729ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRvdXJ8ZW58MHx8MHx8fDA%3D"
  }
]
const GalleryComponent = ({ isAll }) => {
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
              <h2 className='capitalize text-[#f3f3f3] font-bold text-[25px] text-center md:text-[30px]'>Our Gallery</h2>
              <div className='h-1 w-[100px] rounded bg-orange-500 mx-auto'></div>
            </div>
            <div className='grid grid-cols-1 gap-3 md:grid-cols-3 items-center w-full place-content-center place-items-center' ref={scrollRef}>
              {
                galleries.map((gallery) => (
                  <div className='h-[300px] w-full md:w-[31vw]  ' key={gallery.id} >
                    <div className='w-full h-full bg-[#f3f3f3] rounded service hover:opacity-[0.7] transition-all ease-linear delay-100' >
                      <img className="w-full h-full object-cover" src={gallery.image} alt="" />
                    </div>
                  </div>
                ))
              }
            </div>
            {
              isAll ? <div className='text-orange-500 float-right my-4'>
                <Link to={"/gallery"} className='flex gap-2 items-center'>View all gallery <FaArrowRight /></Link>
              </div> : ""
            }
          </div>
        </div>
      </Container>
    </section>
  )
}

export default GalleryComponent