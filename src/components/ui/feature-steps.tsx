"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface Feature {
  step: string
  title?: string
  content: string
  image: string
}

interface FeatureStepsProps {
  features: Feature[]
  className?: string
  title?: string
  autoPlayInterval?: number
}

export function FeatureSteps({
  features,
  className,
  title = "How to get Started",
  autoPlayInterval = 3000,
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length)
        setProgress(0)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [progress, features.length, autoPlayInterval])

  return (
    <div className={`p-8 md:p-12 ${className || ""}`}>
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-14 text-center text-text-primary tracking-[-0.04em]">
          {title}
        </h2>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Steps List */}
          <div className="order-2 md:order-1 space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-5 cursor-pointer"
                animate={{ opacity: index === currentFeature ? 1 : 0.35 }}
                transition={{ duration: 0.5 }}
                onClick={() => { setCurrentFeature(index); setProgress(0); }}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 shrink-0 mt-0.5 transition-all duration-500 ${
                    index === currentFeature
                      ? "bg-primary border-primary text-white scale-110 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                      : index < currentFeature
                        ? "bg-transparent border-text-tertiary text-text-tertiary"
                        : "bg-transparent border-text-muted text-text-muted"
                  }`}
                >
                  {index <= currentFeature ? (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    <span className="text-sm font-semibold">{index + 1}</span>
                  )}
                </div>

                <div className="flex-1">
                  <h3 className={`text-lg md:text-xl font-bold mb-1.5 transition-colors duration-300 ${
                    index === currentFeature ? "text-text-primary" : "text-text-secondary"
                  }`}>
                    {feature.title || feature.step}
                  </h3>
                  <p className="text-sm md:text-[0.9rem] text-text-secondary leading-relaxed">
                    {feature.content}
                  </p>
                  {index === currentFeature && (
                    <div className="mt-3 h-[3px] w-full bg-elevated rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image Preview */}
          <div className="order-1 md:order-2 relative h-[280px] md:h-[380px] lg:h-[450px] overflow-hidden rounded-2xl border border-border-default bg-card">
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 rounded-2xl overflow-hidden"
                      initial={{ y: 100, opacity: 0, rotateX: -20 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -100, opacity: 0, rotateX: 20 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.step}
                        className="w-full h-full object-cover"
                        width={1000}
                        height={600}
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-base via-base/40 to-transparent" />
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
