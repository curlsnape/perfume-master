"use client"

import { useState, useEffect } from "react"

export default function Component() {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const totalDuration = 2000 // 4 seconds total duration
    const startTime = Date.now()
    const endTime = startTime + totalDuration

    const updateProgress = () => {
      const now = Date.now()
      const elapsed = now - startTime
      const newProgress = Math.min((elapsed / totalDuration) * 100, 100)
      
      setProgress(newProgress)

      if (now < endTime) {
        requestAnimationFrame(updateProgress)
      } else {
        setProgress(100)
        setTimeout(() => setIsComplete(true), 300) // Small delay after reaching 100%
      }
    }

    requestAnimationFrame(updateProgress)

    return () => {
      // Cleanup if needed
    }
  }, [])

  if (isComplete) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50 animate-fade-out">
        <div className="text-white text-2xl font-light tracking-[0.2em] animate-fade-out">WELCOME</div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-black via-zinc-900 to-black flex items-center justify-center z-50 overflow-hidden">
      {/* Main Content */}
      <div className="text-center space-y-8 relative z-10">
        {/* Brand Name */}
        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl font-[Doren] font-medium uppercase text-white  mb-2">Calyx</h1>
          <p className="text-white text-sm tracking-[0.4em] font-light opacity-80">PARFUM DE LUXE</p>
        </div>

        {/* Perfume Bottle Silhouette */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <svg width="60" height="120" viewBox="0 0 60 120" className="text-gold opacity-60" fill="currentColor">
              {/* Bottle Cap */}
              <rect x="20" y="0" width="20" height="15" rx="2" />
              <rect x="18" y="10" width="24" height="8" rx="1" />

              {/* Bottle Neck */}
              <rect x="22" y="18" width="16" height="20" />

              {/* Bottle Body */}
              <path d="M15 38 Q15 35 18 35 L42 35 Q45 35 45 38 L45 105 Q45 110 40 110 L20 110 Q15 110 15 105 Z" />

              {/* Liquid */}
              <path
                d="M18 40 L42 40 L42 105 Q42 107 40 107 L20 107 Q18 107 18 105 Z"
                className="text-gold opacity-40"
                fill="currentColor"
              />
            </svg>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gold opacity-20 blur-xl rounded-full animate-pulse" />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto space-y-4">
          <div className="relative h-px bg-white/20 rounded-full overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-gold to-yellow-300 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
            <div
              className="absolute top-0 h-full w-8 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"
              style={{ left: `${progress - 4}%` }}
            />
          </div>

          {/* Progress Percentage */}
          {/* <div className="text-white/80 text-sm font-light tracking-[0.2em]">{Math.round(progress)}%</div> */}
        </div>

        {/* Loading Text */}
        <div className="text-white/60 text-xs tracking-[0.3em] font-light animate-pulse">CRAFTING EXCELLENCE</div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-gold/30" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-gold/30" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-gold/30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-gold/30" />
    </div>
  )
}