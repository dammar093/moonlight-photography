import React, { useRef } from 'react'
import Container from './Container'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger);
const WelcomeComponen = () => {

  const container = useRef(null)
  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(container.current.children);
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
    { scope: container }
  );
  return (
    <div className='bg-black w-full my-4'>
      <Container>
        <div className='w-full flex justify-between flex-wrap' ref={container}>
          <div className='w-full md:w-1/2 md:p-4'>
            <img className='w-full h-[300px] md:h-[400px] object-cover' src="https://images.unsplash.com/photo-1598447967780-d4659a36ebd3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBob3RvZ3JhcGh5JTIwY2FtZXJhfGVufDB8fDB8fHww" alt="" />
          </div>
          <div className='w-full md:w-1/2 md:p-4'>
            <div className='my-4'>
              <h2 className='capitalize text-[#f3f3f3] font-bold text-[25px] text-center md:text-[30px]'>Welcome to Moonlight Photography</h2>
              <div className='h-1 w-1/2 rounded bg-orange-500 mx-auto'></div>
            </div>
            <div>
              <p className='text-white text-lg text-justify'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae deleniti et illum temporibus aliquam suscipit. Sapiente at error dolore culpa quisquam quidem tempora veniam asperiores tempore porro quo eos vero esse, ab dolor placeat doloribus omnis, nisi voluptas. Impedit consequatur sequi, recusandae corrupti harum ad expedita. Ex rem nulla quis possimus exercitationem? Nemo adipisci a voluptates commodi sunt deserunt rem tempore ut fugiat minus beatae similique quo, natus accusantium ducimus harum eius alias architecto qui autem exercitationem? Vel nisi earum expedita cupiditate aliquid voluptatem. Pariatur eos dolorum ab amet nobis quasi rem, debitis doloremque natus, numquam, commodi dignissimos sunt nemo.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default WelcomeComponen