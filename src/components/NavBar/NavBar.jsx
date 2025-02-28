import React, { useContext, useState } from 'react'
import styles from './NavBar.module.css'
import logo from '../../assets/images/freshcart-logo.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import { counterContext } from '../../context/counterContext';
import { tokenContext } from '../../context/tokenContext';
import { cartContext } from '../../context/cartContext';

export default function NavBar() {
  let{token,setToken}=useContext(tokenContext)
  let{numOfCartItems}=useContext(cartContext)
  console.log(token,'Tokennavbar');
  let navigate=useNavigate()
  
  const [isOpen, setIsOpen] = useState(false); // State for menu toggle
let {count}=useContext(counterContext)
console.log(count,'counter');
function logOut(){
  //remove localstorage
localStorage.removeItem('userToken')

  //set token null
setToken(null)

  //navigate login
navigate('/login')

}

  return (
    <nav className="bg-white relative border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center gap-4">
          <a href="https://flowbite.com/" className=" flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} width={'200px'} alt="Logo" />
          </a>

          {/* Mobile Menu (hidden by default, shown when toggled) */}
          <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto absolute top-[80px] md:top-0 left-0 z-20 md:relative  `} id="navbar-default">
         {token? <ul className="font-medium  absolute md:relative  w-full md:w-auto left-0 md:left-auto flex items-center flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
             
             <li><NavLink to={'home'} className="block py-2 px-3 text-gray-900 rounded-sm md:p-0 dark:text-white">Home</NavLink></li>
             <li><NavLink to={'products'} className="block py-2 px-3 text-gray-900 rounded-sm md:p-0 dark:text-white">Products</NavLink></li>
             <li><NavLink to={'wishlist'} className="block py-2 px-3 text-gray-900 rounded-sm md:p-0 dark:text-white">wish List</NavLink></li>
             <li><NavLink to={'categories'} className="block py-2 px-3 text-gray-900 rounded-sm md:p-0 dark:text-white">Categories</NavLink></li>
             <li><NavLink to={'brands'} className="block py-2 px-3 text-gray-900 rounded-sm md:p-0 dark:text-white">Brands</NavLink></li>
             <li><NavLink to={'cart'} className="block py-2 px-3 text-gray-900 rounded-sm md:p-0 dark:text-white">Cart{numOfCartItems}</NavLink></li>
           </ul>:''}
           
          </div>
        </div>

        <div className="flex gap-3">
          
          <ul className='flex gap-3'>
            <li><a href="#"><i className='fa-brands fa-instagram'></i></a></li>
            <li><a href="#"><i className='fa-brands fa-facebook'></i></a></li>
            <li><a href="#"><i className='fa-brands fa-tiktok'></i></a></li>
            <li><a href="#"><i className='fa-brands fa-twitter'></i></a></li>
            <li><a href="#"><i className='fa-brands fa-linkedin'></i></a></li>
            <li><a href="#"><i className='fa-brands fa-youtube'></i></a></li>
          </ul>
          <ul className='flex gap-3'>
            {token?<><li><span onClick={logOut}>SignOut</span></li> 
            </>  :<> <li><NavLink to={'register'}>Register</NavLink></li>
         
       
          <li><NavLink to={'login'}>Login</NavLink></li> 
           </>}
          
          </ul>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          type="button" 
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default" 
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

      </div>
    </nav>
  );
}
