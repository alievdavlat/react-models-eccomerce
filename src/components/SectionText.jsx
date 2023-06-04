import React from 'react'
import { motion } from "framer-motion";
import { textContainer, textVariant2 } from '../utils/motion';

export const  SectionTitle = ({title}) => {
  return (
  <motion.h1
  initial="hidden"
  whileInView={"show"}
  variants={textContainer}
  className={`font-bold text-[40px] pb-5 border-b-[1px] text-white text-center w-fit`}>
    {Array.from(title).map((letter, idx) => (
      <motion.span variants={textVariant2} key={idx}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.h1>
 
 )
  }
     




export const SectionTexts = ({text}) => {

 return(
  <motion.p
    variants={textVariant2}
    initial="hidden"
    whileInView={"show"}
    className={`mt-[20px] font-normal md:text-[16px] text-[16px] text-white text-center`}
    
    >
      {text}
  </motion.p>
)
}