import React, { useContext, useEffect, useState } from 'react'
import styles from './AllOrders.module.css'
import { cartContext } from '../../context/cartContext'
import { tokenContext } from '../../context/tokenContext'
import {jwtDecode}from'jwt-decode'
import { Modal } from 'flowbite';
export default function AllOrders() {

   const $targetEl = document.getElementById('modalEl');
   const options = {
      placement: 'bottom-right',
      backdrop: 'dynamic',
      backdropClasses:
          'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
      closable: true,
      onHide: () => {
          console.log('modal is hidden');
      },
      onShow: () => {
          console.log('modal is shown');
      },
      onToggle: () => {
          console.log('modal has been toggled');
      },
  };
  const instanceOptions = {
   id: 'modalEl',
   override: true
 };
  const modal = new Modal($targetEl, options, instanceOptions);  
    let [orders,setOrders]=useState([])
    let [selectedItems,setSelectedItems]=useState([])
    let{getUserOrders}=useContext(cartContext)
    let{token}=useContext(tokenContext)
    function getId(){
let decoded=jwtDecode(token)
console.log(decoded,'helloooo');
getOrders(decoded.id)

    }
  async  function getOrders(id){
let data=await getUserOrders(id)
console.log(data);
setOrders(data)



   }
   function openModel(items){
      modal.show()
      setSelectedItems(items)
   }
   function hideModel(){
      modal.hide()
   }
    useEffect(()=>{
 token && getId()
    },[token])
  return (
  
    <>
   

<div className="relative overflow-x-auto my-12">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Order id name
        </th>
        <th scope="col" className="px-6 py-3">
          
      isPaid
        </th>
        <th scope="col" className="px-6 py-3">
          
      paymentMethodType

        </th>
        <th scope="col" className="px-6 py-3">
         
         totalOrderPrice

        </th>
        <th scope="col" className="px-6 py-3">
         
        view details

        </th>
      </tr>
    </thead>
    <tbody>
    {orders.map(order=>  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {order.id}
        </th>
        <td className="px-6 py-4">
         {order.ispaid}
        </td>
       
        <td className="px-6 py-4">
        {order.paymentMethodType}
        </td>
        <td className="px-6 py-4">
        {order. totalOrderPrice}
        </td>
        <td className="px-6 py-4">
        <button onClick={()=>{openModel(order.cartItems)}} className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  <i className='fa fa-eye'></i>
</button>
      
        </td>
      </tr>)}
     
    </tbody>
  </table>
 
</div>


{/* Modal toggle */}



{/* Main modal */}
<div id="modalEl" tabIndex={-1} aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
  <div className="relative p-4 w-full max-w-2xl max-h-full">
    {/* Modal content */}
    <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
      {/* Modal header */}
      <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          ORDERS
        </h3>
        <button onClick={hideModel} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
      </div>
      {/* Modal body */}
      <div className="p-4 md:p-5 space-y-4">
      <table className="w-[80%] bg-red  container mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
   
   <tbody>
     {selectedItems.map(product=> <tr className="bg-[#f8f9fa] border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
       <td className="p-4">
         <img src={product.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
       </td>
       <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
       {product.product.title}
       </td>
       <td className="px-6 py-4">
        
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
      {/* Modal footer */}
      
    </div>
  </div>
</div>








    </>
  )
}
