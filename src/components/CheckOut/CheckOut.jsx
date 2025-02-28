import React, { useContext, useState } from 'react'
import styles from './CheckOut.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { ClipLoader } from 'react-spinners'
import { cartContext } from '../../context/cartContext'
export default function CheckOut() {
  let [isCallingAPI, setIsCallingAPI] = useState(false)
  let [APIerror, setAPIerror] = useState(null)
  let [count, setCount] = useState(0)
  let [isOnline, setIsOline] = useState(false)
  let { cacheOnDelivery,onlinePayment } = useContext(cartContext)

  async function callPayment(values) {
    try {
      setIsCallingAPI(true)
      setIsOline(true)
      console.log();
      (isOnline)
     if(isOnline) {
      let x = await onlinePayment(values)
      console.log(x);
      window.location.href=x.session.url
     }
     else{
      let x = await cacheOnDelivery(values)
      console.log(x);
     }
     
     


    } catch (error) {
      setIsCallingAPI(false)



    }
  }
  const initialValues = {

    details: '',

    phone: '',
    city: ''
  }
  const validationSchema = Yup.object().shape(
    {

      details: Yup.string().required('required'),
      phone: Yup.string().required('required'),
      city: Yup.string().required('required'),


    }
  )
  const formik = useFormik(
    {
      initialValues,
      validationSchema,

      onSubmit: callPayment,
    }
  )
  return (



    <form onSubmit={formik.handleSubmit} className=" w-[50%] mx-auto my-5">
      <h1 className='text-4xl text-[#212529] mb-5'>Shipping Info:</h1>
      {APIerror ? <div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
        {APIerror}
      </div> : ''}

      <div className="relative z-0 w-full mb-5 group">
        <input type="tel" onBlur={formik.handleBlur} name="phone" value={formik.values.email} onChange={formik.handleChange} id="phone" className="block mb-1 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#0aad0a] focus:outline-none focus:ring-0 focus:border-[#0aad0a] peer" placeholder=" " required />
        <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#0aad0a] peer-focus:dark:text-[#0aad0a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">phone:</label>
        {formik.errors.phone && formik.touched.phone ? <div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          {formik.errors.phone}
        </div> : ''}
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input type="text" onBlur={formik.handleBlur} name="city" value={formik.values.email} onChange={formik.handleChange} id="city" className="block mb-1 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#0aad0a] focus:outline-none focus:ring-0 focus:border-[#0aad0a] peer" placeholder=" " required />
        <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#0aad0a] peer-focus:dark:text-[#0aad0a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">city:</label>
        {formik.errors.city && formik.touched.city ? <div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          {formik.errors.city}
        </div> : ''}
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input type="text" onBlur={formik.handleBlur} name="details" value={formik.values.email} onChange={formik.handleChange} id="details" className="block mb-1 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#0aad0a] focus:outline-none focus:ring-0 focus:border-[#0aad0a] peer" placeholder=" " required />
        <label htmlFor="details" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#0aad0a] peer-focus:dark:text-[#0aad0a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Details:</label>
        {formik.errors.details && formik.touched.details ? <div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          {formik.errors.details}
        </div> : ''}
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input type="checkbox" value={'online'} onChange={()=>setIsOline(true)}/>
        <label htmlFor="" className='mx-3'>OnLine</label>
        </div>


      {isCallingAPI ? <div className='  w-auto flex justify-end '>
        <div className='bg-[#0aad0a] p-3 rounded-md'>
          <ClipLoader size={20} />
        </div>

      </div> : <button type="submit" disabled={isCallingAPI} className="text-white bg-[#0aad0a]  block ml-auto hover:bg-[#0aad0a] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#0aad0a] dark:hover:bg-[#0aad0a] dark:focus:ring-[#0aad0a]">PayMent</button>
      }





    </form>


  )
}

