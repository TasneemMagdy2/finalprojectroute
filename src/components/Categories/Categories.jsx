import React, { useState } from 'react'
import styles from './Categories.module.css'
import PopularCategory from '../Products/components/PopularCategory/PopularCategory'
import SpecificCategory from './components/SpecificCategory/SpecificCategory'
export default function Categories() {
    let [count,setCount]=useState(0)
  return (
  
    <div>
     <SpecificCategory/>
    </div>
  )
}
