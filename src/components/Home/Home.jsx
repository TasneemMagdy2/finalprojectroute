import React, { useState } from 'react'
import styles from './Home.module.css'
import RecentProduct from './components/RecentProduct/RecentProduct'
import PopularCategory from './components/PopularCategory/PopularCategory'
import StaticSlider from './components/StaticSlider/StaticSlider'
export default function Home() {
    let [count,setCount]=useState(0)
  return (
  
    <div >
      <StaticSlider/>
      <PopularCategory/>
     <RecentProduct/>
    </div>
  )
}
