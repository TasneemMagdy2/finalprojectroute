import React, { useState } from 'react'
import styles from './NotFound.module.css'
import notFoundImage from'../../assets/images/error.svg'
export default function NotFound() {
    let [count,setCount]=useState(0)
  return (
  
    <div className='container '>
      <img src={notFoundImage} className='w-full' alt="" />
     
    </div>
  )
}
