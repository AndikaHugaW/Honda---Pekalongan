'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { FadeIn, HoverScale } from '@/components/ui/animations'
import { motion, AnimatePresence } from 'framer-motion'

// Mock data - nanti bisa diganti dengan data dari Supabase
const mobilData: Record<string, any> = {
  '1': {
    id: 1,
    nama: 'Honda Civic',
    merk: 'Honda',
    model: 'Civic Type R',
    tahun: 2025,
    harga: 520000000,
    kilometer: 0,
    warna: 'Putih',
    transmisi: 'CVT',
    bahan_bakar: 'Bensin',
    deskripsi: 'Honda Civic 2024 dengan teknologi terbaru, desain sporty dan elegan. Dilengkapi dengan fitur keselamatan lengkap dan teknologi canggih untuk kenyamanan berkendara maksimal.',
    gambar_url: [
      '/images/home/mobil/card-civic-type-r-1.png',
      '/images/home/mobil/card-civic-4.jpg',
      '/images/home/mobil/card-civic-2.jpg',
      '/images/home/mobil/card-civic-3.jpg',
    ],
    status: 'Tersedia',
    fitur: [
      'Honda Sensing',
      'LED Headlights',
      'Touchscreen Display',
      'Keyless Entry',
      'Reverse Camera',
      'Parking Sensors',
      'Cruise Control',
      'Bluetooth Connectivity',
    ],
  },
  '2': {
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
    deskripsi: 'Honda CR-V 2024 SUV premium dengan ruang kabin yang luas dan nyaman. Cocok untuk keluarga dengan fitur keselamatan dan teknologi terkini.',
    gambar_url: [
      '/images/home/mobil/card-crv-1.png',
      '/images/home/mobil/card-crv-2.jpg',
      '/images/home/mobil/card-crv-3.png',
    ],
    status: 'Tersedia',
    fitur: [
      'Honda Sensing',
      'All-Wheel Drive',
      'Panoramic Sunroof',
      'Wireless Charging',
      'Apple CarPlay',
      'Android Auto',
      '360° Camera',
      'Power Tailgate',
    ],
  },
  '3': {
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
    deskripsi: 'Honda HR-V 2024 compact SUV dengan desain modern dan efisien. Ideal untuk perkotaan dengan performa tangguh dan hemat bahan bakar.',
    gambar_url: [
      '/images/home/mobil/card-hrv-1.png',
      '/images/home/mobil/card-hrv-2.webp',
    ],
    status: 'Tersedia',
    fitur: [
      'Honda Sensing',
      'LED Headlights',
      'Touchscreen Display',
      'Keyless Entry',
      'Reverse Camera',
      'Bluetooth Connectivity',
    ],
  },
  '4': {
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
    deskripsi: 'Honda Brio 2024 city car yang praktis dan ekonomis. Cocok untuk kebutuhan sehari-hari dengan desain compact namun tetap nyaman.',
    gambar_url: [
      '/images/home/mobil/card-brio-1.png',
      '/images/home/mobil/card-brio-2.jpg',
      '/images/home/mobil/card-brio-3.jpg',
      '/images/home/mobil/card-brio-4.jpg',
    ],
    status: 'Tersedia',
    fitur: [
      'Touchscreen Display',
      'Keyless Entry',
      'Reverse Camera',
      'Bluetooth Connectivity',
      'USB Ports',
    ],
  },
  '5': {
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
    deskripsi: 'Honda Accord 2024 sedan premium dengan teknologi hybrid. Kombinasi performa dan efisiensi bahan bakar yang luar biasa.',
    gambar_url: [
      '/images/home/mobil/card-accord-1.png',
      '/images/home/mobil/card-accord-2.jpg',
      '/images/home/mobil/card-accord-3.png',
    ],
    status: 'Tersedia',
    fitur: [
      'Honda Sensing',
      'Hybrid Engine',
      'Leather Seats',
      'Panoramic Sunroof',
      'Wireless Charging',
      'Apple CarPlay',
      'Android Auto',
      'Premium Sound System',
    ],
  },
  '6': {
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
    deskripsi: 'Honda City 2024 sedan kompak dengan teknologi canggih. Desain elegan dan performa yang handal untuk kebutuhan sehari-hari.',
    gambar_url: [
      'https://via.placeholder.com/800x600/ef4444/ffffff?text=Honda+City+1',
      'https://via.placeholder.com/800x600/dc2626/ffffff?text=Honda+City+2',
    ],
    status: 'Tersedia',
    fitur: [
      'Honda Sensing',
      'LED Headlights',
      'Touchscreen Display',
      'Keyless Entry',
      'Reverse Camera',
      'Bluetooth Connectivity',
    ],
  },
  '7': {
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
    deskripsi: 'Honda WR-V 2024 crossover kompak dengan desain modern dan fungsional. Ideal untuk aktivitas perkotaan dengan performa efisien dan ruang kabin yang nyaman.',
    gambar_url: [
      '/images/home/mobil/card-wrv-1.png',
    ],
    status: 'Tersedia',
    fitur: [
      'Honda Sensing',
      'LED Headlights',
      'Touchscreen Display',
      'Keyless Entry',
      'Reverse Camera',
      'Bluetooth Connectivity',
      'USB Ports',
      'Multi-View Camera',
    ],
  },
  '8': {
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
    deskripsi: 'Honda BR-V N7X 2024 MPV 7-seater dengan desain sporty dan modern. Dilengkapi dengan teknologi canggih dan ruang kabin yang luas untuk kenyamanan seluruh keluarga.',
    gambar_url: [
      '/images/home/mobil/card-brv-1.png',
    ],
    status: 'Tersedia',
    fitur: [
      'Honda Sensing',
      'LED Headlights',
      'Touchscreen Display',
      'Keyless Entry',
      'Reverse Camera',
      'Bluetooth Connectivity',
      '7-Seater Configuration',
      'Panoramic Sunroof',
      'Third Row Seats',
      'Apple CarPlay',
      'Android Auto',
    ],
  },
}

