'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { FadeIn } from '@/components/ui/animations'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function KontakPage() {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    telepon: '',
    pesan: '',
    terms: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Terima kasih! Pesan Anda telah terkirim. Tim kami akan segera menghubungi Anda.')
    setFormData({
      nama: '',
      email: '',
      telepon: '',
      pesan: '',
      terms: false,
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement
    setFormData({
      ...formData,
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    })
  }

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Telepon',
      content: '+62 XXX XXX XXXX',
      link: 'tel:+62XXXXXXXXXXX',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      content: 'info@hondapekalongan.com',
      link: 'mailto:info@hondapekalongan.com',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Alamat',
      content: 'Jl. Contoh No. 123, Pekalongan, Jawa Tengah',
      link: '#',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Jam Operasional',
      content: 'Senin - Sabtu: 08:00 - 17:00',
      link: '#',
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-red-600 to-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Hubungi Kami
            </h1>
            <p className="text-xl text-red-50 max-w-2xl mx-auto">
              Ada pertanyaan atau butuh bantuan? Tim kami siap membantu Anda
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Left - Image with Overlay Card */}
            <FadeIn direction="right" delay={0.2}>
              <div className="relative h-full min-h-[500px] lg:min-h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://hondaikb.co.id/wp-content/uploads/2024/08/Exterior-Dealer-Honda-Fatmawati--1024x576.jpg"
                  alt="Honda Service"
                  fill
                  className="object-cover rounded-2xl"
                  unoptimized
                />
                
                {/* Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Image
                      src="/images/home/hero/logo.png"
                      alt="Honda Pekalongan"
                      width={120}
                      height={40}
                      className="h-8 w-auto object-contain"
                      unoptimized
                    />
                    <h3 className="text-xl font-bold text-red-600">Honda Pekalongan</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Honda Pekalongan mendukung dan memberdayakan inovasi otomotif sebagai dealer resmi dengan layanan lengkap di berbagai bidang kendaraan.
                  </p>
                  <div className="flex items-center gap-3">
                    {/* Twitter */}
                    <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-red-600 group transition-colors">
                      <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    {/* Gmail */}
                    <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-red-600 group transition-colors">
                      <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                      </svg>
                    </a>
                    {/* WhatsApp */}
                    <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-red-600 group transition-colors">
                      <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </a>
                    {/* Facebook */}
                    <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-red-600 group transition-colors">
                      <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right - Contact Form */}
            <FadeIn direction="left" delay={0.3}>
              <div className="bg-gray-900 rounded-2xl shadow-lg p-8 lg:p-10 h-full flex flex-col border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Send a message
                </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nama" className="block text-sm font-medium text-gray-300 mb-2">
                    Enter your full name
                  </label>
                  <input
                    type="text"
                    id="nama"
                    name="nama"
                    value={formData.nama}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Enter your email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="telepon" className="block text-sm font-medium text-gray-300 mb-2">
                    Enter your phone number
                  </label>
                  <input
                    type="tel"
                    id="telepon"
                    name="telepon"
                    value={formData.telepon}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="pesan" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="pesan"
                    name="pesan"
                    value={formData.pesan}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors resize-none"
                    placeholder="Type Here"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    required
                    className="w-4 h-4 text-red-600 border-gray-600 bg-black rounded focus:ring-red-500"
                  />
                  <label htmlFor="terms" className="ml-2 text-sm text-gray-300">
                    I agree to the terms of service.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 text-lg font-semibold text-white bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-300"
                >
                  Submit
                </button>
              </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

