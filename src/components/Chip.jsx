import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { animateWithGsap } from '../utils/Animations'

const Chip = () => {

    const videoRef = useRef();
    useGSAP(()=>{
        gsap.from('#chip',{
            scrollTrigger:{
                trigger:"#chip",
                start:"20% bottom",
            },
            opacity:0,
            scale:2,
            duration:2,
            ease:"power2.inOut"
        })
        animateWithGsap('.g_fadeIn',{
            opacity:1,
            y:0,
            duration:1,
            ease:"power2.inOut"
        })

    },[])
  return (
    <section className='common-padding'>
        <div className='screen-max-width'>
            <div id='chip' className='flex-center w-full my-20'>
                <img src={chipImg} width={180} height={180}/>
            </div>
            <div className='flex flex-col items-center'>
                    <h2 className='hiw-title'>
                        A17 Pro Chip. 
                        <br />
                        A Moster win for Gaming.
                    </h2>
                    <p className='hiw-subtitle'>
                        its Here, the Biggest redesign in history of Apple GPU's
                    </p>
            </div>
            <div className='mt-10 md:mt-20 mb-14 '>
                <div className='relative h-full flex-center '>
                    <div className='overflow-hidden'>
                        <img src={frameImg}
                        className='bg-transparent relative z-10'
                        />
                    </div>
                    <div className='hiw-video'>
                        <video 
                        className='pointer-events-none'
                        playsInline
                        autoPlay
                        loop 
                        muted preload='none'
                        ref={videoRef}
                        src={frameVideo} typeof='video/mp4'/>
                    </div>
                </div>
                <p className='text-gray font-semibold text-center mt-3'>Honkai : Star Rail</p>
                </div>
                <div className="hiw-text-container ">
                <div className="flex flex-1 justify-center flex-col">
                  <p className="hiw-text g_fadeIn">
                    iPhone 17 Pro is an entirely new class of iphone Chip that delivers out {' '}
                    <span className="text-white">
                      best graphic Performance byFar
                    </span>
                  </p>
                

         
                  <p className="hiw-text g_fadeIn">
                    Titanium has one of the best strength-to-weight ratios of any metal, making these our {' '}
                    <span className="text-white">
                      Games will look and feel so immersive
                    </span>
                    with incredibly detailed envirnoments  and Characters.
                  </p>
                  </div>
              <div className='flex-1 flex justify-center flex-col g_fadeIn'>
                <p className='hiw-text'>New </p>
                <p className='hiw-bigtext'>Pro Class GPU </p>
                <p className='hiw-text'>with 6 cores </p>
              </div>
            </div>
            </div>
       
    </section>
  )
}

export default Chip