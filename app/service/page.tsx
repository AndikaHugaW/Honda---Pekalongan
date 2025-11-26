'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { FadeIn, StaggerContainer, StaggerItem, HoverScale } from '@/components/ui/animations'
import { motion } from 'framer-motion'

export default function ServicePage() {
  const services = [
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
    <div className="min-h-screen bg-black">
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
      <section id="services" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <motion.span
              className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-red-500 bg-red-500/10 rounded-full border border-red-500/20"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring' }}
            >
              Layanan Kami
            </motion.span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Pilihan Layanan Lengkap
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Berbagai layanan perawatan dan perbaikan untuk kendaraan Honda Anda
            </p>
          </FadeIn>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
            {services.map((service, index) => (
              <FadeIn key={index} direction="up" delay={index * 0.1}>
                <motion.div
                  className="bg-black border border-gray-800 rounded-2xl overflow-hidden group h-full flex flex-col shadow-lg relative"
                  whileHover={{ 
                    y: -8,
                    rotateX: 5,
                    rotateY: -5,
                    scale: 1.02,
                  }}
                  style={{
                    perspective: 1000,
                    transformStyle: 'preserve-3d',
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  {/* 3D Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-transparent opacity-0 z-20"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Number and Image */}
                  <div className="relative">
                    {/* Number with vertical line */}
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                      <span className="text-2xl font-bold text-white drop-shadow-lg">{service.number}</span>
                      <div className="w-px h-8 bg-white"></div>
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
                  <div className="p-6 flex flex-col flex-1 bg-black relative z-10" style={{ transform: 'translateZ(20px)' }}>
                    <h3 className="text-xl font-bold text-white uppercase mb-3">{service.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-1">
                      {service.description}
                    </p>
                    
                    {/* Learn More Button */}
                    <motion.button
                      className="flex items-center gap-2 text-red-500 text-sm font-medium group/btn mt-auto"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span>LEARN MORE</span>
                      <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </div>
                  
                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent z-30"
                    initial={{ x: '-100%', rotate: 45 }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                  />
                </motion.div>
              </FadeIn>
            ))}
          </div>

          {/* Why Choose Us - SaaS Style */}
          <div className="mb-20">
            <FadeIn className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
                Mengapa Pilih Layanan Kami?
              </h2>
              <p className="text-lg text-gray-300 font-medium">
                Reliability. Quality. Trust. This is the new standard of vehicle care.
              </p>
            </FadeIn>
            
            <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  ),
                  title: 'Expert Certified Technicians',
                  desc: 'Dedicated service professionals with Honda certification and years of diagnostic expertise for quick resolution.',
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: 'Genuine OEM Parts Only',
                  desc: 'Guaranteed original components with official Honda warranty. No compromises on quality or authenticity.',
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                  title: 'Transparent, Flat-Rate Pricing',
                  desc: 'No hidden costs, clear quotes delivered upfront. Upfront quotes delivered digitally for complete transparency.',
                },
              ].map((item, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="bg-black rounded-2xl shadow-lg p-8 border border-gray-800 text-center h-full relative overflow-hidden"
                    whileHover={{ 
                      y: -8,
                      rotateX: 5,
                      rotateY: -5,
                      scale: 1.02,
                    }}
                    style={{
                      perspective: 1000,
                      transformStyle: 'preserve-3d',
                    }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    {/* 3D Glow Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-transparent opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Content */}
                    <div className="relative z-10" style={{ transform: 'translateZ(20px)' }}>
                      <motion.div
                        className="w-16 h-16 bg-red-500/10 rounded-xl flex items-center justify-center mx-auto mb-6 text-red-500"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.icon}
                      </motion.div>
                      <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm">
                        {item.desc}
                      </p>
                    </div>
                    
                    {/* Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                      initial={{ x: '-100%', rotate: 45 }}
                      whileHover={{ x: '200%' }}
                      transition={{ duration: 0.6, ease: 'easeInOut' }}
                    />
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Booking Steps */}
          <div className="mb-20">
            <FadeIn className="text-center mb-12">
              <motion.span
                className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-red-500 bg-red-500/10 rounded-full border border-red-500/20"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring' }}
              >
                Cara Booking
              </motion.span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                Proses Booking Mudah
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Hanya 4 langkah sederhana untuk booking service kendaraan Anda
              </p>
            </FadeIn>
            <StaggerContainer className="grid md:grid-cols-4 gap-6 lg:gap-8">
              {bookingSteps.map((step, index) => (
                <StaggerItem key={step.step}>
                  <motion.div
                    className="relative"
                    whileHover={{ 
                      y: -8,
                      rotateX: 5,
                      rotateY: -5,
                      scale: 1.02,
                    }}
                    style={{
                      perspective: 1000,
                      transformStyle: 'preserve-3d',
                    }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <div className="bg-black rounded-2xl shadow-lg p-6 text-center border border-gray-800 group hover:border-red-500 transition-colors relative overflow-hidden">
                      {/* 3D Glow Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-transparent opacity-0"
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Content */}
                      <div className="relative z-10" style={{ transform: 'translateZ(20px)' }}>
                        <motion.div
                          className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-3xl font-bold shadow-lg"
                          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          {step.step}
                        </motion.div>
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-500 transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-300">{step.description}</p>
                      </div>
                      
                      {/* Shine Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                        initial={{ x: '-100%', rotate: 45 }}
                        whileHover={{ x: '200%' }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                      />
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
              <div className="bg-gray-900 rounded-3xl shadow-2xl p-12 text-center border border-gray-800">
                <motion.h2
                  className="text-3xl sm:text-4xl font-bold text-white mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Siap Melayani Kendaraan Anda
                </motion.h2>
                <motion.p
                  className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
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
                      className="px-8 py-4 text-lg font-semibold text-white bg-gray-800 border-2 border-gray-700 rounded-xl hover:border-red-500 hover:text-red-500 transition-all duration-300 shadow-md"
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
