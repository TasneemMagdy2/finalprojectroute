import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import "./index.css";
import { createBrowserRouter, HashRouter, RouterProvider } from 'react-router-dom'
import LayOut from './components/LayOut/LayOut'
import Products from './components/Products/Products'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import Registers from './components/Registers/Registers'
import Login from './components/Login/Login'
import Brands from './components/Brands/Brands'
import Cart from './components/Cart/Cart'
import Categories from './components/Categories/Categories'
import NotFound from './components/NotFound/NotFound'
import { tokenContext } from './context/tokenContext'
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'
import { AuthView } from './components/AuthView/AuthView'
import ProductDetails from './components/ProductDetails/ProductDetails';
import { ToastContainer } from 'react-toastify';
import CheckOut from './components/CheckOut/CheckOut';
import AllOrders from './components/AllOrders/AllOrders';
import Wishlist from './components/WhishList/WishList';
import ForgotPassword from './components/Home/components/ForgetPassword/ForgetPassword';
import ForgetPassword from './components/Home/components/ForgetPassword/ForgetPassword';


function App() {
  const { setToken } = useContext(tokenContext)
  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      setToken(localStorage.getItem("userToken"))
    }

  }, [])
  const routes = HashRouter(
    [
      {
        path: "", element: <LayOut />, children: [
          { index: true, element:<Login/> },

          {
            path: "home", element: <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          },
          {
            path: "productDetails/:id/:categoryId", element: <ProtectedRoutes>
              <ProductDetails />
            </ProtectedRoutes>
          },
          {
            path: "products", element:
              <ProtectedRoutes>
                <Products />
              </ProtectedRoutes>
          },
          {
            path: "register", element: <AuthView><Registers /></AuthView>
          },
          {
            path: "wishlist", element: <ProtectedRoutes><AllOrders /></ProtectedRoutes>
          },
          {
            path: "login", element: <AuthView><Login /></AuthView>
          },
          {
            path: "brands", element:
              <ProtectedRoutes>
                <Brands />
              </ProtectedRoutes>
          },
          {
            path: "cart", element:
              <ProtectedRoutes>
                <Cart />
              </ProtectedRoutes>
          },
          {
            path: "categories", element:
              <ProtectedRoutes>
                <Categories />
              </ProtectedRoutes>
          },
          {
            path: "checkOut", element:
              <ProtectedRoutes>
                <CheckOut />
              </ProtectedRoutes>
          },
          {
            path: "allorders", element:
              <ProtectedRoutes>
                <AllOrders />
              </ProtectedRoutes>
          },
          {
            path: "forgetPassword", element:
              <AuthView>
                <ForgetPassword />
              </AuthView>
          },

          { path: "*", element: <NotFound /> },



        ]
      }
    ]
  )

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
      <ToastContainer />
    </>
  )
}

export default App
//email:tarneemmagdy33@gmail.com
//pass:Tasted