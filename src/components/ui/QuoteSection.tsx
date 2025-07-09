"use client"

import { useState, useEffect } from "react"

const quotes = [
  {
    text: "Elegance is the only beauty that never fades.",
    author: "Audrey Hepburn",
    category: "TIMELESS",
  },
  {
    text: "A woman's perfume tells more about her than her handwriting.",
    author: "Christian Dior",
    category: "ESSENCE",
  },
  {
    text: "Luxury must be comfortable, otherwise it is not luxury.",
    author: "Coco Chanel",
    category: "PHILOSOPHY",
  },
  {
    text: "Perfume is like a personal signature, which is why I like to mix my own.",
    author: "Princess Diana",
    category: "SIGNATURE",
  },
]

export default function QuoteSection() {
  const [currentQuote, setCurrentQuote] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentQuote((prev) => (prev + 1) % quotes.length)
        setIsVisible(true)
      }, 500)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-gold rounded-full opacity-20 animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-black/20 to-transparent" />

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Quote Category */}
        <div
          className={`transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="inline-block mb-8">
            <span className="text-zinc-300 text-xs tracking-[0.4em] font-light border border-gold/30 px-4 py-2 rounded-full">
              {quotes[currentQuote].category}
            </span>
          </div>
        </div>

        {/* Quote Text */}
        <div
          className={`transition-all duration-500 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="relative mb-12">
            {/* Opening Quote Mark */}
            <div className="absolute -top-8 -left-4 text-6xl text-gold/30 font-serif">"</div>

            <blockquote className="text-2xl md:text-4xl  lg:text-5xl font-semibold font-[Doren] text-white leading-relaxed tracking-wide">
              {quotes[currentQuote].text}
            </blockquote>

            {/* Closing Quote Mark */}
            <div className="absolute -bottom-8 -right-4 text-6xl text-gold/30 font-serif">"</div>
          </div>
        </div>

        {/* Author Attribution */}
        <div
          className={`transition-all duration-500 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50" />
            <cite className="text-white/80 text-lg font-light font-[montserrat]  not-italic">
              {quotes[currentQuote].author}
            </cite>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50" />
          </div>
        </div>

        {/* Quote Navigation Dots */}
        <div className="flex justify-center space-x-3">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsVisible(false)
                setTimeout(() => {
                  setCurrentQuote(index)
                  setIsVisible(true)
                }, 300)
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentQuote ? "bg-gold scale-125" : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to quote ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
      </div>
      <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
      </div>

      {/* Corner Accents */}
      <div className="absolute top-12 left-12 w-12 h-12 border-l border-t border-gold/20" />
      <div className="absolute top-12 right-12 w-12 h-12 border-r border-t border-gold/20" />
      <div className="absolute bottom-12 left-12 w-12 h-12 border-l border-b border-gold/20" />
      <div className="absolute bottom-12 right-12 w-12 h-12 border-r border-b border-gold/20" />

      {/* Subtle Brand Element */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gold/40 text-xs tracking-[0.3em] font-light">ÉLÉGANCE PARFUM</div>
      </div>
    </section>
  )
}
