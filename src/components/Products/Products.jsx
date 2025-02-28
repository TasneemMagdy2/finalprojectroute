import React, { useContext, useState } from 'react'
import styles from './Products.module.css'
import Btn from '../Btn/Btn'
import { counterContext } from '../../context/counterContext'
import PopularCategory from '../Products/components/PopularCategory/PopularCategory'
import RecentProduct from '../Products/components/RecentProduct/RecentProduct'

export default function Products() {

   
  
  return (
    <>
  
   <RecentProduct/>
   </>
  )
}
