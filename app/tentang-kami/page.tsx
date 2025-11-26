'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { FadeIn, StaggerContainer, StaggerItem, HoverScale } from '@/components/ui/animations'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'

// Icon Component
const Icon = ({ name, className = 'w-8 h-8' }: { name: string; className?: string }) => {
  const icons: Record<string, JSX.Element> = {
    calendar: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    users: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    star: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    clock: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    briefcase: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    wrench: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    document: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  }
  return icons[name] || <div className={className} />
}

export default function TentangKamiPage() {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null)
  
  // Parallax refs
  const heroRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const valuesRef = useRef<HTMLDivElement>(null)
  
  // Parallax scroll animations
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  
  const { scrollYProgress: featuresScrollProgress } = useScroll({
    target: featuresRef,
    offset: ["start end", "end start"]
  })
  
  const { scrollYProgress: valuesScrollProgress } = useScroll({
    target: valuesRef,
    offset: ["start end", "end start"]
  })
  
  // Transform values
  const heroY = useTransform(heroScrollProgress, [0, 1], [0, -100])
  const heroOpacity = useTransform(heroScrollProgress, [0, 0.5], [1, 0])
  const imageY = useTransform(heroScrollProgress, [0, 1], [0, 150])
  const featuresY = useTransform(featuresScrollProgress, [0, 1], [100, -100])
  const valuesY = useTransform(valuesScrollProgress, [0, 1], [50, -50])

  const values = [
    {
      icon: '✓',
      title: 'Terpercaya',
      description: 'Dealer resmi Honda dengan sertifikasi lengkap dan kredibilitas tinggi',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: '★',
      title: 'Kualitas',
      description: 'Hanya menjual mobil dengan kualitas terbaik dan terjamin keasliannya',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: '♥',
      title: 'Pelayanan',
      description: 'Tim profesional yang berpengalaman siap membantu kebutuhan Anda',
      gradient: 'from-red-500 to-orange-500',
    },
    {
      icon: '🚗',
      title: 'Berpengalaman',
      description: 'Lebih dari 10 tahun melayani pelanggan di Pekalongan dan sekitarnya',
      gradient: 'from-green-500 to-emerald-500',
    },
  ]

  const teams = [
    {
      name: 'Tim Sales',
      description: 'Tim sales profesional yang siap membantu Anda menemukan mobil impian',
      icon: 'briefcase',
    },
    {
      name: 'Tim Service',
      description: 'Teknisi berpengalaman untuk perawatan dan perbaikan kendaraan Anda',
      icon: 'wrench',
    },
    {
      name: 'Tim Administrasi',
      description: 'Tim yang akan membantu proses administrasi dengan cepat dan mudah',
      icon: 'document',
    },
  ]

  const stats = [
    { number: '10+', label: 'Tahun Pengalaman', icon: 'calendar' },
    { number: '5000+', label: 'Pelanggan Puas', icon: 'users' },
    { number: '100%', label: 'Kepuasan', icon: 'star' },
    { number: '24/7', label: 'Layanan', icon: 'clock' },
  ]

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col overflow-hidden pt-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col py-12 lg:py-20">
          {/* Text Content */}
          <motion.div 
            className="mb-16 lg:mb-20"
            style={{ y: heroY, opacity: heroOpacity }}
          >
            <FadeIn direction="down" delay={0.2}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 text-left">
                Memberdayakan Wawasan,
                <br />
                <span className="text-red-500">Meningkatkan Keputusan</span>
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl text-left">
                Kami mengubah data kompleks menjadi wawasan real-time, membantu bisnis melacak kinerja dan membuat keputusan yang lebih cerdas dalam industri otomotif.
              </p>
            </FadeIn>
          </motion.div>

          {/* Single Large Image with Parallax */}
          <motion.div 
            className="relative w-full h-auto min-h-[500px] lg:min-h-[600px] rounded-2xl overflow-visible bg-gray-900"
            style={{ y: imageY }}
          >
            <div className="relative w-full h-auto min-h-[500px] lg:min-h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="https://www.hondaunionmotor.co.id/wp-content/uploads/2024/02/dealer-linggau.jpg"
                alt="Dealer Honda Pekalongan"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
                unoptimized
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-24 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 items-start">
            {/* Left Section - Image */}
            <motion.div 
              className="flex flex-col items-start text-start"
              style={{ y: featuresY }}
            >
              <FadeIn direction="right" delay={0.2}>
                <div className="relative w-full min-h-[500px] lg:min-h-[600px]">
                  <Image
                    src="/images/home/hero/honda-pekalongan.png"
                    alt="Honda Car"
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain"
                    unoptimized
                  />
                </div>
              </FadeIn>
            </motion.div>

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

      {/* Values Section */}
      <section ref={valuesRef} className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-4 tracking-tight">
              Apa yang Membuat Kami Berbeda
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Kami berkomitmen memberikan layanan terbaik dengan standar Honda untuk kepuasan pelanggan.
            </p>
          </FadeIn>

          {/* Cards Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            style={{ y: valuesY }}
          >
            {/* Card 1 - Terpercaya */}
            <FadeIn direction="up" delay={0.1}>
              <motion.div 
                className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 h-full border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 group"
                whileHover={{ y: -4 }}
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 tracking-tight">
                  Terpercaya
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Dealer resmi Honda dengan sertifikasi lengkap dan kredibilitas tinggi.
                </p>
              </motion.div>
            </FadeIn>

            {/* Card 2 - Kualitas Terjamin */}
            <FadeIn direction="up" delay={0.2}>
              <motion.div 
                className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 h-full border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 group"
                whileHover={{ y: -4 }}
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 tracking-tight">
                  Kualitas Terjamin
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Spare part original Honda dengan garansi resmi untuk setiap layanan.
                </p>
              </motion.div>
            </FadeIn>

            {/* Card 3 - Tim Profesional */}
            <FadeIn direction="up" delay={0.3}>
              <motion.div 
                className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 h-full border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 group"
                whileHover={{ y: -4 }}
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 tracking-tight">
                  Tim Profesional
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Teknisi bersertifikasi Honda dengan pengalaman bertahun-tahun.
                </p>
              </motion.div>
            </FadeIn>

            {/* Card 4 - Layanan Cepat */}
            <FadeIn direction="up" delay={0.4}>
              <motion.div 
                className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 h-full border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 group"
                whileHover={{ y: -4 }}
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 tracking-tight">
                  Layanan Cepat
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Proses service efisien dan tepat waktu dengan dukungan 24/7.
                </p>
              </motion.div>
            </FadeIn>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-4 tracking-tight">
              Tim Profesional{' '}
              <span className="text-red-500">
                yang Berdedikasi
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Tim profesional berpengalaman siap memberikan solusi terbaik untuk kebutuhan Anda
            </p>
          </FadeIn>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {teams.map((team, index) => (
              <FadeIn key={index} direction="up" delay={0.1 * (index + 1)}>
                <motion.div
                  className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 h-full border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 group text-center"
                  whileHover={{ y: -4 }}
                >
                  {/* Icon Box */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-lg flex items-center justify-center">
                      {team.icon === 'briefcase' && (
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      )}
                      {team.icon === 'wrench' && (
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      )}
                      {team.icon === 'document' && (
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      )}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3 tracking-tight">
                      {team.name}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {team.description}
                    </p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Visi Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-24 items-center">
            {/* Left - Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Visi Kami
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Di Honda Pekalongan, visi kami adalah menjadi dealer otomotif terdepan yang menghadirkan inovasi, keberlanjutan, dan keunggulan. Kami bertujuan untuk tidak hanya menginspirasi tetapi juga berkontribusi pada kesejahteraan masyarakat dan lingkungan melalui teknologi canggih dan praktik ramah lingkungan.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span>Menginspirasi Arsitektur Otomotif Modern</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span>Mempelopori Layanan Berkelanjutan</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span>Memberdayakan Komunitas Melalui Inovasi</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span>Memimpin Masa Depan Solusi Otomotif</span>
                </li>
              </ul>
            </div>

            {/* Right - Overlapping Images */}
            <div className="relative h-[400px]">
              {/* Main Image (Back) */}
              <div className="absolute top-0 right-0 w-[75%]">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/home/hero/engine.jpg"
                    alt="Tim Teknisi"
                    width={400}
                    height={280}
                    className="w-full h-auto object-cover"
                    unoptimized
                  />
                </div>
              </div>
              
              {/* Secondary Image (Front - Overlapping) */}
              <div className="absolute bottom-0 left-0 w-[55%] z-10">
                <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-black">
                  <Image
                    src="/images/home/hero/maintance.png"
                    alt="Peralatan Service"
                    width={280}
                    height={200}
                    className="w-full h-auto object-cover"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misi Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 lg:gap-32 items-stretch">
            {/* Left - Single Image */}
            <div className="order-2 lg:order-1 h-full">
              <div className="rounded-2xl overflow-hidden shadow-lg h-full">
                <Image
                  src="/images/home/hero/brakes.jpg"
                  alt="Layanan Service"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Misi Kami
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Didirikan dengan komitmen terhadap kualitas dan inovasi, Honda Pekalongan dimulai sebagai tim kecil dengan visi besar. Selama bertahun-tahun, kami telah berkembang menjadi nama terpercaya di industri otomotif, memberikan proyek-proyek luar biasa yang teruji waktu.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span>Awal yang Sederhana</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span>Pencapaian dan Prestasi</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span>Membangun Warisan Kepercayaan</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span>Membentuk Masa Depan, Berakar pada Masa Lalu</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
