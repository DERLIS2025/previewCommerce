'use client'
import { useEffect, useRef } from 'react'

const banners = [
  "https://images.unsplash.com/photo-1593691509543-c55fb32c8b84",
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
]

export default function HomeBannerSlider() {
  const sliderRef = useRef(null)
  const indexRef = useRef(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!sliderRef.current) return

      indexRef.current = (indexRef.current + 1) % banners.length

      sliderRef.current.scrollTo({
        left: sliderRef.current.offsetWidth * indexRef.current,
        behavior: "smooth",
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div
        ref={sliderRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar rounded-2xl"
      >
        {banners.map((img, index) => (
          <div
            key={index}
            className="min-w-full snap-start"
          >
            <img
              src={img}
              alt="banner"
              className="w-full h-[200px] sm:h-[260px] lg:h-[340px] object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>

      {/* indicadores */}
      <div className="flex justify-center mt-4 gap-2">
        {banners.map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 bg-gray-300 rounded-full"
          />
        ))}
      </div>
    </section>
  )
}
