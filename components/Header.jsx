import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
export default function Header() {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-100 xl:items-center">
      <motion.div
      initial={{
        x: -500,
        opacity: 0,
        scale: 0.5
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.5
      }}
       className='flex flex-row items-center'>
        <SocialIcon
          fgColor='gray'
          bgColor='transparent'
          url='https://twitter.com/#'/>
        <SocialIcon
          fgColor='gray'
          bgColor='transparent'
          url='https://twitter.com/#'/>
        <SocialIcon
          fgColor='gray'
          bgColor='transparent'
          url='https://twitter.com/#'/>
      </motion.div>
      <motion.div
      initial={{
        x: 500,
        opacity: 0,
        scale: 0.5
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.1
      }}
       className='flex flex-row items-center text-gray-300 cursor-pointer'>
        <SocialIcon
        network='email'
        fgColor='gray'
        bgColor='transparent'
         className='cursor-pointer'/>
         <p className='uppercase hidden md:inline-flex text-gray-400 text-xs '> Get in Touch</p>
      </motion.div>
    </header> 
  )
}