import React, { useRef } from 'react'
import Container from './Container'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger);
const tools = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtZXJhfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRyb25lfGVufDB8fDB8fHww"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1606914507253-f7f7a0783147?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2ltYmxlfGVufDB8fDB8fHww"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBjfGVufDB8fDB8fHww"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1612548403247-aa2873e9422d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlkZW8lMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1551781069-73a1da89e333?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJpbnRlcnxlbnwwfHwwfHx8MA%3D%3D"
  }
]
const Tool = () => {
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
              <h2 className='capitalize text-[#f3f3f3] font-bold text-[25px] text-center md:text-[30px]'>Our Tools</h2>
              <div className='h-1 w-[100px] rounded bg-orange-500 mx-auto'></div>
            </div>
            <div className='grid grid-cols-1 gap-3 md:grid-cols-3 items-center w-full place-content-center place-items-center' ref={scrollRef}>
              {
                tools.map((tool) => (
                  <div key={tool.id}>
                    <div className='h-[250px] w-full md:w-[31vw]  bg-[#f3f3f3] rounded service hover:opacity-[0.7] transition-all ease-linear delay-100' >
                      <img className="w-full h-full  aspect-video" src={tool.image} alt="" />
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

export default Tool