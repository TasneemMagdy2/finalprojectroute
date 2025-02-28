import React, { useContext, useEffect, useState } from 'react'
import styles from './RecentProduct.module.css'
import axios from 'axios'
import ProductItem from '../../../Shared/ProductItem/ProductItem'
import Loader from '../../../../component/Loader/Loader'
import { cartContext } from '../../../../context/cartContext'
import { toast } from 'react-toastify'
export default function RecentProduct() {
  let [products,setProducts]=useState([])
  let {addToCart}=useContext(cartContext)
    let [count,setCount]=useState(0)
    async function addProductToCart(id){
 let data= await addToCart(id)
 console.log(data);
 if(data.status=='success'
 ){
 toast.success("it has been successfuly added!");
 }
    }
    function getProducts(){
      axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
      .then(({data})=>{
        console.log(data);
        setProducts(data.data)
        
      })
      .catch(err=>{
        console.log(err);
        
      })
    }
    useEffect(()=>{
      getProducts();
    }
      ,[]
    )
  return (
  
    <div className='flex flex-wrap gap-y-3 mb'>
        {products.length == 0 && <Loader/>}
        {products.length != 0 && products.map(product => <ProductItem addProductToCart={addProductToCart}  key={product.id} product={product}/>)}
  
      
    
      
    </div>
  )
}
