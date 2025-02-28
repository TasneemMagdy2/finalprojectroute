import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css'
import CounterContextProvider from './context/counterContext.jsx'
import TokenContextProvider from './context/tokenContext.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CartContextProvider from './context/cartContext.jsx'
import 'flowbite/dist/flowbite.min.js';
import WishlistProvider from "./context/wishlistContext.jsx"; // ✅ تأكد من صحة المسار



createRoot(document.getElementById('root')).render(
 
  <StrictMode>
    <TokenContextProvider>
      <CartContextProvider>
    <CounterContextProvider>
    <WishlistProvider> 
    <App />
  </WishlistProvider>
     </CounterContextProvider> 
     </CartContextProvider>
    </TokenContextProvider>
   
   
  </StrictMode>,
)
