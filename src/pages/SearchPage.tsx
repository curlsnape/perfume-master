"use client"

import { useState, useEffect, useRef } from "react"
import { MdClose } from "react-icons/md"
import { Button } from "@/components/ui/button"
import BackToTop from "@/components/BackToTop"
import { perfumeData } from "@/PerfumeData"
import { FaChevronLeft, FaChevronRight, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"
import { gsap } from "gsap"
import { Link } from "react-router-dom"
import PremiumHeroSection from "@/components/ui/HeroSection"

const getRandomRadius = () => {
  const radii = ["5px", "15px", "25px", "50px", "9999px"]
  return radii[Math.floor(Math.random() * radii.length)]
}

const generateColorFromString = (str) => {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }
  const hue = hash % 360
  return `hsl(${hue}, 70%, 80%)`
}

const isImageDark = (imageUrl) => {
  return new Promise((resolve) => {
    const img = new Image()
    img.crossOrigin = "Anonymous"
    img.src = imageUrl
    img.onload = () => {
      const canvas = document.createElement("canvas")
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext("2d")
      if (!ctx) return resolve(false)
      ctx.drawImage(img, 0, 0, img.width, img.height)
      const data = ctx.getImageData(0, 0, img.width, img.height).data
      let r = 0,
        g = 0,
        b = 0
      for (let i = 0; i < data.length; i += 4) {
        r += data[i]
        g += data[i + 1]
        b += data[i + 2]
      }
      const avg = (r + g + b) / (data.length / 4)
      resolve(avg < 128)
    }
    img.onerror = () => resolve(false)
  })
}

const tags = ["#new", "#Limited Edition", "#Soft", "#Moderate", "#Strong", "#Very Strong"]

// Mock function to determine gender category
const getGenderCategory = (perfume) => {
  if (perfume.tags?.some((tag) => tag.toLowerCase().includes("women") || tag.toLowerCase().includes("feminine"))) {
    return "Women"
  } else if (
    perfume.tags?.some((tag) => tag.toLowerCase().includes("men") || tag.toLowerCase().includes("masculine"))
  ) {
    return "Men"
  }
  return "Unisex"
}

// Mock function to get random rating
const getRandomRating = () => {
  const ratings = [4.0, 4.2, 4.4, 4.5, 4.6, 4.8, 5.0]
  return ratings[Math.floor(Math.random() * ratings.length)]
}

// Mock function to get random purchase count
const getRandomPurchaseCount = () => {
  return Math.floor(Math.random() * 1000) + 100
}

