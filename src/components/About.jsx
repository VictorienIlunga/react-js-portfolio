import React from 'react'
import aboutImg from "../assets/aboutme.jpg";
import{ ABOUT_TEXT} from "../constants";
// import {HERO_CONTENT} from "../constants";
import {motion} from "framer-motion"


const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1 
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration:1.5}}

            className='my-20 text-center text-4xl'>
            
            A propos
            <span className=' text-neutral-500'> de moi</span>
        </motion.h1>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 p-8'>
                <div className='flex items-center justify-center rounded-lg overflow-hidden'>
                    <motion.img 
                        whileInView={{opacity:1, x:0}}
                        initial={{opacity:0, x:-100}}
                        transition={{duration:0.5}}
                        src={aboutImg} alt='about'/>
                </div>
            </div>
            <div className='w-full lg:w-1/2 p-8'>
                <div className='flex justify-center lg:justify-start'>
                    <motion.p 
                        whileInView={{opacity:1, x:0}}
                          
                        initial={{x:100, opacity:0}}
                        transition={{duration:0.5}}
                        className="my-2 max-w-xl py-6 font-light tracking-tighter">
                        {ABOUT_TEXT} 
                    </motion.p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About