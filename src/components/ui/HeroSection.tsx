"use client"

import { easeIn, motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function PremiumHeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-[10s] ease-out"
        src="/assets/ProdBanner/ProductBanner.jpg"
        alt="Calyx Fragrance Background"
      />

      {/* Enhanced Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

      {/* Floating Particles */}
      {/* <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold rounded-full opacity-20 animate-float-elegant"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div> */}

      {/* Main Content */}
      <div className="relative h-full w-full flex flex-col py-24 justify-center items-center z-10">
        <div className="container mx-auto px-8 flex flex-col items-center">
          {/* Premium Brand Badge */}
          {/* <div
            className={`mb-8 transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-block border border-gold/40 px-6 py-2 rounded-full backdrop-blur-sm bg-white/5">
              <span className="text-gold text-xs tracking-[0.4em] font-light">SIGNATURE COLLECTION</span>
            </div>
          </div> */}

          {/* Main Heading with Enhanced Animation */}
          <div className="relative mb-8">
            <motion.h2 initial={{scale:0,y:80,opacity:0}} whileInView={{scale:1,y:0,opacity:1}} transition={{duration:1.8,ease:easeIn}}
              className={`text-6xl md:text-8xl lg:text-9xl text-center font-medium font-[doren] tracking-[0.1em] text-white transition-all duration-1200 delay-500 ${
                isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
              }`}
            >
              CALYX
            </motion.h2>

            {/* Glow Effect Behind Text */}
            <div
              className={`absolute inset-0 text-6xl md:text-8xl lg:text-9xl text-center font-medium font-[doren] tracking-[0.1em] text-gold/20 blur-sm transition-all duration-1200 delay-700 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
            >
              CALYX
            </div>
          </div>

          {/* Decorative Divider */}
          <div
            className={`flex items-center space-x-4 mb-12 transition-all duration-1000 delay-900 ${
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
            
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
          </div>

          {/* Enhanced Subheading */}
          <div className="w-full max-w-4xl">
            <motion.h3 initial={{scale:0,y:200,opacity:0}} whileInView={{scale:1,y:0,opacity:1}} transition={{duration:1.8,ease:easeIn}}
              className={`font-[poppins] text-2xl md:text-3xl lg:text-4xl text-white text-center leading-relaxed font-light tracking-wide transition-all duration-1000 delay-1100 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="inline-block">Experience the essence of</span>{" "}
              <span className="text-gold font-normal">timeless elegance</span>{" "}
              <span className="inline-block">crafted for the discerning soul.</span>
            </motion.h3>
          </div>

          {/* Call to Action */}
        

          {/* Scroll Indicator */}
          <div
            className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex flex-col items-center space-y-2 animate-bounce">
              <div className="text-white/60 text-xs tracking-[0.2em] font-light">SCROLL</div>
              <div className="w-px h-8 bg-gradient-to-b from-gold/60 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Ambient Light Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/3 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />
    </div>
  )
}
