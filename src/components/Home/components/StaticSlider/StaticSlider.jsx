import React, { useState } from 'react'
import styles from './StaticSlider.module.css'
import Slider from 'react-slick';
import slide1 from'../../../../assets/images/slider-image-1.jpeg'
import slide2 from'../../../../assets/images/slider-image-2.jpeg'
import slide3 from'../../../../assets/images/slider-image-3.jpeg'
import static1 from'../../../../assets/images/slider-2.jpeg'
import static2 from'../../../../assets/images/grocery-banner.png'
export default function StaticSlider() {
    let [count,setCount]=useState(0)
    const settings = {
      
      dots: true,
      infinite: true,
      speed: 500,
      arrows:false,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  return (
  
    <div>
      <div className="main-layout">
        <div className="w-9/12">
          <Slider {...settings}>
   <img src={slide3} className='w-[100%] h-[360px]'  alt="" />
   <img src={slide2} className='w-[100%] h-[360px]' alt="" />
   <img src={slide1} className='w-[100%] h-[360px]' alt="" />
    </Slider>
        </div>
        <div className="w-3/12">
  <img src={static1} className="w-full h-[180px]" alt="" />
  <img src={static2} className="w-full h-[180px]" alt="" />
</div>

      </div>
   
    </div>
  )
}
