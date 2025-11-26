'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { FadeIn, StaggerContainer, StaggerItem, HoverScale } from '@/components/ui/animations'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

// FAQ Accordion Component
function FAQAccordion({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      className="border-b border-gray-800 pb-4"
      initial={false}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left py-2 group"
      >
        <span className="text-white font-medium text-base group-hover:text-red-500 transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 ml-4"
        >
          <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-gray-400 text-sm leading-relaxed pt-2">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [currentCarIndex, setCurrentCarIndex] = useState(0)
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0)

  // Hero Images Array
  const heroImages = [
    '/images/home/hero/hero-1.png',
    '/images/home/hero/hero-2.jpg',
    '/images/home/hero/hero-3.jpg',
  ]

  // Auto-rotate hero images every 8 seconds (5s transition + 3s display)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [heroImages.length])

  // Sample Car Data for Showcase
  const showcaseCars = [
    {
      id: 1,
      model: 'Civic',
      name: 'Honda Civic',
      description: 'A fusion of elegance and innovation, it offers unrivaled performance and sustainability. With its sleek design and intuitive features, every drive is a testament to the future of automotive excellence.',
      mainImage: '/images/home/cars/car-civic-1.jpg',
      thumbnails: [
        '/images/home/cars/car-civic-2.jpg',
        '/images/home/cars/car-civic-3.jpg',
      ],
    },
    {
      id: 2,
      model: 'CR-V',
      name: 'Honda CR-V',
      description: 'Premium SUV dengan ruang kabin luas dan fitur keselamatan lengkap. Ideal untuk petualangan keluarga dengan performa tangguh dan kenyamanan maksimal.',
      mainImage: '/images/home/cars/car-crv-1.png',
      thumbnails: [
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      ],
    },
    {
      id: 3,
      model: 'HR-V',
      name: 'Honda HR-V',
      description: 'Crossover stylish dengan desain modern dan efisiensi bahan bakar tinggi. Cocok untuk gaya hidup urban dengan teknologi canggih.',
      mainImage: '/images/home/cars/car-hrv-1.png',
      thumbnails: [
        'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      ],
    },
    {
      id: 4,
      model: 'Brio',
      name: 'Honda Brio',
      description: 'City car lincah dengan desain kompak dan irit bahan bakar. Pilihan tepat untuk mobilitas perkotaan dengan harga terjangkau.',
      mainImage: '/images/home/cars/car-brio-1.png',
      thumbnails: [
        'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      ],
    },
    {
      id: 5,
      model: 'Accord',
      name: 'Honda Accord',
      description: 'Sedan mewah dengan teknologi hybrid canggih dan kenyamanan maksimal. Pengalaman berkendara premium untuk keluarga modern.',
      mainImage: '/images/home/cars/car-accord-1.jpg',
      thumbnails: [
        '/images/home/cars/car-accord-2.png',
        '/images/home/cars/car-accord-3.jpg',
      ],
    },
  ]

  const currentCar = showcaseCars[currentCarIndex]

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section - Split Layout */}
      <section className="relative min-h-screen flex overflow-hidden pt-20">
        {/* Left Panel - Dark Background Overlay */}
        <motion.div
          className="absolute left-0 top-20 bottom-0 w-full lg:w-[25%] bg-gradient-to-br from-gray-900 via-gray-800 to-black z-20"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Decorative Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(239,68,68,0.1),transparent_70%)]" />
        </motion.div>

        {/* Hero Content Overlay - Badge, Judul, Deskripsi, Buttons */}
        <div className="absolute left-8 sm:left-12 lg:left-16 xl:left-20 top-1/2 -translate-y-1/2 z-30 pr-8 sm:pr-12 lg:pr-16 xl:pr-20 pt-20 lg:pt-0 w-[calc(100%-4rem)] sm:w-[calc(100%-6rem)] lg:w-[calc(100%-8rem)] xl:w-[calc(100%-10rem)]">
          <div className="space-y-6 lg:space-y-8">
            {/* Badge "Wujudkan Impian Anda" */}
            <motion.div
              className="max-w-2xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  className="w-1 h-12 bg-gradient-to-b from-red-600 to-red-500 rounded-full"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
                />
                <motion.span
                  className="text-xs sm:text-sm font-semibold text-white/90 uppercase tracking-[0.2em] drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Wujudkan Impian Anda
                </motion.span>
              </div>
            </motion.div>

            {/* Main Headline - 2 Baris Melebar ke Kanan Menimpa Image */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.2] tracking-tight w-full"
              initial={{ opacity: 0, y: 30, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="block text-white drop-shadow-[0_4px_40px_rgba(0,0,0,0.95)] [text-shadow:_0_4px_60px_rgb(0_0_0_/_95%)]">
                Pelayanan Berkualitas
              </span>
              <span className="block mt-2 lg:mt-3 text-white drop-shadow-[0_4px_40px_rgba(0,0,0,0.95)] [text-shadow:_0_4px_60px_rgb(0_0_0_/_95%)]">
                untuk Pengendara{' '}
                <span className="text-red-500 drop-shadow-[0_4px_40px_rgba(239,68,68,0.9)] [text-shadow:_0_4px_60px_rgb(239_68_68_/_90%)]">
                  Berkualitas
                </span>
              </span>
            </motion.h1>

            {/* Description dan Buttons Container */}
            <div className="max-w-2xl space-y-6 lg:space-y-8">
              {/* Description */}
              <motion.p
                className="text-base sm:text-lg text-white/90 leading-relaxed drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                Showroom resmi Honda di Pekalongan menawarkan berbagai pilihan mobil Honda terbaru 
                dengan kualitas terjamin, pelayanan profesional, dan komitmen untuk memberikan 
                pengalaman terbaik bagi setiap pelanggan.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <Link href="/mobil">
                  <motion.button
                    className="px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-red-600 to-red-500 rounded-lg shadow-xl hover:shadow-2xl relative overflow-hidden group uppercase tracking-wide"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">Lihat Koleksi</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </Link>
                  <Link href="/service">
                    <motion.button
                      className="px-8 py-4 text-base font-semibold text-white bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-200 uppercase tracking-wide"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Layanan Kami
                    </motion.button>
                  </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Right Panel - Image Background (Full Width Behind) */}
        <motion.div
          className="relative w-full h-screen flex items-center justify-center overflow-hidden z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Background Image - Auto Rotate */}
          <AnimatePresence>
            <motion.div
              key={currentHeroIndex}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 5,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <Image
                src={heroImages[currentHeroIndex]}
                alt="Hero Image"
                fill
                className="object-cover object-left-center"
                priority={currentHeroIndex === 0}
                unoptimized
              />
            </motion.div>
          </AnimatePresence>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-gray-900/50 via-gray-900/20 to-transparent" />
          
          {/* Shimmer Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Video Section - Bottom Right */}
          <motion.div
            className="absolute bottom-8 right-8 z-10 max-w-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <div className="bg-black/70 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/10">
              <motion.div
                className="mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
              >
                <h3 className="text-xl font-bold text-white mb-1">Refine, Restore, Renew</h3>
                <p className="text-sm text-white/80">Watch the video</p>
              </motion.div>
              
              <HoverScale scale={1.05}>
                <motion.button
                  onClick={() => setIsVideoOpen(true)}
                  className="relative w-full aspect-video rounded-xl overflow-hidden group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('/images/home/hero/hero-1.png')`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Play Button */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.div
                      className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl"
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <svg
                        className="w-6 h-6 text-gray-900 ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </motion.div>
                  </motion.div>
                </motion.button>
              </HoverScale>
            </div>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-20 left-8 w-32 h-32 bg-red-600/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-20 left-12 w-24 h-24 bg-orange-500/20 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          />
        </motion.div>

            {/* Mobile Image */}
            <div className="lg:hidden absolute inset-0 w-full h-full opacity-30 -z-0">
              <AnimatePresence>
                <motion.div
                  key={currentHeroIndex}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 5,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                >
                  <Image
                    src={heroImages[currentHeroIndex]}
                    alt="Hero Image"
                    fill
                    className="object-cover object-left-center"
                    priority={currentHeroIndex === 0}
                    unoptimized
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/80 to-gray-900" />
            </div>
      </section>

      {/* Partner Logos Section */}
      <section className="py-16 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Infinite Scroll Container */}
          <div className="relative overflow-hidden">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />
            
            <motion.div
              className="flex gap-12 lg:gap-16 items-center"
              animate={{
                x: ['0%', '-33.333%'], // Move by one set (since we have 3 duplicates)
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 25,
                  ease: 'linear',
                },
              }}
              style={{
                width: 'max-content',
              }}
            >
              {/* Duplicate logos 3 times for seamless infinite loop */}
              {[...Array(3)].map((_, loopIndex) => (
                <div key={loopIndex} className="flex gap-12 lg:gap-16 items-center flex-shrink-0">
                  {[
                    { name: 'Motiva', src: '/partners/motiva.svg' },
                    { name: 'Stray.', src: '/partners/stray.svg' },
                    { name: 'CUCHEN*', src: '/partners/cuchen.svg' },
                    { name: 'Drop estate', src: '/partners/drop-estate.svg' },
                    { name: 'rocketlan', src: '/partners/rocketlan.svg' },
                    { name: 'webpt', src: '/partners/webpt.svg' },
                    { name: 'Honda', src: '/partners/honda.svg' },
                    { name: 'Toyota', src: '/partners/toyota.svg' },
                    { name: 'Mitsubishi', src: '/partners/mitsubishi.svg' },
                    { name: 'Suzuki', src: '/partners/suzuki.svg' },
                    { name: 'Nissan', src: '/partners/nissan.svg' },
                    { name: 'Mazda', src: '/partners/mazda.svg' },
                    { name: 'Hyundai', src: '/partners/hyundai.svg' },
                    { name: 'Kia', src: '/partners/kia.svg' },
                    { name: 'Daihatsu', src: '/partners/daihatsu.svg' },
                  ].map((partner, index) => (
                    <motion.div
                      key={`${loopIndex}-${index}`}
                      className="flex-shrink-0 flex items-center justify-center min-w-[140px] lg:min-w-[180px] h-20"
                      whileHover={{ scale: 1.1, opacity: 0.8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image
                        src={partner.src}
                        alt={partner.name}
                        width={120}
                        height={60}
                        unoptimized
                        className="object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-200"
                        style={{ maxWidth: '120px', maxHeight: '60px' }}
                        onError={(e) => {
                          // Fallback jika file tidak ditemukan
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                          const fallback = target.parentElement?.querySelector('.fallback-text')
                          if (fallback) {
                            (fallback as HTMLElement).style.display = 'block'
                          }
                        }}
                      />
                      <span className="fallback-text text-gray-300 text-lg font-bold uppercase tracking-wider" style={{ display: 'none' }}>
                        {partner.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Car Showcase Section */}
      <section className="relative min-h-screen bg-gray-900 overflow-hidden">
        {/* Main Image Background */}
        <div className="relative w-full h-screen">
          <motion.div
            key={currentCarIndex}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${currentCar.mainImage}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
          </motion.div>

          {/* Large Text Overlay "MODEL" */}
          <motion.div
            key={`model-${currentCarIndex}`}
            className="absolute top-20 left-0 right-0 text-center z-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-8xl lg:text-9xl xl:text-[12rem] font-extrabold text-white/10 uppercase tracking-tighter">
              {currentCar.model}
            </h2>
          </motion.div>

          {/* Top Left Badge */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`badge-${currentCarIndex}`}
              className="absolute top-20 left-8 lg:left-16 z-20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-2">
                <span className="text-white text-base lg:text-lg font-semibold">
                  {String(currentCarIndex + 1).padStart(2, '0')}
                </span>
                <span className="text-white/70 text-base lg:text-lg">/</span>
                <span className="text-white/70 text-base lg:text-lg">Model</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots - Right Side */}
          <div className="absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 z-[60] flex flex-col gap-4 items-end" style={{ pointerEvents: 'auto' }}>
            {showcaseCars.map((_, index) => {
              const isActive = index === currentCarIndex
              return (
                <motion.button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation()
                    e.preventDefault()
                    setCurrentCarIndex(index)
                  }}
                  className="relative flex items-center gap-3 group cursor-pointer z-[60]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ pointerEvents: 'auto' }}
                >
                  {/* Number - Always visible, positioned to the left */}
                  <motion.span
                    className={`text-sm font-medium transition-colors duration-300 min-w-[24px] text-right ${
                      isActive ? 'text-white' : 'text-gray-400'
                    }`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </motion.span>
                  
                  {/* Dot */}
                  <motion.div
                    className="relative flex items-center justify-center"
                    initial={false}
                  >
                    {/* Active Dot - White circle with outline */}
                    {isActive ? (
                      <motion.div
                        className="relative flex items-center justify-center"
                        layoutId="activeDot"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      >
                        {/* Outer white circle with border */}
                        <div className="w-3 h-3 rounded-full border-2 border-white bg-transparent" />
                        {/* Inner white filled circle */}
                        <div className="absolute inset-0 w-2 h-2 rounded-full bg-white m-auto" />
                      </motion.div>
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-gray-400 transition-colors duration-300 group-hover:bg-gray-300" />
                    )}
                  </motion.div>
                </motion.button>
              )
            })}
          </div>

          {/* Content Bottom Section */}
          <div className="absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-black via-black/90 to-transparent pt-32 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-end">
                {/* Left: Car Info */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`car-info-${currentCarIndex}`}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div>
                      <motion.div
                        className="mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <h3 className="text-white text-xl lg:text-2xl font-bold mb-3 tracking-wider">HONDA</h3>
                        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 leading-tight">
                          {currentCar.name}
                        </h2>
                      </motion.div>
                      <motion.p
                        className="text-white/80 text-base lg:text-lg leading-relaxed max-w-2xl mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {currentCar.description}
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <Link href={`/mobil/${currentCar.id}`}>
                          <motion.button
                            className="px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-red-600 to-red-500 rounded-lg shadow-xl hover:shadow-2xl relative overflow-hidden group"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span className="relative z-10">Lihat Detail</span>
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600"
                              initial={{ x: '-100%' }}
                              whileHover={{ x: 0 }}
                              transition={{ duration: 0.3 }}
                            />
                          </motion.button>
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Right: Thumbnails */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`thumbnails-${currentCarIndex}`}
                    className="flex gap-4 justify-end"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.5 }}
                  >
                    {currentCar.thumbnails.map((thumb, index) => (
                      <motion.div
                        key={`${currentCarIndex}-${index}`}
                        className="relative w-32 h-20 lg:w-40 lg:h-24 rounded-lg overflow-hidden cursor-pointer group"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div
                          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                          style={{
                            backgroundImage: `url('${thumb}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }}
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specification Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image - Full Height */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home/cars/car-civic-5.jpeg"
            alt="Honda Civic"
            fill
            className="object-cover object-center"
            priority
            unoptimized
          />
          {/* Gradient Overlay Mask */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10" />
        </div>

        {/* Top Section - Text Content (40%) - Overlay */}
        <div className="relative h-[40vh] pb-16 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
            {/* Page Indicator */}
            <div className="absolute top-8 left-8">
              <span className="text-gray-400 text-sm">03/Specs</span>
            </div>

            {/* Main Title */}
            <div className="text-center mb-12">
              <FadeIn direction="down" delay={0.2}>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white">
                  Specification <span className="text-gray-300 font-normal">(Honda Civic)</span>
                </h2>
              </FadeIn>
            </div>

            {/* Two Columns Specifications */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-8">
                {/* Left Column - DIMENSION */}
                <FadeIn direction="right" delay={0.3}>
                  <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-6 w-full md:w-auto">
                    <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wider">DIMENSION</h3>
                    <div className="space-y-1.5 w-full sm:w-auto">
                      <div className="flex justify-between items-center gap-4">
                        <span className="text-gray-300 text-sm">LENGTH</span>
                        <span className="text-white font-semibold text-base sm:text-lg">113.2 IN</span>
                      </div>
                      <div className="flex justify-between items-center gap-4">
                        <span className="text-gray-300 text-sm">WIDTH</span>
                        <span className="text-white font-semibold text-base sm:text-lg">184.8 IN</span>
                      </div>
                      <div className="flex justify-between items-center gap-4">
                        <span className="text-gray-300 text-sm">HEIGHT</span>
                        <span className="text-white font-semibold text-base sm:text-lg">72.8 IN</span>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                {/* Right Column - ENGINE */}
                <FadeIn direction="left" delay={0.4}>
                  <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-6 w-full md:w-auto">
                    <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wider">ENGINE</h3>
                    <div className="space-y-1.5 w-full sm:w-auto">
                      <div className="flex justify-between items-center gap-4">
                        <span className="text-gray-300 text-sm">POWER</span>
                        <span className="text-white font-semibold text-base sm:text-lg">208 KW</span>
                      </div>
                      <div className="flex justify-between items-center gap-4">
                        <span className="text-gray-300 text-sm">HORSEPOWER</span>
                        <span className="text-white font-semibold text-base sm:text-lg">283 HP</span>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Overlay Specs (60%) */}
        <div className="relative h-[70vh] -mt-32 z-20">
          {/* Bottom Overlay Specifications Strip - At the very bottom of image */}
          <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md border-t border-white/10 z-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <FadeIn direction="up" delay={0.5}>
                  <div className="text-center border-r border-white/20 pr-4 last:border-r-0 last:pr-0">
                    <div className="text-gray-300 text-xs sm:text-sm mb-1 uppercase tracking-wide">BATTERY CAPACITY</div>
                    <div className="text-white font-bold text-base sm:text-lg">51 KWH</div>
                  </div>
                </FadeIn>
                <FadeIn direction="up" delay={0.6}>
                  <div className="text-center border-r border-white/20 pr-4 last:border-r-0 last:pr-0">
                    <div className="text-gray-300 text-xs sm:text-sm mb-1 uppercase tracking-wide">DUAL MOTOR</div>
                    <div className="text-white font-bold text-base sm:text-lg">AWD</div>
                  </div>
                </FadeIn>
                <FadeIn direction="up" delay={0.7}>
                  <div className="text-center border-r border-white/20 pr-4 last:border-r-0 last:pr-0">
                    <div className="text-gray-300 text-xs sm:text-sm mb-1 uppercase tracking-wide">TOP SPEED</div>
                    <div className="text-white font-bold text-base sm:text-lg">225 KM/H</div>
                  </div>
                </FadeIn>
                <FadeIn direction="up" delay={0.8}>
                  <div className="text-center">
                    <div className="text-gray-300 text-xs sm:text-sm mb-1 uppercase tracking-wide">WEIGHT</div>
                    <div className="text-white font-bold text-base sm:text-lg">4,030 LBS</div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 items-start">
            {/* Left Section - Image */}
            <FadeIn direction="right" delay={0.2}>
              <div className="flex flex-col items-start text-start">
                <div className="relative w-full min-h-[500px] lg:min-h-[600px]">
                  <Image
                    src="/images/home/hero/honda-pekalongan.png"
                    alt="Honda Car"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </div>
            </FadeIn>

            {/* Right Section - Text Content */}
            <FadeIn direction="left" delay={0.3}>
              <div className="bg-black px-8 lg:px-12 py-12 lg:py-16 flex flex-col items-start text-start">
                {/* About Section */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1 h-6 bg-red-500"></div>
                    <h3 className="text-sm font-semibold text-white uppercase tracking-wider">ABOUT HONDA PEKALONGAN</h3>
                  </div>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 text-start max-w-3xl">
                    <span className="block whitespace-nowrap">Lebih dari Sekedar</span>
                    <span className="block whitespace-nowrap">Dealer Mobil</span>
                  </h2>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  <FadeIn direction="up" delay={0.4}>
                    <motion.div
                      className="bg-gray-900 border border-gray-800 rounded-lg p-6 h-full"
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-1 h-6 bg-red-500"></div>
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider">QUALITY SERVICE</h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-sm">
                        Pelayanan berkualitas tinggi dengan standar Honda untuk memastikan kepuasan pelanggan.
                      </p>
                    </motion.div>
                  </FadeIn>

                  <FadeIn direction="up" delay={0.5}>
                    <motion.div
                      className="bg-gray-900 border border-gray-800 rounded-lg p-6 h-full"
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-1 h-6 bg-red-500"></div>
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider">EXPERT TEAM</h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-sm">
                        Tim profesional berpengalaman siap memberikan solusi terbaik untuk kebutuhan kendaraan Anda.
                      </p>
                    </motion.div>
                  </FadeIn>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Our Story - Full Width */}
          <FadeIn direction="up" delay={0.4}>
            <div className="mt-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-6 bg-red-500"></div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">OUR STORY</h3>
              </div>
              <div className="text-gray-300 leading-relaxed text-base space-y-4 text-start">
                <p>
                  Terlahir dari sebuah jalinan persahabatan dan persaudaraan yang kuat antara tiga insan terlahirlah PT. Bangun Tripatriajati (Merdeka Motor) pada tanggal 19 Desember 1997. Diawali dari sebuah bangunan di Jl. Merdeka No. 15 A Pekalongan. Sejarah Honda Pekalongan Motor mulai diketik di lembar-lembar putih pertama.
                </p>
                <p>
                  Kemudian pada akhir tahun 2003 keseluruhan saham PT. Bangun Tripatriajati dibeli oleh keluarga Hindarto yang kemudian menjadikan Bapak Willyanto menjadi Direktur dan Bapak Teddy Hindarto menjadi Komisaris Honda Pekalongan Motor. Lalu tampuk kepemimpinan yang baru dimulai.
                </p>
                <p>
                  Tidak berhenti hanya di situ saja, Honda Pekalongan Motor mulai menunjukan jati dirinya dengan meraih beberapa prestasi di divisi Penjualan selama 2 semester berturut-turut dan di divisi Spare Part yang berhasil mendapatkan reward.
                </p>
                <p>
                  Dengan adanya permintaan pasar yang semakin besar, demi pelayanan pelanggan maka kami menambah performa dengan mendirikan gedung Honda Pekalongan Motor yang baru di Jl. Dr. Sutomo No. 168 Pekalongan dengan sumber daya manusia terlatih dan fasilitas yang lebih lengkap.
                </p>
                <p>
                  Bisa disimpulkan bahwa Honda Pekalongan Motor adalah showroom, bengkel dan body & paint pertama yang menggunakan teknologi canggih di kota Pekalongan dan sekitaranya.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsVideoOpen(false)}
        >
          <motion.div
            className="relative max-w-4xl w-full aspect-video"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="w-full h-full bg-gray-900 rounded-xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Honda Pekalongan Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Services Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <FadeIn className="text-center mb-16">
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">OUR SERVICES</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight">
              DISTINCTIVE SERVICE FOR DISCERNING DRIVERS
            </h2>
          </FadeIn>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                title: 'MAINTENANCE',
                description: 'Perawatan berkala profesional untuk menjaga performa optimal kendaraan Anda dengan standar Honda.',
                image: '/images/home/hero/maintance.png'
              },
              {
                number: '02',
                title: 'WHEELS',
                description: 'Layanan lengkap untuk roda dan ban, termasuk penggantian, balancing, dan alignment dengan teknologi terbaru.',
                image: '/images/home/hero/wheels.jpg'
              },
              {
                number: '03',
                title: 'ALIGNMENT',
                description: 'Spooring dan balancing presisi untuk kestabilan berkendara dan umur ban yang lebih panjang. Layanan alignment kami menggunakan teknologi laser terbaru untuk memastikan sudut roda yang tepat dan mengurangi keausan ban tidak merata.',
                image: '/images/home/mobil/card-civic-2.jpg'
              },
              {
                number: '04',
                title: 'POWER COATING',
                description: 'Pelapisan cat berkualitas tinggi dengan teknologi modern untuk perlindungan dan tampilan yang tahan lama.',
                image: '/images/home/hero/power-coating.jpg'
              },
              {
                number: '05',
                title: 'BRAKES',
                description: 'Layanan perawatan dan penggantian rem dengan komponen asli Honda untuk keamanan maksimal. Kami menyediakan pemeriksaan menyeluruh sistem rem termasuk kampas rem, cakram, minyak rem, dan kaliper dengan standar original Honda.',
                image: '/images/home/hero/brakes.jpg'
              },
              {
                number: '06',
                title: 'ENGINE SERVICE',
                description: 'Perawatan mesin komprehensif oleh teknisi berpengalaman untuk performa dan efisiensi optimal.',
                image: '/images/home/hero/engine.jpg'
              },
            ].map((service, index) => (
              <FadeIn key={index} direction="up" delay={index * 0.1}>
                <motion.div
                  className="bg-black border border-gray-800 rounded-lg overflow-hidden group h-full flex flex-col"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Number and Image */}
                  <div className="relative">
                    {/* Number with vertical line */}
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                      <span className="text-2xl font-bold text-white">{service.number}</span>
                      <div className="w-px h-8 bg-gray-400"></div>
                    </div>
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        unoptimized
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-white uppercase mb-3">{service.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                      {service.description}
                    </p>
                    
                    {/* Learn More Button */}
                    <motion.button
                      className="flex items-center gap-2 text-white text-sm font-medium group/btn mt-auto"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span>LEARN MORE</span>
                      <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Achievements Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Top Left - Why Choose Us */}
          <div className="bg-black p-8 lg:p-12 xl:p-16 flex flex-col justify-center min-h-[500px] lg:min-h-[600px]">
            <div className="max-w-2xl mx-auto w-full">
              <FadeIn direction="right" delay={0.2}>
                <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">WHY CHOOSE US</p>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase mb-6 leading-tight">
                  ATTENTION TO DETAIL, TAILORED TO YOU
                </h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Kami menghadirkan pelayanan terbaik dengan fokus pada detail dan personalisasi untuk setiap kebutuhan pelanggan. Tim profesional kami siap memberikan solusi terbaik untuk kendaraan Anda.
                </p>

                {/* Progress Bars */}
                <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold text-sm uppercase">EXPERT TECHNICIANS</span>
                    <span className="text-red-500 font-bold">99%</span>
                  </div>
                  <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-red-500 to-red-600"
                      initial={{ width: 0 }}
                      whileInView={{ width: '99%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold text-sm uppercase">QUICK TURNAROUND</span>
                    <span className="text-red-500 font-bold">85%</span>
                  </div>
                  <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-red-500 to-red-600"
                      initial={{ width: 0 }}
                      whileInView={{ width: '85%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold text-sm uppercase">QUALITY ASSURANCE</span>
                    <span className="text-red-500 font-bold">90%</span>
                  </div>
                  <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-red-500 to-red-600"
                      initial={{ width: 0 }}
                      whileInView={{ width: '90%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.7 }}
                    />
                  </div>
                </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Top Right - Car Image */}
          <div className="relative min-h-[400px] lg:min-h-[600px]">
            <Image
              src="/images/home/cars/car-civic-5.jpeg"
              alt="Honda Car"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* Bottom Left - Wheel Close-up Image */}
          <div className="relative min-h-[400px] lg:min-h-[600px]">
            <Image
              src="/images/home/cars/car-civic-6.jpeg"
              alt="Car Wheel"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* Bottom Right - Achievements */}
          <div className="bg-black p-8 lg:p-12 xl:p-16 flex flex-col justify-center min-h-[500px] lg:min-h-[600px]">
            <div className="max-w-2xl mx-auto w-full">
              <FadeIn direction="left" delay={0.2}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-6 bg-blue-500"></div>
                  <p className="text-sm text-gray-400 uppercase tracking-wider">ACHIEVEMENTS</p>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase mb-6 leading-tight">
                  DRIVING IN STYLE, EXPERTLY MAINTAINED
                </h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Dengan pengalaman bertahun-tahun dan ribuan kendaraan yang telah kami layani, kami bangga menjadi pilihan utama untuk perawatan dan servis kendaraan Honda Anda.
                </p>

                {/* Statistics Grid */}
                <div className="grid grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="text-5xl lg:text-6xl font-bold text-white mb-2">25+</div>
                  <div className="text-gray-400 text-sm">Years of Experience</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="text-5xl lg:text-6xl font-bold text-white mb-2">600+</div>
                  <div className="text-gray-400 text-sm">Expert Mechanics</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="text-5xl lg:text-6xl font-bold text-white mb-2">9.9K+</div>
                  <div className="text-gray-400 text-sm">Repaired Vehicles</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="text-5xl lg:text-6xl font-bold text-white mb-2">80+</div>
                  <div className="text-gray-400 text-sm">Company Branches</div>
                </motion.div>
              </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Section - Title and CTA */}
            <FadeIn direction="right" delay={0.2}>
              <div className="max-w-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-6 bg-blue-500"></div>
                  <p className="text-sm text-gray-400 uppercase tracking-wider">HOW IT WORKS</p>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase mb-8 leading-tight">
                  SUPERIOR SERVICE WITH A TOUCH OF CLASS
                </h2>
                
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold uppercase rounded-lg transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    APPOINTMENT
                  </motion.button>
                  <motion.button
                    className="px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-semibold uppercase rounded-lg border border-gray-300 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    OUR SERVICES
                  </motion.button>
                </div>
              </div>
            </FadeIn>

            {/* Right Section - Process Steps Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  number: '01',
                  title: 'BOOK AN APPOINTMENT',
                  description: 'Pesan janji temu dengan mudah melalui website atau hubungi kami langsung. Tim kami siap membantu menjadwalkan kunjungan Anda sesuai waktu yang tersedia.'
                },
                {
                  number: '02',
                  title: 'CHOOSE YOUR SERVICE',
                  description: 'Pilih layanan yang Anda butuhkan dari berbagai pilihan perawatan dan servis yang kami tawarkan. Setiap layanan dirancang untuk memenuhi kebutuhan spesifik kendaraan Anda.'
                },
                {
                  number: '03',
                  title: 'CONFIRM YOUR REQUEST',
                  description: 'Konfirmasi detail permintaan Anda dan pastikan semua informasi sudah benar. Kami akan mengirimkan konfirmasi lengkap melalui email atau WhatsApp.'
                },
                {
                  number: '04',
                  title: 'DROP OFF YOUR VEHICLE',
                  description: 'Bawa kendaraan Anda ke showroom kami pada waktu yang telah ditentukan. Tim kami akan melakukan inspeksi awal dan memberikan penjelasan detail tentang proses servis.'
                },
                {
                  number: '05',
                  title: 'SERVICE AND REPAIR',
                  description: 'Teknisi berpengalaman kami akan melakukan servis dan perbaikan dengan standar tinggi menggunakan peralatan modern dan komponen original Honda.'
                },
                {
                  number: '06',
                  title: 'REVIEW AND PICK UP',
                  description: 'Setelah servis selesai, kami akan memberikan laporan lengkap dan menjelaskan pekerjaan yang telah dilakukan. Ambil kendaraan Anda dengan keyakinan penuh.'
                },
              ].map((step, index) => (
                <FadeIn key={index} direction="up" delay={0.1 * index}>
                  <motion.div
                    className="bg-gray-900 rounded-lg p-6 h-full border border-gray-800"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-1 h-6 bg-red-500"></div>
                      <span className="text-xl font-bold text-white">{step.number}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white uppercase mb-3">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Left Section - Car Image */}
          <div className="relative min-h-[500px] lg:min-h-[700px]">
            <Image
              src="/images/home/cars/car-civic-5.jpeg"
              alt="Honda Car"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* Right Section - FAQ Content */}
          <div className="bg-black p-8 lg:p-12 xl:p-16 flex flex-col justify-center min-h-[500px] lg:min-h-[700px]">
            <div className="max-w-2xl mx-auto w-full">
              <FadeIn direction="left" delay={0.2}>
                <p className="text-sm text-red-500 uppercase tracking-wider mb-4">FAQS</p>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase mb-12 leading-tight">
                  FREQUENTLY ASKED QUESTIONS
                </h2>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                  {[
                    {
                      question: 'How long has your company been established?',
                      answer: 'Honda Pekalongan telah berdiri selama lebih dari 25 tahun, melayani pelanggan dengan komitmen tinggi terhadap kualitas dan kepuasan pelanggan.'
                    },
                    {
                      question: 'How much does it cost for one car service?',
                      answer: 'Biaya servis bervariasi tergantung jenis layanan yang dibutuhkan. Kami menawarkan paket servis berkala dengan harga kompetitif dan transparan. Hubungi kami untuk mendapatkan penawaran terbaik.'
                    },
                    {
                      question: 'How many people work at your company?',
                      answer: 'Kami memiliki lebih dari 600 teknisi dan staf profesional yang berpengalaman dalam menangani berbagai kebutuhan perawatan dan servis kendaraan Honda.'
                    },
                    {
                      question: 'Does your company open job vacancies?',
                      answer: 'Ya, kami secara berkala membuka lowongan kerja untuk posisi teknisi, sales, dan posisi lainnya. Silakan kunjungi halaman karir kami atau hubungi HR untuk informasi lebih lanjut.'
                    },
                    {
                      question: 'How do I contact Honda Pekalongan for appointment?',
                      answer: 'Anda dapat menghubungi kami melalui telepon, WhatsApp, atau mengisi form booking online di website. Tim kami siap membantu menjadwalkan kunjungan Anda.'
                    },
                    {
                      question: 'What kind of contracts do you provide?',
                      answer: 'Kami menyediakan berbagai jenis kontrak termasuk kontrak servis berkala, kontrak perawatan fleet, dan paket maintenance untuk kebutuhan bisnis maupun personal dengan fleksibilitas yang disesuaikan kebutuhan Anda.'
                    },
                  ].map((faq, index) => (
                    <FAQAccordion key={index} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Kontak Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Section - Text Content */}
            <FadeIn direction="right" delay={0.2}>
              <div className="space-y-8">
                {/* Heading */}
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                  Start your journey with us today
                </h2>
                
                {/* Description */}
                <p className="text-lg text-gray-300 leading-relaxed">
                  Visit our showroom to experience our wide selection of vehicles and top-notch customer service. Prefer to shop online? Browse our inventory, schedule a test drive, or get pre-approved for financing right from the comfort of your home.
                </p>
                
                {/* Contact Button */}
                <Link href="/kontak">
                  <motion.button
                    className="px-8 py-4 text-base font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors duration-200 flex items-center gap-2 group"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Contact us</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                </Link>
                
                {/* Open Hours */}
                <motion.div
                  className="bg-gray-900 rounded-xl p-6 border border-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-white font-semibold mb-4">Open hours</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-400 text-sm mb-1">WEEKDAYS</p>
                      <p className="text-white font-medium">8:30 AM - 9:30 PM</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">WEEKENDS</p>
                      <p className="text-white font-medium">8:30 AM - 9:30 PM</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </FadeIn>

            {/* Right Section - Map */}
            <FadeIn direction="left" delay={0.3}>
              <div className="space-y-6">
                {/* Map Container */}
                <motion.div
                  className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden bg-gray-900 border border-gray-800"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Map Placeholder - Using iframe for Google Maps */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.123456789!2d109.675!3d-6.888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTMnMTYuOCJTIDEwOcKwNDAnMzAuMCJF!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
                    className="w-full h-full"
                    style={{ filter: 'grayscale(100%) invert(1) brightness(0.8) contrast(1.2)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  
                  {/* Location Pin Overlay */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <svg className="w-12 h-12 text-red-600 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </motion.div>
                  </div>
                  
                  {/* Address Overlay */}
                  <div className="absolute bottom-4 left-4 bg-gray-800/90 backdrop-blur-sm rounded-lg p-4 border border-gray-700 max-w-xs">
                    <p className="text-white text-sm leading-relaxed">
                      2356 Oakwood Drive, Suite 1B, San Francisco, California 94111, US
                    </p>
                  </div>
                </motion.div>
                
                {/* Contact Details */}
                <div className="grid grid-cols-2 gap-4">
                  <motion.a
                    href="mailto:info@hondapekalongan.com"
                    className="bg-gray-900 rounded-lg p-4 border border-gray-800 hover:bg-gray-800 transition-colors flex items-center gap-3 group"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-white text-sm group-hover:text-red-600 transition-colors">info@hondapekalongan.com</span>
                  </motion.a>
                  
                  <motion.a
                    href="tel:+6281234567890"
                    className="bg-gray-900 rounded-lg p-4 border border-gray-800 hover:bg-gray-800 transition-colors flex items-center gap-3 group"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="text-white text-sm group-hover:text-red-600 transition-colors">+62 812 3456 7890</span>
                  </motion.a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
