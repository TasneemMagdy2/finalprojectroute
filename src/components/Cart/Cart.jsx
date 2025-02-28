import React, { useContext, useEffect, useState } from 'react'
import styles from './Cart.module.css'
import { cartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'

export default function Cart() {
    let [count,setCount]=useState(0)
    
   
    const {cartDetails,removeProduct}=useContext(cartContext)
 
   useEffect(()=>{
console.log(cartDetails);

   },[cartDetails])
  async function deleteProduct(id){
  let data=await removeProduct(id)
  log(data)
   }
  return (
    
  
    <>
    {cartDetails&&<div className='py-6 container mx-auto'>
      <div className="flex justify-between" >
        <h1 className='text-3xl'>Cart Shop</h1>
        <Link to={'/checkOut'} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Check Out</Link>
      </div>
      <div className="flex my-7 justify-between">
      <h2 className=''>Total Price <span className='text-main'>{cartDetails.data.totalCartPrice}</span></h2>
        <h2 className=''>Total number Of product <span className='text-main'>{cartDetails.numOfCartItems}</span></h2>
       
      </div>
     <div className="relative overflow-x-auto py-6 ">
  <table className="w-[80%] bg-red  container mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
   
    <tbody>
      {cartDetails.data.products.map(product=> <tr className="bg-[#f8f9fa] border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="p-4">
          <img src={product.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {product.product.title}
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <button className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span className="sr-only">Quantity button</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
              </svg>
            </button>
            <div>
              <span>{product.count}</span>
            </div>
            <button className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span className="sr-only">Quantity button</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
              </svg>
            </button>
          </div>
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          ${product.price}
        </td>
        <td className="px-6 py-4">
          <span onClick={()=>deleteProduct(product.product._id)} className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</span>
        </td>
      </tr>)}
     
      
      
    </tbody>
  </table>
</div>
     </div>} 




    </>
  )
}