export default function MobilDetailPage() {
  const params = useParams()
  const router = useRouter()
  const id = params?.id as string
  const mobil = mobilData[id || '1']
  const [selectedImage, setSelectedImage] = useState(0)
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)

  if (!mobil) {
    return (
      <div className="min-h-screen bg-black">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Mobil Tidak Ditemukan</h1>
          <Link href="/mobil" className="text-red-500 hover:text-red-400">
            Kembali ke Daftar Mobil
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

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

      {/* Breadcrumb */}
      <FadeIn className="pt-24 pb-4 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-400 hover:text-red-500 transition-colors">
              Beranda
            </Link>
            <span className="text-gray-500">/</span>
            <Link href="/mobil" className="text-gray-400 hover:text-red-500 transition-colors">
              Mobil
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-white font-medium">{mobil.nama}</span>
          </nav>
        </div>
      </FadeIn>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <FadeIn direction="right" className="space-y-4">
            {/* Main Image */}
            <HoverScale>
              <motion.div
                className="relative aspect-[4/3] bg-gray-900 rounded-2xl shadow-xl overflow-hidden cursor-pointer border border-white/10"
                onClick={() => setIsImageModalOpen(true)}
                whileHover={{ scale: 1.02 }}
              >
                <motion.img
                  src={mobil.gambar_url[selectedImage]}
                  alt={mobil.nama}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                {mobil.status === 'Tersedia' && (
                  <motion.div
                    className="absolute top-4 right-4 bg-green-500/20 backdrop-blur-sm border border-green-500/30 text-green-500 px-4 py-2 rounded-full text-sm font-semibold shadow-lg z-10"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: 'spring' }}
                  >
                    Tersedia
                  </motion.div>
                )}
              </motion.div>
            </HoverScale>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-4">
              {mobil.gambar_url.map((img: string, index: number) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? 'border-red-500 shadow-lg scale-105'
                      : 'border-white/20 hover:border-red-500/50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={img}
                    alt={`${mobil.nama} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {selectedImage === index && (
                    <motion.div
                      className="absolute inset-0 bg-red-500/20"
                      layoutId="selectedImage"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </FadeIn>

          {/* Details */}
          <FadeIn direction="left" delay={0.2}>
            <div className="space-y-6">
              {/* Title & Price */}
              <div>
                <motion.h1
                  className="text-4xl sm:text-5xl font-extrabold text-white mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {mobil.nama}
                </motion.h1>
                <motion.p
                  className="text-lg text-gray-400 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {mobil.merk} • {mobil.model} • {mobil.tahun}
                </motion.p>
                <motion.div
                  className="text-3xl font-bold bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, type: 'spring' }}
                >
                  {formatCurrency(mobil.harga)}
                </motion.div>
              </div>

              {/* Description */}
              <motion.div
                className="prose max-w-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-gray-300 leading-relaxed">{mobil.deskripsi}</p>
              </motion.div>

              {/* Specifications */}
              <motion.div
                className="bg-gray-900 rounded-2xl shadow-lg p-6 border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <h3 className="text-xl font-bold text-white mb-4">Spesifikasi</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { label: 'Tahun', value: mobil.tahun },
                    { label: 'Warna', value: mobil.warna },
                    { label: 'Transmisi', value: mobil.transmisi },
                    { label: 'Bahan Bakar', value: mobil.bahan_bakar },
                    { label: 'Kilometer', value: `${mobil.kilometer.toLocaleString('id-ID')} km` },
                    { label: 'Status', value: mobil.status },
                  ].map((spec, index) => (
                    <motion.div
                      key={spec.label}
                      className="flex justify-between items-center py-2 border-b border-white/10 last:border-0"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.05 }}
                    >
                      <span className="text-gray-400">{spec.label}</span>
                      <span className="font-semibold text-white">{spec.value}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Features */}
              <motion.div
                className="bg-gray-900 rounded-2xl shadow-lg p-6 border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <h3 className="text-xl font-bold text-white mb-4">Fitur</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {mobil.fitur.map((fitur: string, index: number) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + index * 0.05 }}
                    >
                      <svg
                        className="w-5 h-5 text-red-500 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-300">{fitur}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                <Link href="/kontak" className="flex-1">
                  <motion.button
                    className="w-full px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-red-500 to-red-400 rounded-xl shadow-lg hover:shadow-xl relative overflow-hidden group"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">Hubungi Kami</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </Link>
                <Link href="/mobil" className="flex-1">
                  <motion.button
                    className="w-full px-8 py-4 text-lg font-semibold text-white bg-gray-900 border-2 border-white/20 rounded-xl hover:border-red-500 hover:text-red-500 transition-all duration-300 shadow-md"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Kembali ke Daftar
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {isImageModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsImageModalOpen(false)}
          >
            <motion.div
              className="relative max-w-5xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsImageModalOpen(false)}
                className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 z-10 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src={mobil.gambar_url[selectedImage]}
                  alt={mobil.nama}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex justify-center gap-2 mt-4">
                {mobil.gambar_url.map((img: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-white' : 'border-white/50'
                    }`}
                  >
                    <img src={img} alt={`${mobil.nama} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  )
}

