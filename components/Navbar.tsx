'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const menuItems = [
    { name: 'Beranda', href: '/' },
    { name: 'Mobil', href: '/mobil' },
    { name: 'Tentang Kami', href: '/tentang-kami' },
    { name: 'Service', href: '/service' },
    { name: 'Kontak', href: '/kontak' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname?.startsWith(href)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-xl shadow-lg border-b border-white/10'
          : 'bg-black/70 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/images/home/hero/logo.png"
                alt="Honda Pekalongan"
                width={180}
                height={60}
                className="h-12 w-auto object-contain"
                priority
                unoptimized
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {menuItems.map((item, index) => {
              const active = isActive(item.href)
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 group ${
                      active
                        ? 'text-red-500 font-semibold'
                        : 'text-white/90 hover:text-red-500'
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {active ? (
                      <motion.span
                        className="absolute inset-0 bg-red-500/20 rounded-lg -z-0"
                        layoutId="activeMenu"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    ) : (
                      <motion.span
                        className="absolute inset-0 bg-red-500/10 rounded-lg -z-0"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:space-x-3">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              <Link href="/mobil">
                <motion.button
                  className="relative px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-red-500 rounded-lg overflow-hidden group shadow-md hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Get Started
                  </span>
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

          {/* Mobile menu button */}
          <motion.div
            className="lg:hidden"
            whileTap={{ scale: 0.9 }}
          >
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-white/90 hover:text-red-500 hover:bg-white/10 focus:outline-none transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <motion.svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                animate={isMenuOpen ? { rotate: 180 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </motion.svg>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-1 bg-black/90 backdrop-blur-xl border-t border-white/10">
              {menuItems.map((item, index) => {
                const active = isActive(item.href)
                return (
                  <motion.div
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                        active
                          ? 'text-red-500 bg-red-500/20 font-semibold'
                          : 'text-white/90 hover:text-red-500 hover:bg-white/10'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                )
              })}
              <div className="pt-2 space-y-2">
                <Link
                  href="/kontak"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                    pathname === '/kontak'
                      ? 'text-red-500 bg-red-500/20 font-semibold'
                      : 'text-white/90 hover:text-red-500 hover:bg-white/10'
                  }`}
                >
                  Kontak
                </Link>
                <Link
                  href="/mobil"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-red-500 rounded-lg hover:from-red-700 hover:to-red-600 transition-all duration-300 shadow-md"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
