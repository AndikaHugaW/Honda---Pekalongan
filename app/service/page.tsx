'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { FadeIn, StaggerContainer, StaggerItem, HoverScale } from '@/components/ui/animations'
import { motion } from 'framer-motion'

export default function ServicePage() {
  const services = [
    {
      title: 'Service Berkala',
      description: 'Perawatan rutin untuk menjaga performa kendaraan Anda tetap optimal',
      icon: '🔧',
      features: [
        'Ganti oli dan filter',
        'Pemeriksaan komponen',
        'Service AC',
        'Pemeriksaan rem',
      ],
    },
    {
      title: 'Perbaikan',
      description: 'Perbaikan kerusakan dengan teknisi berpengalaman dan spare part original',
      icon: '🛠️',
      features: [
        'Diagnosis masalah',
        'Perbaikan mesin',
        'Perbaikan kelistrikan',
        'Perbaikan body',
      ],
    },
    {
      title: 'Spare Part',
      description: 'Spare part original Honda dengan garansi resmi',
      icon: '⚙️',
      features: [
        'Spare part original',
        'Stok lengkap',
        'Harga kompetitif',
        'Garansi resmi',
      ],
    },
    {
      title: 'Body Repair',
      description: 'Perbaikan body dan pengecatan dengan standar tinggi',
      icon: '🎨',
      features: [
        'Perbaikan body',
        'Pengecatan ulang',
        'Denting repair',
        'Polish & wax',
      ],
    },
    {
      title: 'Warranty Service',
      description: 'Layanan garansi resmi Honda untuk kendaraan baru',
      icon: '🛡️',
      features: [
        'Klaim garansi',
        'Service gratis',
        'Survey kerusakan',
        'Follow up',
      ],
    },
    {
      title: '24/7 Emergency',
      description: 'Layanan darurat 24 jam untuk kendaraan Anda',
      icon: '🚑',
      features: [
        'Towing service',
        'Emergency repair',
        'Bantuan jalan',
        'Konsultasi',
      ],
    },
  ]

  const bookingSteps = [
    {
      step: 1,
      title: 'Pilih Layanan',
      description: 'Pilih jenis service yang Anda butuhkan',
    },
    {
      step: 2,
      title: 'Booking Online',
      description: 'Isi form booking dengan data kendaraan Anda',
    },
    {
      step: 3,
      title: 'Konfirmasi',
      description: 'Tim kami akan konfirmasi jadwal service Anda',
    },
    {
      step: 4,
      title: 'Service',
      description: 'Datang ke bengkel pada jadwal yang ditentukan',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section dengan Background Image */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image dengan Overlay */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
            }}
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 via-red-800/85 to-red-900/90" />
          {/* Pattern Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          {/* Animated Shimmer */}
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
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-4xl">
            <FadeIn direction="right">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.span
                  className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-white bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                >
                  Layanan Service Profesional
                </motion.span>
              </motion.div>

              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Perawatan Kendaraan
                <span className="block mt-2 bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
                  Terpercaya & Profesional
                </span>
              </motion.h1>

              <motion.p
                className="text-xl sm:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Tim teknisi berpengalaman siap memberikan pelayanan terbaik dengan 
                spare part original Honda untuk menjaga performa kendaraan Anda tetap optimal.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <Link href="#services">
                  <motion.button
                    className="px-8 py-4 text-lg font-semibold text-white bg-white/20 backdrop-blur-md rounded-xl border-2 border-white/30 hover:bg-white/30 hover:border-white/50 shadow-xl hover:shadow-2xl relative overflow-hidden group"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Lihat Layanan
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        ↓
                      </motion.span>
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-white/30"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </Link>
                <Link href="/kontak">
                  <motion.button
                    className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-red-600 to-red-500 rounded-xl shadow-xl hover:shadow-2xl relative overflow-hidden group"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">Booking Sekarang</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                {[
                  { number: '10+', label: 'Tahun Pengalaman' },
                  { number: '50K+', label: 'Pelanggan Puas' },
                  { number: '100%', label: 'Spare Part Original' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1, type: 'spring' }}
                  >
                    <motion.div
                      className="text-4xl sm:text-5xl font-bold text-white mb-2"
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                        ease: 'easeInOut',
                      }}
                    >
                      {stat.number}
                    </motion.div>
                    <p className="text-white/80 text-sm sm:text-base">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </FadeIn>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full mt-2"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <motion.span
              className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-red-600 bg-red-50 rounded-full"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring' }}
            >
              Layanan Kami
            </motion.span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
              Pilihan Layanan Lengkap
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Berbagai layanan perawatan dan perbaikan untuk kendaraan Honda Anda
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <StaggerItem key={index}>
                <HoverScale scale={1.03}>
                  <motion.div
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 group"
                    whileHover={{ y: -8 }}
                  >
                    <motion.div
                      className="text-5xl mb-4"
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                        ease: 'easeInOut',
                      }}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start text-sm text-gray-600"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          <span className="text-red-600 mr-2 font-bold">✓</span>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Why Choose Us */}
          <FadeIn delay={0.2}>
            <HoverScale>
              <div className="bg-gradient-to-br from-red-600 via-red-500 to-orange-500 rounded-3xl shadow-2xl p-12 mb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
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
                <div className="relative z-10">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
                    Mengapa Pilih Layanan Kami?
                  </h2>
                  <StaggerContainer className="grid md:grid-cols-3 gap-8">
                    {[
                      {
                        icon: '🏆',
                        title: 'Teknisi Berpengalaman',
                        desc: 'Tim teknisi tersertifikasi dengan pengalaman bertahun-tahun',
                      },
                      {
                        icon: '✅',
                        title: 'Spare Part Original',
                        desc: 'Hanya menggunakan spare part original Honda dengan garansi resmi',
                      },
                      {
                        icon: '💰',
                        title: 'Harga Transparan',
                        desc: 'Harga yang kompetitif tanpa hidden cost',
                      },
                    ].map((item, index) => (
                      <StaggerItem key={index}>
                        <motion.div
                          className="text-center text-white"
                          whileHover={{ scale: 1.05 }}
                        >
                          <motion.div
                            className="text-5xl mb-4"
                            animate={{
                              rotate: [0, 10, -10, 0],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: index * 0.5,
                              ease: 'easeInOut',
                            }}
                          >
                            {item.icon}
                          </motion.div>
                          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                          <p className="text-white/90">{item.desc}</p>
                        </motion.div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              </div>
            </HoverScale>
          </FadeIn>

          {/* Booking Steps */}
          <div className="mb-20">
            <FadeIn className="text-center mb-12">
              <motion.span
                className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-red-600 bg-red-50 rounded-full"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring' }}
              >
                Cara Booking
              </motion.span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
                Proses Booking Mudah
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Hanya 4 langkah sederhana untuk booking service kendaraan Anda
              </p>
            </FadeIn>
            <StaggerContainer className="grid md:grid-cols-4 gap-8">
              {bookingSteps.map((step, index) => (
                <StaggerItem key={step.step}>
                  <motion.div
                    className="relative"
                    whileHover={{ y: -8 }}
                  >
                    <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100 group hover:border-red-500 transition-colors">
                      <motion.div
                        className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-3xl font-bold shadow-lg"
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        {step.step}
                      </motion.div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                    {step.step < bookingSteps.length && (
                      <motion.div
                        className="hidden md:block absolute top-1/2 -right-4 text-red-500 text-3xl z-10"
                        animate={{
                          x: [0, 5, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        →
                      </motion.div>
                    )}
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* CTA Section */}
          <FadeIn delay={0.2}>
            <HoverScale>
              <div className="bg-white rounded-3xl shadow-2xl p-12 text-center border border-gray-100">
                <motion.h2
                  className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Siap Melayani Kendaraan Anda
                </motion.h2>
                <motion.p
                  className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  Booking service sekarang dan dapatkan pelayanan terbaik dari tim profesional kami
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <Link href="/kontak">
                    <motion.button
                      className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-red-600 to-red-500 rounded-xl shadow-lg hover:shadow-xl relative overflow-hidden group"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10">Hubungi Kami</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                  </Link>
                  <Link href="/kontak">
                    <motion.button
                      className="px-8 py-4 text-lg font-semibold text-gray-700 bg-white border-2 border-gray-300 rounded-xl hover:border-red-500 hover:text-red-600 transition-all duration-300 shadow-md"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Booking Service
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </HoverScale>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  )
}
