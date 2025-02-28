import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { WishlistContext } from '../../../context/wishlistContext';  // ✅ تأكد من صحة المسار

export default function ProductItem(props) {
  let { imageCover, title, category, price, ratingsAverage, id } = props.product;
  let [loading, setIsLoading] = useState(false);

  // ✅ استخدام الـ Context
  const wishlistContext = useContext(WishlistContext);

  if (!wishlistContext) {
    console.error(" WishlistContext is undefined. تأكد من أن WishlistProvider يحيط بالتطبيق.");
    return null; // تجنب كسر التطبيق
  }

  const { toggleWishlist, isInWishlist } = wishlistContext;

  return (
    <div className="md:w-1/2 lg:w-1/6 px-3 mb-3">
      <div className="product flex flex-wrap">
        <Link to={`/productDetails/${id}/${category._id}`}>
          <img src={imageCover} className="mb-2" alt="" />
          <span className='text-main'>{category.name}</span>
          <h2 className='mb-4'>{title.split(" ").splice(0, 2).join(" ")}</h2>
          <div className="flex justify-between mb-4">
            <p>{price} EGP</p>
            <p><i className='fa fa-star rating-color'></i> {ratingsAverage}</p>
          </div>
        </Link>

        {/* ✅ زر الإضافة إلى المفضلة */}
        <i
          className={`fa fa-heart cursor-pointer ${
            isInWishlist(id) ? "text-red-500" : "text-gray-400"
          }`}
          onClick={() => toggleWishlist(id)}
          style={{ fontSize: "20px" }}
        ></i>

        <button
          onClick={() => { props.addProductToCart(id); setIsLoading(true); }}
          className='btn bg-main w-full p-2 text-white text-center rounded-md'>
          {loading ? <span>is Loading.....</span> : <span>Add To Cart</span>}
        </button>
      </div>
    </div>
  );
}
