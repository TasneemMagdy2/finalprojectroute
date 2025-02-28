import React, { useContext, useState } from 'react'
import styles from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from'yup'
import axios from 'axios'
import { ClipLoader } from 'react-spinners'
import { tokenContext } from '../../context/tokenContext'
export default function Login() {
  let{setToken}=useContext(tokenContext)
  let[isCallingAPI,setIsCallingAPI]=useState(false)
  let[APIerror,setAPIerror]=useState(null)
    let [count,setCount]=useState(0)
    let navigate=useNavigate()
   async function callLogin(values) {
  try {
    setIsCallingAPI(true)
    setAPIerror(null)
    let{data} =await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,values)
        console.log(data);
        localStorage.setItem('userToken',data.token)
        setToken(data.token)
        setIsCallingAPI(false)
        // programatic routing
        navigate('/home')
        
  } catch (error) {
    setAPIerror(error.response.data.message)
  
    
  }
  }
    const initialValues={
     
      password:'',
     
      email:''
    }
    const validationSchema=Yup.object().shape(
      {
       
        email:Yup.string().email('invalid email').required('required'),
        password:Yup.string().matches(new RegExp('[A-Z][a-z0-9]{3,8}$'),'invalid password').required('required'),
       
      }
    )
     const formik=useFormik(
      {
        initialValues,
        validationSchema,
       
        onSubmit:callLogin,
      }
    )
  return (
  <>
   

<form onSubmit={formik.handleSubmit} className=" w-[50%] mx-auto my-5">
  <h1 className='text-4xl text-[#212529] mb-5'>Login Now:</h1>
  {APIerror?  <div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
 {APIerror}
</div>:''}
 
  <div className="relative z-0 w-full mb-5 group">
    <input type="email"   onBlur={formik.handleBlur} name="email" value={formik.values.email} onChange={formik.handleChange} id="floating_email" className="block mb-1 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#0aad0a] focus:outline-none focus:ring-0 focus:border-[#0aad0a] peer" placeholder=" " required />
    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#0aad0a] peer-focus:dark:text-[#0aad0a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email:</label>
    {formik.errors.email && formik.touched.email?  <div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
 {formik.errors.email}
</div>:''}
  </div>
  <div className="relative z-0 w-full mb-5 group">
    <input type="password"  onBlur={formik.handleBlur} value={formik.values.password} onChange={formik.handleChange} name="password" id="floating_password" className="block mb-1 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#0aad0a] focus:outline-none focus:ring-0 focus:border-[#0aad0a] peer" placeholder=" " required />
    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#0aad0a] peer-focus:dark:text-[#0aad0a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pssword:</label>
    {formik.errors.password && formik.touched.password?  <div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
 {formik.errors.password}
</div>:''}
  </div>
 

 {isCallingAPI ? <div className='  w-auto flex justify-end '>
  <div className='bg-[#0aad0a] p-3 rounded-md'>
  <ClipLoader  size={20}/>
  </div>
 
 </div>:<button type="submit" disabled={isCallingAPI} className="text-white bg-[#0aad0a]  block ml-auto hover:bg-[#0aad0a] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#0aad0a] dark:hover:bg-[#0aad0a] dark:focus:ring-[#0aad0a]">Login Now</button>
 }
 
  
 
 <p className="text-xl text-gray-500 text-center mt-3">
  <Link to="/forgetPassword" className="text-[#0aad0a] hover:underline">
    Forget Password?
  </Link>
</p>
 
</form>


</>
  )
}
