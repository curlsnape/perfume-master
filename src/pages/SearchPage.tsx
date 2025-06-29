import { useState, useEffect, useRef } from "react";
import { MdClose, MdCurrencyRupee } from "react-icons/md";
import { Button } from "@/components/ui/button";
import BackToTop from "@/components/BackToTop";
import { perfumeData } from "@/PerfumeData";
import { FaChevronLeft, FaChevronRight, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const getRandomRadius = () => {
  const radii = ["5px", "15px", "25px", "50px", "9999px"];
  return radii[Math.floor(Math.random() * radii.length)];
};

const generateColorFromString = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = hash % 360;
  return `hsl(${hue}, 70%, 80%)`;
};

const isImageDark = (imageUrl) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imageUrl;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return resolve(false);
      ctx.drawImage(img, 0, 0, img.width, img.height);
      const data = ctx.getImageData(0, 0, img.width, img.height).data;
      let r = 0,
        g = 0,
        b = 0;
      for (let i = 0; i < data.length; i += 4) {
        r += data[i];
        g += data[i + 1];
        b += data[i + 2];
      }
      const avg = (r + g + b) / (data.length / 4);
      resolve(avg < 128);
    };
    img.onerror = () => resolve(false);
  });
};

const tags = [
  "#new",
  "#Limited Edition",
  "#Soft",
  "#Moderate",
  "#Strong",
  "#Very Strong",
];

// Mock function to determine gender category
const getGenderCategory = (perfume) => {
  if (perfume.tags?.some(tag => tag.toLowerCase().includes('women') || tag.toLowerCase().includes('feminine'))) {
    return 'Women';
  } else if (perfume.tags?.some(tag => tag.toLowerCase().includes('men') || tag.toLowerCase().includes('masculine'))) {
    return 'Men';
  }
  return 'Unisex';
};

// Mock function to get random rating
const getRandomRating = () => {
  const ratings = [4.0, 4.2, 4.4, 4.5, 4.6, 4.8, 5.0];
  return ratings[Math.floor(Math.random() * ratings.length)];
};

// Mock function to get random review count
// const getRandomReviewCount = () => {
//   return Math.floor(Math.random() * 10000) + 1000;
// };

// Mock function to get random purchase count
const getRandomPurchaseCount = () => {
  return Math.floor(Math.random() * 1000) + 100;
};

