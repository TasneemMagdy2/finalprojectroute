import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);  // Store all products
  const [search, setSearch] = useState("");      // Store search query

  // Fetch Products from API
  useEffect(() => {
    axios
      .get("https://ecommerce.routemisr.com/api/v1/products")
      .then((response) => setProducts(response.data.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      {/* Search Input */}
    

      {/* Product List */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product._id} className="p-4 border rounded-lg shadow-md">
              <img src={product.imageCover} alt={product.title} className="w-full h-40 object-cover" />
              <h3 className="font-bold mt-2 text-green-600">{product.category.name}</h3>
              <p className="text-gray-700">{product.title}</p>
              <p className="text-lg font-bold">{product.price} EGP</p>
              <p className="text-yellow-500">⭐ {product.ratingsAverage}</p>
            </div>
          ))
        ) : (
          <p className="text-center col-span-4 text-gray-500">No products found</p>
        )}
      </div>
    </div>
  );
}
