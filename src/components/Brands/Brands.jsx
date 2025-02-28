import { useEffect, useState } from "react";
import axios from "axios";

const BrandsPage = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://ecommerce.routemisr.com/api/v1/brands")
      .then((response) => {
        console.log("Full API Response:", response.data);
        if (response.data && Array.isArray(response.data.data)) {
          setBrands(response.data.data);
        } else {
          console.error("Invalid API response structure:", response.data);
          setBrands([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching brands:", error);
        setBrands([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-xl font-bold mt-10">Loading...</p>;

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-6">All Brands</h2>
      <div className="grid py-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {brands.length > 0 ? (
          brands.map((brand) => (
            <div 
            key={brand._id} 
            className="border border-gray-100 p-10 flex flex-col items-center rounded-lg  hover:shadow-xl hover:border-gray-100 transition-all duration-1000 bg-white"
          >
            <img src={brand.image} alt={brand.name} className="h-20 w-auto mb-3 object-contain" />
            <p className="text-lg font-semibold text-gray-700">{brand.name}</p>
          </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No brands found.</p>
        )}
      </div>
    </div>
  );
};

export default BrandsPage;
