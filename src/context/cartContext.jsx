import { createContext, useContext, useEffect, useState } from "react";
import { tokenContext } from "./tokenContext";
import axios from "axios";

export const cartContext=createContext()


export default function CartContextProvider({children}) {
    const{token}=useContext(tokenContext)
    const[cartDetails,setCartDetails]=useState(null)
    const[numOfCartItems,setNumOfCartItems]=useState(0)
    const[cartId,setCartId]=useState('')
    const API_URL=`https://ecommerce.routemisr.com/api/v1/cart`
    const ORDER_API_URL=`https://ecommerce.routemisr.com/api/v1/orders`
    const headers={
        token
    }
    useEffect(()=>{
        token && getCart()
      },[token])
    async function addToCart(productId){
 const{data}  =await axios.post(API_URL,{productId},{
    headers
   })
   if(data.status=='success'){
    setNumOfCartItems(data.numOfCartItems)
   }
   return data;
   console.log(data);
   
   }
   async function getCart(){
    const{data}  =await axios.get(API_URL,{
       headers
      })
      console.log(data);
      
      if(data.status=='success'){
       setNumOfCartItems(data.numOfCartItems)
      }
      setCartId(data.cartId)
      setCartDetails(data)
      return data;
    //   console.log(data);
      
      }
      async function cacheOnDelivery(shippingAddress) {
        const{data}  =await axios.post(`${ORDER_API_URL}/${cartId}`,{shippingAddress},{
          headers
         })
         console.log(data);
         
         if(data.status=='success'){
          setNumOfCartItems(data.numOfCartItems)
         }
         setCartDetails(data)
         return data;
        
         console.log(data);
      }
      async function onlinePayment(shippingAddress) {
        const{data}=await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:5175`,{shippingAddress},{
          headers
         });
         console.log(data);
         
        //  if(data.status=='success'){
        //   setNumOfCartItems(data.numOfCartItems)
        //  }
        //  setCartDetails(data)
        // console.log(data);
         return data;
        
        
      }
      async function getUserOrders(id) {
        const{data}=await axios.get(` https://ecommerce.routemisr.com/api/v1/orders/user/${id}`,{
        
          headers
         });
         console.log(data);
         
        //  if(data.status=='success'){
        //   setNumOfCartItems(data.numOfCartItems)
        //  }
        //  setCartDetails(data)
        // console.log(data);
         return data;
        
        
      }
      async function onlinePayment(shippingAddress) {
        const{data}=await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:5175`,{shippingAddress},{
          headers
         });
         console.log(data);
         
        //  if(data.status=='success'){
        //   setNumOfCartItems(data.numOfCartItems)
        //  }
        //  setCartDetails(data)
        // console.log(data);
         return data;
        
        
      }
      async function removeProduct(id) {
        const{data}  =await axios.delete(`${API_URL}/${id}`,{
          headers
         })
         if(data.message=='success'){
          getCart();
         }
         console.log(data);
         
         if(data.status=='success'){
          setNumOfCartItems(data.numOfCartItems)
         }
         setCartDetails(data)
         return data;
        
         console.log(data);
      }
  return (
    <cartContext.Provider value={{numOfCartItems,setNumOfCartItems,addToCart,getCart,cartDetails,removeProduct,cacheOnDelivery,onlinePayment,getUserOrders}}>
      {children}
    </cartContext.Provider>
  )
}