const SearchPage = () => {
  const uniqueBrands = Array.from(
    new Set(perfumeData.map((p) => p.inspired_by))
  );

  const [selectedTag, setSelectedTag] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [imageStyles, setImageStyles] = useState({});
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const scrollRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const processImages = async () => {
      const styles = {};
      for (const perfume of perfumeData) {
        const dark = await isImageDark(perfume.image);
        styles[perfume.id] = {
          borderRadius: getRandomRadius(),
          backgroundColor: dark
            ? "#f0f0f0"
            : "linear-gradient(to right, #444, #222)",
        };
      }
      setImageStyles(styles);
    };
    processImages();
  }, []);

  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    }
  }, [selectedTag, selectedBrand]);

  const filteredData = perfumeData.filter((item) => {
    const tagValue = selectedTag
      ? selectedTag.replace("#", "").toLowerCase()
      : "";
    const tagMatch = selectedTag
      ? item.tags?.map((t) => t.toLowerCase()).includes(tagValue) ||
        item.sillage.toLowerCase() === tagValue
      : true;
    const brandMatch = selectedBrand
      ? item.inspired_by === selectedBrand
      : true;
    return tagMatch && brandMatch;
  });

  const scrollBrands = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 150, behavior: "smooth" });
    }
  };

  // Render stars for rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-black text-xs" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-black text-xs" />);
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-black text-xs" />);
    }
    return stars;
  };

  return (
    <div className="relative bg-white">
      {/* Hero Banner Section */}
      <div className="relative bg-gradient-to-r from-amber-900 via-orange-800 to-red-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-6 py-16 text-center">
          <h1 className="text-6xl font-bold mb-4 tracking-wider" style={{ fontFamily: 'serif' }}>
            Bonjour
          </h1>
          <div className="text-4xl font-light mb-6 tracking-widest">
            NOLITA
          </div>
          <div className="bg-white text-black px-8 py-4 rounded-lg inline-block mb-6 shadow-2xl">
            <div className="text-sm font-medium mb-1">Our NYC Boutique</div>
            <div className="text-lg font-bold">Grand Opening Party!</div>
            <div className="text-sm mt-2">
              Starting <span className="font-bold">June 27th</span> at <span className="font-bold">1:30PM</span>
            </div>
            <div className="text-sm">
              until <span className="font-bold">June 29th</span> at <span className="font-bold">7PM</span>
            </div>
          </div>
          <button className="bg-transparent border-2 ml-5 border-white text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all duration-300">
            LEARN MORE
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filter Tags */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {tags.map((tag, i) => (
            <button
              key={i}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              className={`px-6 py-2 border border-gray-300 rounded-full text-sm transition-all duration-300 ${
                selectedTag === tag
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-700 hover:border-gray-400"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results count and clear filters */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <p className="text-gray-600">
            Showing{" "}
            <span className="font-semibold text-black">
              {filteredData.length}
            </span>{" "}
            product{filteredData.length !== 1 ? "s" : ""}
          </p>
          {(selectedTag || selectedBrand) && (
            <button
              className="text-white px-4 py-2 bg-red-500 rounded-full text-sm hover:bg-red-600 transition-colors"
              onClick={() => {
                setSelectedTag(null);
                setSelectedBrand(null);
              }}
            >
              Clear All
            </button>
          )}
        </div>

        {/* Brand Filter Scroll */}
        <div className="relative w-full mb-12">
          <button
            onClick={() => scrollBrands(-1)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white text-gray-700 p-2 rounded-full shadow-lg border"
          >
            <FaChevronLeft />
          </button>

          <div
            ref={scrollRef}
            className="py-4 px-12 overflow-x-auto flex gap-3 scrollbar-hide"
          >
            <Button
              className={`whitespace-nowrap border border-gray-300 ${
                selectedBrand === null 
                  ? "bg-black text-white" 
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => setSelectedBrand(null)}
            >
              All Brands
            </Button>
            {uniqueBrands.map((brand, index) => {
              const isSelected = selectedBrand === brand;
              return (
                <Button
                  key={index}
                  className={`whitespace-nowrap flex items-center gap-2 relative border ${
                    isSelected ? "bg-black text-white border-black" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                  }`}
                  onClick={() => setSelectedBrand(isSelected ? null : brand)}
                >
                  <span>{brand}</span>
                  {isSelected && (
                    <MdClose className="text-red-500 w-4 h-4 bg-white rounded-full absolute -top-2 -right-2 shadow-md" />
                  )}
                </Button>
              );
            })}
          </div>

          <button
            onClick={() => scrollBrands(1)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white text-gray-700 p-2 rounded-full shadow-lg border"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Products Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          ref={gridRef}
        >
          {filteredData.length > 0 ? (
            filteredData.map((perfume) => {
              const rating = getRandomRating();
              // const reviewCount = getRandomReviewCount();
              const purchaseCount = getRandomPurchaseCount();
              const genderCategory = getGenderCategory(perfume);
              const originalPrice = Math.floor(perfume.price_inr * 1.3);
              
              return (
                <Link to={`/search/${perfume.id}`} key={perfume.id}>
                  <div
                    className="bg-white border border-gray-200 rounded-xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group"
                    onMouseEnter={() => setHoveredProduct(perfume.id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    {/* Gender Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className={`px-3 py-1 border text-xs font-medium ${
                        genderCategory === 'Women' ? 'bg-pink-50 text-pink-600 border-pink-200' :
                        genderCategory === 'Men' ? 'bg-blue-50 text-blue-600 border-blue-200' :
                        'bg-gray-50 text-gray-600 border-gray-200'
                      }`}>
                        {genderCategory}
                      </span>
                    </div>

                   
                    <div className="relative h-80  rounded-xl flex items-center justify-center p-8 overflow-hidden">
                      <img
                        src={hoveredProduct === perfume.id && perfume.multi_images?.[1] 
                          ? perfume.multi_images[1] 
                          : perfume.image}
                        alt={perfume.name}
                        className="w-full h-32  overflow-hidden rounded-xl object-contain transition-all duration-700 group-hover:scale-110"
                      />
                      
                     
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-orange-500/10 to-orange-400/40 pointer-events-none"></div>
                    </div>

                    
                    <div className="p-6">
                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1">
                          {renderStars(rating)}
                        </div>
                        {/* <span className="text-sm text-gray-600">{reviewCount}</span> */}
                      </div>

                      
                      {/* <div className="flex items-center gap-2 mb-4">
                        <div className="w-4 h-4 rounded-full bg-orange-100 flex items-center justify-center">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        </div>
                        <span className="text-sm text-gray-600">
                          <strong>{purchaseCount}</strong> bought in 1 hour!
                        </span>
                      </div> */}

                      {/* Product Name - Exactly like reference */}
                      <h3 className="font-bold text-xl text-black mb-2 uppercase tracking-wider leading-tight">
                        {perfume.name}
                      </h3>

                      {/* Price Section - Exactly like reference */}
                      <div className="mb-3">
                        <div className="text-sm text-gray-500 mb-1">Reg: ₹{originalPrice}</div>
                        <div className="flex items-center justify-between">
                          <div className="text-2xl font-bold text-red-500 flex items-center">
                            ₹{perfume.price_inr}
                          </div>
                          <div className="text-red-500 text-sm font-medium">10% OFF</div>
                        </div>
                      </div>

                 
                      <div className="border-t border-gray-100 pt-4">
                        <div className="text-xs text-gray-400 uppercase tracking-wider">
                          Premium Collection
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-2xl text-gray-400 mb-6">No perfumes match the selected filters.</p>
              <button
                onClick={() => {
                  setSelectedTag(null);
                  setSelectedBrand(null);
                }}
                className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Bottom CTA matching reference style */}
        {filteredData.length > 0 && (
          <div className="mt-20 text-center">
            <div className="inline-block bg-gradient-to-r from-amber-900 to-orange-800 text-white px-8 py-4 rounded-lg shadow-2xl">
              <div className="text-sm font-medium mb-1">Get 10% OFF</div>
              <div className="text-lg font-bold">MEMBERS ONLY</div>
            </div>
          </div>
        )}
      </div>
      <BackToTop />
    </div>
  );
};

export default SearchPage;