const SearchPage = () => {
  const uniqueBrands = Array.from(new Set(perfumeData.map((p) => p.inspired_by)))
  const [selectedTag, setSelectedTag] = useState(null)
  const [selectedBrand, setSelectedBrand] = useState(null)
  const [imageStyles, setImageStyles] = useState({})
  const [hoveredProduct, setHoveredProduct] = useState(null)
  const scrollRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const processImages = async () => {
      const styles = {}
      for (const perfume of perfumeData) {
        const dark = await isImageDark(perfume.image)
        styles[perfume.id] = {
          borderRadius: getRandomRadius(),
          backgroundColor: dark ? "#f0f0f0" : "linear-gradient(to right, #444, #222)",
        }
      }
      setImageStyles(styles)
    }
    processImages()
  }, [])

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
        },
      )
    }
  }, [selectedTag, selectedBrand])

  const filteredData = perfumeData.filter((item) => {
    const tagValue = selectedTag ? selectedTag.replace("#", "").toLowerCase() : ""

    const tagMatch = selectedTag
      ? item.tags?.some((tag) => tag.toLowerCase().includes(tagValue)) ||
        item.sillage?.toLowerCase().includes(tagValue) ||
        item.longevity?.toLowerCase().includes(tagValue) ||
        (tagValue === "new" && item.isNew) ||
        (tagValue === "limited edition" && item.isLimited)
      : true

    const brandMatch = selectedBrand ? item.inspired_by === selectedBrand : true

    return tagMatch && brandMatch
  })

  const scrollBrands = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 150, behavior: "smooth" })
    }
  }

  // Render stars for rating
  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-gold text-xs" />)
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-gold text-xs" />)
    }
    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-gray-400 text-xs" />)
    }
    return stars
  }

  return (
    <div className="relative bg-white min-h-screen">
      {/* Hero Banner Section */}
      <PremiumHeroSection />

      {/* White Background Section */}
      <div className="bg-white relative font-[montserrat] ">
        {/* Subtle Floating Particles for Premium Feel */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-gold rounded-full opacity-20 animate-float-elegant"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
          {/* Filter Tags */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {tags.map((tag, i) => (
              <button
                key={i}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`px-6 py-3 border rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                  selectedTag === tag
                    ? "bg-black text-white border-black shadow-lg shadow-black/20"
                    : "bg-white text-gray-700 border-gray-300 hover:border-gold hover:shadow-md hover:shadow-gold/10"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Results count and clear filters */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <p className="text-gray-600 font-medium text-2xl font-[Doren] tracking-wide">
              Showing <span className="font-semibold  text-black">{filteredData.length}</span> product
              {filteredData.length !== 1 ? "s" : ""}
            </p>
            {(selectedTag || selectedBrand) && (
              <button
                className="text-white px-6 py-2 bg-zinc-900 rounded-full text-sm hover:bg-black transition-all font-[montserrat]  duration-300 shadow-md"
                onClick={() => {
                  setSelectedTag(null)
                  setSelectedBrand(null)
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
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white text-gray-700 p-3 rounded-full shadow-lg border border-gray-200 hover:shadow-xl hover:border-gold/30 transition-all duration-300"
            >
              <FaChevronLeft />
            </button>
            <div ref={scrollRef} className="py-4 px-12 overflow-x-auto flex gap-3 scrollbar-hide">
              <Button
                className={`whitespace-nowrap border font-medium tracking-wide transition-all duration-300 ${
                  selectedBrand === null
                    ? "bg-black text-white border-black shadow-lg shadow-black/20"
                    : "bg-white text-gray-700 font-[montserrat] border-gray-300 hover:bg-gray-50 hover:border-gold/50 hover:shadow-md"
                }`}
                onClick={() => setSelectedBrand(null)}
              >
                All Brands
              </Button>
              {uniqueBrands.map((brand, index) => {
                const isSelected = selectedBrand === brand
                return (
                  <Button
                    key={index}
                    className={`whitespace-nowrap flex items-center gap-2 relative border font-medium tracking-wide transition-all duration-300 ${
                      isSelected
                        ? "bg-black text-white border-black shadow-lg shadow-black/20"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gold/50 hover:shadow-md"
                    }`}
                    onClick={() => setSelectedBrand(isSelected ? null : brand)}
                  >
                    <span>{brand}</span>
                    {isSelected && (
                      <MdClose className="text-zinc-900 w-4 h-4 bg-white rounded-full absolute -top-2 -right-2 shadow-md" />
                    )}
                  </Button>
                )
              })}
            </div>
            <button
              onClick={() => scrollBrands(1)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white text-gray-700 p-3 rounded-full shadow-lg border font-[montserrat] border-gray-200 hover:shadow-xl hover:border-gold/30 transition-all duration-300"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" ref={gridRef}>
            {filteredData.length > 0 ? (
              filteredData.map((perfume) => {
                const rating = getRandomRating()
                const purchaseCount = getRandomPurchaseCount()
                const genderCategory = getGenderCategory(perfume)
                const originalPrice = Math.floor(perfume.price_inr * 1.3)
                return (
                  <Link to={`/search/${perfume.id}`} key={perfume.id}>
                    <div
                      className="bg-white font-[montserrat] border border-gray-200 rounded-2xl hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 transform hover:-translate-y-3 group relative overflow-hidden"
                      onMouseEnter={() => setHoveredProduct(perfume.id)}
                      onMouseLeave={() => setHoveredProduct(null)}
                    >
                      {/* Premium Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Gender Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span
                          className={`px-3 py-1 border text-xs font-medium rounded-full ${
                            genderCategory === "Women"
                              ? "bg-pink-50 text-pink-800 border-pink-200"
                              : genderCategory === "Men"
                                ? "bg-blue-50 text-zinc-800 border-blue-200"
                                : "bg-purple-50 text-zinc-800 border-purple-200"
                          }`}
                        >
                          {genderCategory}
                        </span>
                      </div>

                      {/* Product Image - Reduced Height */}
                      <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center p-6 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <img
                          src={
                            hoveredProduct === perfume.id && perfume.multi_images?.[1]
                              ? perfume.multi_images[1]
                              : perfume.image
                          }
                          alt={perfume.name}
                          className="w-full h-28 overflow-hidden rounded-xl object-contain transition-all duration-700 group-hover:scale-110 relative z-10"
                        />
                      </div>

                      {/* Product Info - Compact */}
                      <div className="p-5 relative z-10">
                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center gap-1">{renderStars(rating)}</div>
                          <span className="text-xs text-gray-600 font-light">({rating})</span>
                        </div>

                        {/* Product Name */}
                        <h3 className="font-semibold font-[doren] text-lg text-black mb-2 uppercase tracking-wider leading-tight group-hover:text-gray-800 transition-colors duration-300">
                          {perfume.name}
                        </h3>

                        {/* Price Section - Compact */}
                        <div className="mb-3">
                          <div className="text-xs text-gray-500 mb-1 line-through">Reg: ₹{originalPrice}</div>
                          <div className="flex items-center justify-between">
                            <div className="text-xl font-bold text-black flex items-center">₹{perfume.price_inr}</div>
                            <div className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                              10% OFF
                            </div>
                          </div>
                        </div>

                        {/* Footer - Compact */}
                        <div className="border-t border-gray-200 pt-3">
                          <div className="text-xs text-gold uppercase tracking-wider font-medium">
                            Premium Collection
                          </div>
                        </div>
                      </div>

                      {/* Premium Border Effect */}
                      <div className="absolute inset-0 rounded-2xl border border-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </Link>
                )
              })
            ) : (
              <div className="col-span-full text-center py-20">
                <div className="bg-gray-50 rounded-2xl p-12 border border-gray-200">
                  <p className="text-2xl text-gray-600 mb-6 font-light">No perfumes match the selected filters.</p>
                  <button
                    onClick={() => {
                      setSelectedTag(null)
                      setSelectedBrand(null)
                    }}
                    className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium tracking-wide shadow-lg"
                  >
                    Clear all filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <BackToTop />

      <style jsx>{`
        .metal-3d {
          background: linear-gradient(
            90deg,
            #27272a 0%,
            #2f2f33 20%,
            #d4d4d8 50%,
            #2f2f33 80%,
            #27272a 100%
          );
          background-size: 200% auto;
          background-position: 0% center;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: shimmer 3s linear infinite;
        }
        @keyframes shimmer {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        .bg-gradient-radial {
          background: radial-gradient(
            circle at center,
            var(--tw-gradient-stops)
          );
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

export default SearchPage
