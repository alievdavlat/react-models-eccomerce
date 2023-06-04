import React from 'react'
import {  Sliderr } from '../components'
import { BannerSection, SlideProducts, ProductSection } from '../sections'
import { slideCardss, slideCardss2 } from '../constants'


const Home = () => {
  return (
    <>
    <div className="w-[1920px] h-[800px] mx-auto max-[420px]:w-full">
    <Sliderr/>
    </div>
    <BannerSection bannerData={slideCardss} activeBanner={1}/>
    <ProductSection/>
    <BannerSection bannerData={slideCardss2} activeBanner={3}/>
    <SlideProducts text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, repellat.'} title={'New Arrival products'} dataFilter={'new'}/>
    <SlideProducts text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, repellat.'} title={'Popular products'} dataFilter={'popular'}/>

    </>
  )
}

export default Home
