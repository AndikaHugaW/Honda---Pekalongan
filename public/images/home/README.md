# Home Page Images

Folder ini digunakan untuk menyimpan gambar-gambar yang digunakan di halaman utama (`app/page.tsx`).

## Struktur Folder

- `hero/` - Gambar untuk hero section
- `cars/` - Gambar mobil untuk showcase dan preview
- `partners/` - Logo partner (sudah ada di `public/partners/`)
- `testimonials/` - Foto reviewer/testimonial
- `stats/` - Gambar untuk statistik section

## Cara Menggunakan

1. Simpan gambar Anda di folder yang sesuai
2. Gunakan path relatif dari `public/` dalam kode:
   - Contoh: `/images/home/hero/hero-image.jpg`
   - Atau menggunakan Next.js Image component:
   ```tsx
   import Image from 'next/image'
   <Image src="/images/home/hero/hero-image.jpg" alt="Hero" width={1200} height={800} />
   ```

## Format yang Disarankan

- **Format**: JPG, PNG, WebP
- **Ukuran**: Optimalkan gambar sebelum upload
- **Naming**: Gunakan kebab-case (contoh: `hero-background.jpg`)

