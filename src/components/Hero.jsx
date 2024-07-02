
import {HERO_CONTENT} from "../constants";
import profilpic from "../assets/vprofile.png";
import { motion } from "framer-motion";

const container = (delay) =>({
    hidden: {x:-100, opacity: 0},
    visible: {
        x:0,
        opacity:1,
        transition: {duration:0.5, delay:delay}
    }
})

const Hero = () => {
  return (
    <div className="border-b  border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap items-center ">
            <div className="w-full lg:w-1/2 p-8 ">
                <motion.div  
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration:1.5}}
                    className="flex flex-col items-center md:items-start">
                    <motion.h1 
                        variants={container(0)}
                        initial="hidden" 
                        animate="visible"
                        className="pb-16  text-6xl font-thin tracking-tight lg:mt-16 mt-4 lg:text-8xl">Victorien I.</motion.h1>
                    <motion.span
                        variants={container(0.5)}
                        initial="hidden" 
                        animate="visible"
                        className="bg-gradient-to-r from-emerald-300 via-slate-500 to-emerald-500 bg-clip-text text-4xl text-transparent ">Full stack Developper</motion.span>
                    <motion.p 
                        variants={container(1)}
                        initial="hidden" 
                        animate="visible"
                        className="my-2 max-w-xl py-6 font-light tracking-tighter">
                        {HERO_CONTENT}
                    </motion.p>
                </motion.div>
            </div>
            <div className="w-full lg:w-1/2 0   overflow-hidden  ">
                <div className='flex items-center justify-center'>
                    <motion.img
                        initial={{x:100, opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration:0.5, delay:2}}
                        className="md:border-b-2   border-emerald-400"  src={profilpic} alt="Victorien Ilunga" />

                </div>
               
            </div>

        </div>
    </div>
  )
}

export default Hero