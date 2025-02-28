import React, { useContext, useEffect, useState } from 'react'
import styles from './ProductDetails.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import RelatedProduct from './components/RelatedProduct/RelatedProduct'
import Slider from 'react-slick'
import Loader from '../../component/Loader/Loader'
import { cartContext } from '../../context/cartContext'
import { toast } from 'react-toastify'
export default function ProductDetails() {
    let [count,setCount]=useState(0)
     let {addToCart}=useContext(cartContext)
    const[details,setDetails]=useState(null)
   const {id,categoryId}= useParams()
   console.log(id);
   async function addProductToCart(id){
    let data= await addToCart(id)
    if(data.status=='success'
     ){
     toast.success("it has been successfuly added!");
     }
        
        }
   function getProductsDetails(){
    axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    .then(({data})=>{
      console.log(data);
      setDetails(data.data)
      
      
    })
    .catch(err=>{
      console.log(err);
      
    })
  }
 
  useEffect(()=>{
getProductsDetails()
  },[id])
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
   
  return (
    
  <>
  {!details  && <Loader/>}
         {details &&  <div className='main-layout  items-center py-16'>
      <div className="w-1/4">
      <Slider {...settings}>
    {details?.images.map(src=> <img src={src} alt="" />)}
    </Slider>
     
      </div>
    
      <div className="w-3/4 p-10">
      <h1 className=' mb-3 text-2xl font-extrabold text-gray-900 dark:text-white'>{details?.title}</h1>
      <p className='mb-3 '>{details?.description}</p>
      <span>{details?.name}</span>
      <div className="flex justify-between mb-4">
        <p>{details?.price}EGP</p>
        <p> <i className='fa fa-star rating-color'></i>
          {details?.ratingsAverage}</p>
      </div>
      <div className="flex justify-center items-center ">
      <button onClick={()=>{addProductToCart(details.id)}} className='btn bg-main  w-[75%] p-2 text-white text-center rounded-md'><i className='fa-brands fa-plus font-light'></i> Add</button>
      </div>
     
      </div>
      <h2 className='text-4xl text-main mt-10 font-bold'>Related Product</h2>
      <RelatedProduct categoryId={categoryId}/>
    </div>}
  
    
    </>
  )
}