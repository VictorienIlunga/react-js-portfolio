import React from 'react'
import {CONTACT} from '../constants'
import {motion} from "framer-motion"
function Contact() {
  return (
    <div className='border-b border-neutral-900 pb-20 mt-8'>
        <motion.h1 
          whileInView={{opacity:1, y:0}}
          initial={{opacity:0, y:-100}}
          transition={{duration:1.5}}
          className='text-center text-4xl '>Contact</motion.h1>
        <motion.div 
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x:-100}}
          transition={{duration:1.5}}
          className='text-center tracking-tighter'>
            <p className='my-4'> {CONTACT.address} </p>
            <p className='my-4'> {CONTACT.phoneNo} </p>
            <p className='my-4'> {CONTACT.email} </p>

        </motion.div>
    </div>
  )
}

export default Contact