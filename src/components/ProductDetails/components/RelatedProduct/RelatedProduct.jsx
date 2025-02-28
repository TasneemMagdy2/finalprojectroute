import React, { useEffect, useState } from 'react'
import styles from './RelatedProduct.module.css'
import { useParams } from 'react-router-dom'
import ProductItem from '../../../Shared/ProductItem/ProductItem'
import axios from 'axios'

export default function RelatedProduct(props) {
    let [count,setCount]=useState(0)
    let {categoryId}=props
    const [relatedProduct,setRelatedProduct]=useState([])
    function getProducts(){
      axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
      .then(({data})=>{
        console.log(data.data);
       let res= data.data.filter(product=>product.category._id==categoryId)
       console.log(res);
       setRelatedProduct(res)
       
        
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
  return(
      <div className='flex flex-wrap gap-y-3 mb'>
          {relatedProduct.map(product => <ProductItem  key={product.id} product={product}/>)}
        
          
        </div>
  )
}
