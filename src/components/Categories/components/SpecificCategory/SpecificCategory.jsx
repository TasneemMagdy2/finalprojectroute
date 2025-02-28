import React, { useEffect, useState } from 'react'
import styles from './SpecificCategory.module.css'
import axios from 'axios'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
export default function SpecificCategory() {
    let [count,setCount]=useState(0)
    const[categories,setCategories]=useState([])
   
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
    
  return(
  
    <div className='py-20 flex flex-wrap gap-5'>
    
    
    {categories.map(category=> 
     
    



<div className="max-w-sm w-1/3  bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
  <Link to={''}>
    <div><img className={styles.categoryImageSpecific }  src={category.image} alt /></div> 

  
  </Link>
  <div className="p-5">
    <Link to={''}>
      <h5 className="mb-2 block text-center  text-2xl font-bold tracking-tight b text-[#0aad0a] dark:text-white">{category.name}</h5>
    </Link>
   
  </div>
</div>

    )}
   </div> 
  )
}
