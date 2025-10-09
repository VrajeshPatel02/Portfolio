"use client"

import React, { useEffect, useState } from "react"
import { Marquee } from "@/components/ui/marquee"
import Image from "next/image"

const TechStack = () => {
  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("/api/techstack")
        const data = await res.json()
        setImages(data.images || [])
      } catch (err) {
        console.error("Error fetching images:", err)
      }
    }
    fetchImages()
  }, [])

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee className="gap-6">
        {images.map((src, i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-full bg-[var(--bg-800)] px-5 py-2 shadow-sm"
          >
            <Image
              src={src}
              alt={`TechStack-${i}`}
              width={20}
              height={20}
            />
            <p className="text-sm font-medium capitalize tracking-wide">
              {src.slice(11, -4)}
            </p>
          </div>
        ))}
      </Marquee>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background"></div>
    </div>
  )
}

export default TechStack
