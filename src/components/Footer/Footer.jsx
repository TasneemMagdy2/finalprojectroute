import React, { useState } from 'react'
import styles from './Footer.module.css'
export default function Footer() {
    let [count,setCount]=useState(0)
  return (
  
    
    <footer className='bg-[rgb(242,242,242)]   py-6 '>
<div className="container mx-auto w-full ">
<h2 className='text-3xl text-[#212529]'>Get the freshCart App</h2>
<p className=' mb-4 text-[#6d767e] font-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, magnam.</p>
<div className="flex mb-5">
<input  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-[#0aad0a] block grow me-2  dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-[#0aad0a] dark:focus:border-[#0aad0a]"  required />
<button className=' bg-[#0aad0a] text-white rounded-md p-2'>share app link</button>
</div>
<div className="partner flex justify-between py-6 border-y-1 border-y-slate-400">
<div className="payment">
 <p>paymentpartner</p> 
</div>
<div className="app">
  <p>get with fresh cart</p>
</div>

</div>
</div>
    </footer>
    
  )
}
