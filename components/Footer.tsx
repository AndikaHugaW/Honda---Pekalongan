import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              Honda Pekalongan
            </h3>
            <p className="text-gray-400 text-sm">
              Showroom resmi Honda di Pekalongan dengan komitmen memberikan 
              pelayanan terbaik dan kualitas terjamin.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/mobil" className="text-gray-400 hover:text-white transition-colors">
                  Mobil
                </Link>
              </li>
              <li>
                <Link href="/tentang-kami" className="text-gray-400 hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/service" className="text-gray-400 hover:text-white transition-colors">
                  Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Penjualan Mobil Baru</li>
              <li className="text-gray-400">Penjualan Mobil Bekas</li>
              <li className="text-gray-400">Service & Maintenance</li>
              <li className="text-gray-400">Spare Part</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Jl. Contoh No. 123</li>
              <li>Pekalongan, Jawa Tengah</li>
              <li>+62 XXX XXX XXXX</li>
              <li>info@hondapekalongan.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Honda Pekalongan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

