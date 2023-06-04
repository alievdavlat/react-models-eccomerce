import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import SpaIcon from '@mui/icons-material/Spa';


const SlideCards = ({id, imgUrl, name, text, active, handleClick, index}) => {
  return (
    <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center  justify-center max-[420px]:w-full min-w-[170px] h-[600px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
     <img  src={imgUrl} alt='card-01' className="absolute  w-full h-[400px] object-cover rounded-[24px]" />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 bott lg:left-0 lg:bottom-40 lg:rotate-[-90deg] lg:origin-[0,0]">
        {name}
      </h3>
    ) : (
      <div className="absolute bottom-[100px] max-[420px]:bottom-[-200px] p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.3)] rounded-b-[24px]">
        <div
          className={`px-12 w-[60px] h-[60px] rounded-[24px] flex items-center justify-center glassmorphism mb-[10px]`}
        >
          <SpaIcon sx={{fontSize:'35px', color:'white'}}/>
        </div>
        <p className="font-normal text-[20px] leading-[20.16px] text-white uppercase">
          {name} 
        </p>
        <h2 className="mt-[15px] font-semibold sm:text-[32px] text-[18px] text-white">
          {text}
        </h2>
      </div>
    )}
  </motion.div>

  )
}

export default SlideCards



