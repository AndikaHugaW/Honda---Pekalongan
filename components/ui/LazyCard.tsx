'use client'

import { useState, useEffect, useRef, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface LazyCardProps {
  children: ReactNode
  index?: number
  className?: string
}

export default function LazyCard({ children, index = 0, className = '' }: LazyCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load first 3 cards immediately
    if (index < 3) {
      setIsVisible(true)
      setHasLoaded(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            // Delay loading slightly for better performance
            setTimeout(() => {
              setHasLoaded(true)
            }, 100)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        rootMargin: '50px', // Start loading 50px before card enters viewport
        threshold: 0.01,
      }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [index])

  return (
    <div ref={cardRef} className={className}>
      {isVisible ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={hasLoaded ? { opacity: 1, y: 0 } : { opacity: 0.5, y: 10 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          {children}
        </motion.div>
      ) : (
        // Placeholder skeleton while waiting to load
        <div className="bg-gray-900 rounded-2xl shadow-lg border border-white/10 overflow-hidden animate-pulse">
          <div className="h-64 bg-gray-800" />
          <div className="p-6 space-y-4">
            <div className="h-6 bg-gray-800 rounded w-3/4" />
            <div className="h-4 bg-gray-800 rounded w-1/2" />
            <div className="space-y-2">
              <div className="h-3 bg-gray-800 rounded" />
              <div className="h-3 bg-gray-800 rounded" />
              <div className="h-3 bg-gray-800 rounded" />
            </div>
            <div className="h-10 bg-gray-800 rounded" />
          </div>
        </div>
      )}
    </div>
  )
}

