import React, { useState } from 'react'
import styles from './Loader.module.css'
import { ClipLoader } from 'react-spinners'
export default function Loader() {
    let [count,setCount]=useState(0)
  return (
  
    <div className=' h-screen w-[100%]  bg-opacity-50 flex justify-center items-center' >
     <ClipLoader />
    </div>
  )
}
