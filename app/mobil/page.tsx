'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { FadeIn, StaggerContainer, StaggerItem, HoverScale } from '@/components/ui/animations'
import { motion } from 'framer-motion'
import Dropdown from '@/components/ui/Dropdown'
import LazyCard from '@/components/ui/LazyCard'

export default function MobilPage() {
  const [selectedMerk, setSelectedMerk] = useState('all')
  const [selectedModel, setSelectedModel] = useState('all')
  const [selectedTransmisi, setSelectedTransmisi] = useState('all')
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0)

  const heroImages = [
    '/images/home/mobil/hero 1.webp',
    '/images/home/mobil/hero 2.webp',
  ]

  // Auto-rotate hero images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [heroImages.length])

  const mobilList = [
    {
      id: 1,
      nama: 'Honda Civic',
      merk: 'Honda',
      model: 'Civic',
      tahun: 2024,
      harga: 520000000,
      kilometer: 0,
      warna: 'Putih',
      transmisi: 'CVT',
      bahan_bakar: 'Bensin',
      gambar: '/images/home/mobil/card-civic-type-r-1.png',
      status: 'Tersedia'
    },
    {
      id: 2,
      nama: 'Honda CR-V',
      merk: 'Honda',
      model: 'CR-V',
      tahun: 2024,
      harga: 625000000,
      kilometer: 0,
      warna: 'Hitam',
      transmisi: 'CVT',
      bahan_bakar: 'Bensin',
      gambar: '/images/home/mobil/card-crv-1.png',
      status: 'Tersedia'
    },
    {
      id: 3,
      nama: 'Honda HR-V',
      merk: 'Honda',
      model: 'HR-V',
      tahun: 2024,
      harga: 425000000,
      kilometer: 0,
      warna: 'Abu-abu',
      transmisi: 'CVT',
      bahan_bakar: 'Bensin',
      gambar: '/images/home/mobil/card-hrv-1.png',
      status: 'Tersedia'
    },
    {
      id: 4,
      nama: 'Honda Brio',
      merk: 'Honda',
      model: 'Brio',
      tahun: 2024,
      harga: 195000000,
      kilometer: 0,
      warna: 'Merah',
      transmisi: 'Manual',
      bahan_bakar: 'Bensin',
      gambar: '/images/home/mobil/card-brio-1.png',
      status: 'Tersedia'
    },
    {
      id: 5,
      nama: 'Honda Accord',
      merk: 'Honda',
      model: 'Accord',
      tahun: 2024,
      harga: 725000000,
      kilometer: 0,
      warna: 'Silver',
      transmisi: 'CVT',
      bahan_bakar: 'Hybrid',
      gambar: '/images/home/mobil/card-accord-1.png',
      status: 'Tersedia'
    },
    {
      id: 6,
      nama: 'Honda City',
      merk: 'Honda',
      model: 'City',
      tahun: 2024,
      harga: 385000000,
      kilometer: 0,
      warna: 'Putih',
      transmisi: 'CVT',
      bahan_bakar: 'Bensin',
      gambar: '/images/home/mobil/card-city-1.png',
      status: 'Tersedia'
    },
    {
      id: 7,
      nama: 'Honda WR-V',
      merk: 'Honda',
      model: 'WR-V',
      tahun: 2024,
      harga: 295000000,
      kilometer: 0,
      warna: 'Hitam',
      transmisi: 'CVT',
      bahan_bakar: 'Bensin',
      gambar: '/images/home/mobil/card-wrv-1.png',
      status: 'Tersedia'
    },
    {
      id: 8,
      nama: 'Honda BR-V N7X',
      merk: 'Honda',
      model: 'BR-V N7X',
      tahun: 2024,
      harga: 345000000,
      kilometer: 0,
      warna: 'Putih',
      transmisi: 'CVT',
      bahan_bakar: 'Bensin',
      gambar: '/images/home/mobil/card-brv-1.png',
      status: 'Tersedia'
    },
  ]

  const merkOptions = [
    { value: 'all', label: 'Semua Merk' },
    { value: 'Honda', label: 'Honda' },
  ]

  const modelOptions = [
    { value: 'all', label: 'Semua Model' },
    { value: 'Civic', label: 'Civic' },
    { value: 'CR-V', label: 'CR-V' },
    { value: 'HR-V', label: 'HR-V' },
    { value: 'Brio', label: 'Brio' },
    { value: 'City', label: 'City' },
    { value: 'Accord', label: 'Accord' },
    { value: 'WR-V', label: 'WR-V' },
    { value: 'BR-V N7X', label: 'BR-V N7X' },
  ]

  const transmisiOptions = [
    { value: 'all', label: 'Semua Transmisi' },
    { value: 'Manual', label: 'Manual' },
    { value: 'CVT', label: 'CVT' },
    { value: 'Automatic', label: 'Automatic' },
  ]

  // Filter mobil berdasarkan selection
  const filteredMobil = mobilList.filter((mobil) => {
    const merkMatch = selectedMerk === 'all' || mobil.merk === selectedMerk
    const modelMatch = selectedModel === 'all' || mobil.model === selectedModel
    const transmisiMatch = selectedTransmisi === 'all' || mobil.transmisi === selectedTransmisi

    return merkMatch && modelMatch && transmisiMatch
  })

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Header Section - Banner Image Slider */}
      <section className="relative overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Background Images with Slide Transition */}
          <div className="relative h-[60vh] rounded-2xl overflow-hidden">
            {heroImages.map((img, index) => (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: currentHeroIndex === index ? 1 : 0,
                }}
                transition={{
                  duration: 1.5,
                  ease: 'easeInOut',
                }}
              >
                <Image
                  src={img}
                  alt={`Hero ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  unoptimized
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <motion.section
        className="py-8 bg-black/80 backdrop-blur-lg border-b border-white/10 sticky top-20 z-40 shadow-sm"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Dropdown
                options={merkOptions}
                value={selectedMerk}
                onChange={setSelectedMerk}
                placeholder="Semua Merk"
                className="min-w-[160px]"
              />
              
              <Dropdown
                options={modelOptions}
                value={selectedModel}
                onChange={setSelectedModel}
                placeholder="Semua Model"
                className="min-w-[160px]"
              />
              
              <Dropdown
                options={transmisiOptions}
                value={selectedTransmisi}
                onChange={setSelectedTransmisi}
                placeholder="Semua Transmisi"
                className="min-w-[160px]"
              />
            </motion.div>
            
            <motion.div
              className="text-sm text-gray-300 font-medium"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Menampilkan <span className="font-bold text-red-500">{filteredMobil.length}</span> mobil tersedia
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mobil Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredMobil.length > 0 ? (
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMobil.map((mobil, index) => (
                <LazyCard key={mobil.id} index={index}>
                  <StaggerItem>
                    <HoverScale scale={1.03}>
                      <motion.div
                        className="bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-white/10"
                        whileHover={{ y: -8 }}
                      >
                      {/* Image */}
                      <div className="relative h-64 overflow-hidden bg-gray-800">
                        <Image
                          src={mobil.gambar}
                          alt={mobil.nama}
                          fill
                          className="object-cover transition-opacity duration-300"
                          loading={index < 3 ? 'eager' : 'lazy'}
                          priority={index < 2}
                          unoptimized
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        {mobil.status === 'Tersedia' && (
                          <motion.span
                            className="absolute top-4 right-4 bg-green-500/20 backdrop-blur-sm border border-green-500/30 text-green-500 px-4 py-2 rounded-full text-xs font-semibold shadow-lg z-10"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                          >
                            Tersedia
                          </motion.span>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="mb-4">
                          <motion.h3
                            className="text-2xl font-bold text-white mb-1 group-hover:text-red-500 transition-colors"
                            whileHover={{ x: 5 }}
                          >
                            {mobil.nama}
                          </motion.h3>
                          <p className="text-sm text-gray-400">
                            {mobil.merk} • {mobil.model} • {mobil.tahun}
                          </p>
                        </div>

                        <div className="space-y-2 mb-4">
                          {[
                            { label: 'Transmisi', value: mobil.transmisi },
                            { label: 'Bahan Bakar', value: mobil.bahan_bakar },
                            { label: 'Warna', value: mobil.warna },
                            { label: 'Kilometer', value: `${mobil.kilometer.toLocaleString('id-ID')} km` },
                          ].map((spec, idx) => (
                            <motion.div
                              key={idx}
                              className="flex justify-between text-sm"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.6 + index * 0.1 + idx * 0.05 }}
                            >
                              <span className="text-gray-400">{spec.label}</span>
                              <span className="font-medium text-white">{spec.value}</span>
                            </motion.div>
                          ))}
                        </div>

                        <div className="border-t border-white/10 pt-4 mb-4">
                          <motion.p
                            className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 + index * 0.1, type: 'spring' }}
                          >
                            {formatCurrency(mobil.harga)}
                          </motion.p>
                        </div>

                        <Link href={`/mobil/${mobil.id}`}>
                          <motion.button
                            className="w-full px-6 py-3 bg-black border-2 border-red-600 text-white font-semibold rounded-xl shadow-md hover:shadow-xl hover:border-red-500 hover:bg-gray-900 transition-colors relative overflow-hidden group"
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                              Lihat Detail
                              <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{
                                  duration: 1.5,
                                  repeat: Infinity,
                                  ease: 'easeInOut',
                                }}
                              >
                                →
                              </motion.span>
                            </span>
                          </motion.button>
                        </Link>
                      </div>
                    </motion.div>
                  </HoverScale>
                </StaggerItem>
                </LazyCard>
              ))}
            </StaggerContainer>
          ) : (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-xl text-gray-300 mb-4">Tidak ada mobil yang ditemukan</p>
              <button
                onClick={() => {
                  setSelectedMerk('all')
                  setSelectedModel('all')
                  setSelectedTransmisi('all')
                }}
                className="text-red-500 hover:text-red-400 font-semibold"
              >
                Reset Filter
              </button>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
