import React from 'react'
import { staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";
import styles from "../styles";
import { SlideCards } from '../components';
import { SectionTexts,SectionTitle } from '../components/SectionText';


const BannerSection = ({bannerData, activeBanner}) => {

  const [active, setActive] = React.useState(activeBanner) 


  return(
    <section className={`${styles.paddings} `} id="explore">
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.25 }}
    className={`${styles.innerWidth}  px-12  mx-auto  flex flex-col`}>
      

     <div className='flex flex-col items-center justify-center mt-[70px]'>
     <SectionTitle title={"Our Model's"}/>
      <SectionTexts text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}/>
     </div>

    <div className="flex max-[420px]:hidden  flex-row min-h-[70vh] gap-5">
      {bannerData.map( (item, idx) => (
        <SlideCards 
        key={item.id}
        {...item}
        index={idx}
        active={active}
        handleClick={setActive}
        />
      ))}

    </div>
  </motion.div>
</section>


    )
}

export default BannerSection;