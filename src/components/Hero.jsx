import React, { useEffect, useState } from 'react'
import gsap  from 'gsap'
import { useGSAP } from '@gsap/react'

import { heroVideo , smallHeroVideo  } from "../utils"
const Hero = () => {
  useGSAP(()=>{
    gsap.to("#Hero",{ opacity: 1 , delay: 1.5 })
    gsap.to("#cta",{ opacity: 1 , y: -50 , delay:1.5 })
  },[])

  const [VideoSrc,setVideoSrc] = useState(
    window.innerWidth<760 ? smallHeroVideo : heroVideo)
    const handleVideo = () =>{
      if(window.innerWidth < 760 ){
        setVideoSrc(smallHeroVideo)
      }else{
        setVideoSrc(heroVideo)
      }
    }
    useEffect(()=>{
      window.addEventListener('resize',handleVideo)
      return ()=>{
        window.removeEventListener('resize',handleVideo)
      }
    },[])
  return (
    <section className='w-full nav-height bg-black relative'>
      <div className='h-5/6 w-full flex-center flex-col'>
      <p  id='Hero' className='hero-title'>iPhone 15 Pro</p>
      <div className='md:w-10/12 w-9/12'>
        <video autoPlay muted playsInline={true} key={VideoSrc}>
          <source src={VideoSrc} type='video/mp4'/>
        </video>
      </div>
      </div>
      <div id='cta'
      className='flex flex-col items-center opacity-0 translate-y-20'
      >
        <a href="#highlights" className='btn' >buy</a>
        <p className='font-normal text-xl '>From $199/month or $999</p>
      </div>
    </section>
  )
}

export default Hero