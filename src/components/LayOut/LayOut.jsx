import React, { useState } from 'react'
import styles from './LayOut.module.css'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'


export default function LayOut() {
   let [count,setCount]=useState(0)
  return (
  
    <div>
    <NavBar/>
    <div className="container mx-auto">
    <Outlet></Outlet>
    </div>
  
    <Footer/>
    </div>
  )
}
