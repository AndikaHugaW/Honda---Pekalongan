'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { FadeIn, StaggerContainer, StaggerItem, HoverScale } from '@/components/ui/animations'
import { motion } from 'framer-motion'
import { useState } from 'react'

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
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 bg-black">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(239, 68, 68, 0.1) 0%, transparent 50%),
                                radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
              backgroundSize: '200% 200%',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="down" delay={0.2}>
            <motion.span
              className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-red-500 bg-red-500/10 rounded-full border border-red-500/20"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              Tentang Kami
            </motion.span>
          </FadeIn>
          <FadeIn direction="down" delay={0.3}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Lebih dari Sekadar
              <br />
              <span className="bg-gradient-to-r from-red-500 via-red-400 to-orange-500 bg-clip-text text-transparent">
                Showroom Mobil
              </span>
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.4}>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Kami adalah mitra terpercaya Anda dalam mewujudkan impian memiliki mobil Honda berkualitas dengan pelayanan profesional dan komitmen tinggi.
            </p>
          </FadeIn>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-white/50 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ y: -8, scale: 1.05 }}
                >
                  <motion.div
                    className="text-red-500 mb-4 flex justify-center"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    <Icon name={stat.icon} className="w-12 h-12" />
                  </motion.div>
                  <motion.h3
                    className="text-4xl lg:text-5xl font-extrabold text-white mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-gray-300 text-sm lg:text-base">{stat.label}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <FadeIn direction="right">
              <div>
                <motion.span
                  className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-red-600 bg-red-50 rounded-full"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  Tentang Kami
                </motion.span>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                  Selamat Datang di
                  <br />
                  <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                    Honda Pekalongan
                  </span>
                </h2>
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    Honda Pekalongan adalah showroom resmi Honda yang telah melayani masyarakat Pekalongan dan sekitarnya selama lebih dari 10 tahun. Kami berkomitmen untuk memberikan pelayanan terbaik dan kualitas terjamin kepada setiap pelanggan.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    Sebagai dealer resmi Honda, kami menyediakan berbagai model mobil Honda terbaru dengan kualitas asli dan pelayanan purna jual yang lengkap. Tim kami terdiri dari profesional berpengalaman yang siap membantu Anda dalam menemukan mobil impian.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    Kami tidak hanya menjual mobil, tetapi juga memberikan layanan service dan maintenance berkualitas tinggi dengan menggunakan spare part original Honda untuk menjaga performa kendaraan Anda tetap optimal.
                  </motion.p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 rounded-3xl transform rotate-6 opacity-20 blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl p-8 overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    />
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    >
                      <svg
                        className="w-48 h-48 text-white/20"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          </div>

          {/* Values */}
          <div className="mb-24">
            <FadeIn direction="down" className="text-center mb-16">
              <motion.span
                className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-red-600 bg-red-50 rounded-full"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring' }}
              >
                Nilai-Nilai Kami
              </motion.span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
                Apa yang Membuat Kami
                <br />
                <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                  Berbeda
                </span>
              </h2>
            </FadeIn>
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <StaggerItem key={index}>
                  <HoverScale scale={1.05}>
                    <motion.div
                      className="relative bg-white/5 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-white/10"
                      onHoverStart={() => setHoveredValue(index)}
                      onHoverEnd={() => setHoveredValue(null)}
                      whileHover={{ y: -8 }}
                    >
                      {/* Gradient Background on Hover */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                      />
                      <div className="relative p-8 text-center">
                        <motion.div
                          className={`w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                          animate={{
                            scale: hoveredValue === index ? [1, 1.1, 1] : 1,
                            rotate: hoveredValue === index ? [0, 5, -5, 0] : 0,
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          <span className="text-3xl text-white font-bold">{value.icon}</span>
                        </motion.div>
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-red-500 group-hover:bg-clip-text transition-all duration-300">
                          {value.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">{value.description}</p>
                      </div>
                    </motion.div>
                  </HoverScale>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Team */}
          <div className="mb-24">
            <FadeIn direction="down" className="text-center mb-16">
              <motion.span
                className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-red-600 bg-red-50 rounded-full"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring' }}
              >
                Tim Kami
              </motion.span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
                Tim Profesional
                <br />
                <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                  yang Berdedikasi
                </span>
              </h2>
            </FadeIn>
            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              {teams.map((team, index) => (
                <StaggerItem key={index}>
                  <HoverScale scale={1.03}>
                    <motion.div
                      className="bg-white/5 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-white/10"
                      whileHover={{ y: -8 }}
                    >
                      <div className="p-8 text-center">
                        <motion.div
                          className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow"
                          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon name={team.icon} className="w-12 h-12 text-white" />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                          {team.name}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">{team.description}</p>
                      </div>
                    </motion.div>
                  </HoverScale>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Visi Misi */}
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn direction="right">
              <motion.div
                className="relative bg-gradient-to-br from-red-600 via-red-500 to-orange-500 rounded-2xl shadow-2xl p-10 text-white overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                <div className="relative z-10">
                  <motion.div
                    className="text-white mb-6"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  >
                    <Icon name="star" className="w-12 h-12" />
                  </motion.div>
                  <h3 className="text-3xl font-extrabold mb-6">Visi</h3>
                  <p className="text-lg leading-relaxed text-white/90">
                    Menjadi showroom mobil Honda terdepan di Pekalongan dengan pelayanan terbaik dan kepuasan pelanggan sebagai prioritas utama.
                  </p>
                </div>
              </motion.div>
            </FadeIn>
            <FadeIn direction="left">
              <motion.div
                className="bg-white/5 backdrop-blur-sm rounded-2xl shadow-2xl p-10 border border-white/10"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="text-red-500 mb-6"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Icon name="document" className="w-12 h-12" />
                </motion.div>
                <h3 className="text-3xl font-extrabold mb-6 text-white">Misi</h3>
                <ul className="space-y-4">
                  {[
                    'Menyediakan produk Honda berkualitas tinggi dengan harga kompetitif',
                    'Memberikan pelayanan prima kepada setiap pelanggan',
                    'Membangun kepercayaan melalui transparansi dan integritas',
                    'Mengembangkan tim profesional yang berkomitmen pada kualitas',
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="text-red-500 mr-3 mt-1 text-xl">✓</span>
                      <span className="text-lg leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
