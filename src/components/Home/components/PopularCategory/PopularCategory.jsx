import React, { useEffect, useState } from 'react'
import styles from './PopularCategory.module.css'
import axios from 'axios'
import Slider from 'react-slick'
export default function PopularCategory() {
    let [count,setCount]=useState(0)
    const[categories,setCategories]=useState([])
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 1,
    };
    async function getGategories(){
      try {
      const{data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
      console.log(data);
      setCategories(data.data)
      
    } catch (error) {
        
      }
    
    }
    useEffect(()=>{
getGategories()
    },[])
    
  return (
  
    <div className='py-20'>
     <h2 className='mb-5 text-3xl'>Shop  Popular Categories </h2> 
     <Slider {...settings}>
    {categories.map(category=> <div>
      <img src={category.image} className={styles.categoryImage} alt="" />
      <h4>{category.name}</h4>
    </div>)}
    </Slider>
    </div>
  )
}
