import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ProductsData } from '../constants';
import ProductsCart from './ProductsCart';


const Slide = ({toShow, dataFilter}) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: toShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };


  return (
    <Slider {...settings} className='flex justify-center items-center'>
      {
        ProductsData?.filter(item => item.unique === dataFilter).map(items => <div key={items.id}><ProductsCart  {...items}/></div> )
      } 
    </Slider>
  );
}

export default Slide
