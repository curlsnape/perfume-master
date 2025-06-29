import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { GoArrowLeft } from "react-icons/go";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { MdInfo } from "react-icons/md";
import NewProducts from "@/components/NewProducts";
import { perfumeData } from "@/PerfumeData";

const ProductDetails = () => {
  const { productid } = useParams();
  const product = perfumeData.find((item) => item.id === Number(productid));

  const [selectedImage, setSelectedImage] = useState(product?.image);
  const [isInCart, setIsInCart] = useState(false);
  const [selectedSize, setSelectedSize] = useState("50ML");

  if (!product) {
    return (
      <div className="p-8 text-center text-red-500">
        Product not found.{" "}
        <Link to="/search" className="underline">
          Go back
        </Link>
      </div>
    );
  }

  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    if (product?.id && existingCart.includes(product.id)) {
      setIsInCart(true);
    }
  }, [product?.id]);

  const handleAddToCart = (productId) => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    if (!existingCart.includes(productId)) {
      existingCart.push(productId);
      localStorage.setItem("cart", JSON.stringify(existingCart));
      window.dispatchEvent(new Event("cartUpdated"));
      setIsInCart(true);
    }
  };

  // Mock rating component
  const renderStars = (rating = 4.5) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-black text-sm" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-black text-sm" />);
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-black text-sm" />);
    }
    return stars;
  };

  return (
    <div className="productdetails bg-white min-h-screen">
      <div className="max-w-7xl mx-auto p-4">
        <div className="producttop mb-4">
          <Link to="/search" className="text-black hover:underline">
            <GoArrowLeft className="inline mr-1" /> Back
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side - Thumbnail images */}
          <div className="flex lg:flex-col flex-row gap-2 lg:w-20">
            {product.multi_images?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.name} ${index + 1}`}
                className={`w-16 h-16 lg:w-20 lg:h-20 object-cover cursor-pointer border-2 rounded-lg transition-all duration-200 ${
                  selectedImage === img
                    ? "border-gray-400"
                    : "border-gray-200"
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>

          {/* Center - Main product image */}
          <div className="flex-1 max-w-md">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-96 lg:h-[500px] object-contain bg-white rounded-lg shadow-sm"
            />
          </div>

          {/* Right side - Product details */}
          <div className="flex-1 max-w-lg">
            {/* Product name and badges */}
           

            <h1 className="text-3xl font-bold text-gray-900 mb-2 uppercase tracking-wide">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1">
                {renderStars()}
              </div>
              <span className="text-sm text-gray-600">11,940</span>
            </div>

            {/* Product type and size */}
            <p className="text-gray-700 mb-2">
              Eau de Parfum, Size: {product.size_ml}ml / 1.7oz
            </p>

            {/* Inspired by */}
            <p className="text-gray-700 mb-3">
              Inspired by <strong>{product.inspired_by}</strong>
            </p>
            <p className="text-gray-600 text-sm mb-4">
              (Retail price ₹{Math.floor(product.price_inr * 1.5)})
            </p>

            {/* Scent intensity */}
            <div className="mb-4">
              <p className="text-gray-700 mb-2">
                Scent Intensity Scale: <span className="text-red-500 font-medium">Significant</span>
              </p>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <div className="w-4 h-4 bg-red-300 rounded-full"></div>
                <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
              </div>
            </div>

          

            {/* Price section */}
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-gray-500 text-lg">Reg: ₹{Math.floor(product.price_inr * 1.2)}</span>
                <div className="text-right">
                  <div className="text-2xl font-bold text-red-500 flex items-center">
                    <RiMoneyRupeeCircleFill className="mr-1" />
                    {product.price_inr}
                  </div>
                  <div className="text-zinc-700 text-sm">10% OFF</div>
                </div>
              </div>
            </div>

            {/* Size selection */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-medium">Select Size</span>
                <span className="bg-red-500 text-white px-2 py-1 rounded text-xs">NEW!</span>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedSize("50ML")}
                  className={`px-6 py-3 rounded-full border-2 transition-all ${
                    selectedSize === "50ML"
                      ? "border-red-500 bg-red-50 text-red-600"
                      : "border-gray-300 text-gray-700 hover:border-gray-400"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${
                      selectedSize === "50ML" ? "bg-red-500" : "border border-gray-400"
                    }`}></div>
                    50ML
                  </div>
                </button>
                <button
                  onClick={() => setSelectedSize("100ML")}
                  className={`px-6 py-3 rounded-full border-2 transition-all ${
                    selectedSize === "100ML"
                      ? "border-red-500 bg-red-50 text-red-600"
                      : "border-gray-300 text-gray-700 hover:border-gray-400"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${
                      selectedSize === "100ML" ? "bg-red-500" : "border border-gray-400"
                    }`}></div>
                    100ML
                  </div>
                </button>
              </div>
            </div>

            {/* Add to cart button */}
            <div className="mb-6">
              {isInCart ? (
                <Button disabled className="w-full bg-gray-400 cursor-not-allowed py-4 text-lg rounded-full">
                  Added to Cart
                </Button>
              ) : (
                <Button 
                  onClick={() => handleAddToCart(product.id)}
                  className="w-full bg-zinc-800 hover:bg-zinc-900 py-4 text-lg rounded-full text-white font-medium"
                >
                  ADD TO CART
                </Button>
              )}
            </div>

           
            {/* <div className="flex flex-wrap gap-2 mb-6">
              <button className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-50">
                About ▼
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-50">
                Notes + Ingredients ▼
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-50">
                Shipping + Returns ▼
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-50">
                FAQs ▼
              </button>
            </div> */}

            
            {/* <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700">
              <div className="grid grid-cols-1 gap-2">
                <div><strong>Top Notes:</strong> {product.top_notes}</div>
                <div><strong>Middle Notes:</strong> {product.middle_notes}</div>
                <div><strong>Base Notes:</strong> {product.base_notes}</div>
              </div>
              {product.description && (
                <p className="mt-3 text-gray-600">{product.description}</p>
              )}
              {product.tags && (
                <div className="flex gap-2 flex-wrap mt-3">
                  {product.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-white text-gray-600 px-2 py-1 rounded text-xs border"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div> */}
          </div>
        </div>

        {/* More products section */}
        <div className="mt-12">
          <h3 className="text-3xl font-bold mb-6">Explore More</h3>
          <NewProducts />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;