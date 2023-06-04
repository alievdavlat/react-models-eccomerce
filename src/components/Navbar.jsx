import React from 'react'
import { motion } from "framer-motion";
import { navVariants} from "../utils/motion";
import { navItems } from '../constants';
import SpaIcon from '@mui/icons-material/Spa';
import Badgee from '../assets/icons/Badge'
import SearchIcon from '@mui/icons-material/Search';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ListIcon from '@mui/icons-material/List';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
      <motion.div
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className="flex flex-col w-full bg-slate-900 px-20 py-10 max-[420px]:px-0 max-[420px]:w-full"
      >
        <div className='flex items-center justify-between max-[420px]:items-end px-10 max-[420px]:px-0 max-[420px]:flex-col'>
           

        <div className='max-[420px]:flex max-[420px]:gap-5 max-[420px]:px-4 justify-center'>
         <Link to={'/'}>
         <div className='flex logo border  p-2 hover:border-yellow-200 items-center gap-5 w-[300px] max-[420px]:mb-8'>
          
          <h1 className='text-white font-bold text-2xl cursor-pointer hover:text-yellow-200'>
            GLOMUR-STYLE
          </h1>
          <SpaIcon sx={{color:"white"}} className='hover:text-yellow-200'/>
          </div>
         </Link>
       
          <div className="absolute  w-[50%] inset-0 gradient-02 "  />  
          
            <span className='text-white hidden max-[420px]:block hover:text-yellow-200 cursor-pointer'>
            <ListIcon  sx={{fontSize:'45px', position:'relative', right:'0px'}}/>
            </span>
        </div>

        <ul className='flex items-center  gap-24 max-[420px]:hidden'>
          {
            navItems.map(item => <Link to={item.path} key={item.id}><li  className='text-white text-[18px] hover:text-yellow-200 hover:border-b-yellow-200 hover:border-b-2 pb-3 transition-all cursor-pointer'>{item.item}</li></Link>)
          }
        </ul>
          
          
        <ul className='flex items-center max-[420px]:justify-center max-[420px]:px-14 gap-5 max-[420px]:gap-16'>
    
        <li className='flex items-center gap-2 mr-20 max-[420px]:mr-0'>
          <MonetizationOnIcon sx={{color:"white", fontSize:'25px'}} className='hover:text-yellow-200 mb-1'/>  <span className='text-white text-[17px]  hover:text-yellow-200'>USD</span>
        </li>

        <li>
        <SearchIcon sx={{color:"white", fontSize:'30px'}} className='hover:text-yellow-200 cursor-pointer'/>
        </li>

          <Link to={'/cart'}>
          <li>
          <Badgee/>
        </li>
          </Link>
        </ul>
          

        </div>
      </motion.div>  

    </>
  )
}

export default Navbar
