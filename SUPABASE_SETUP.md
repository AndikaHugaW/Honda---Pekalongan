# Setup Supabase untuk Showroom Mobil

Dokumentasi ini menjelaskan cara setup database Supabase untuk website showroom mobil dengan sistem admin dan user.

## 1. Buat Project Supabase

1. Kunjungi [https://app.supabase.com](https://app.supabase.com)
2. Buat akun atau login
3. Klik "New Project"
4. Isi detail project:
   - **Name**: Honda Pekalongan (atau nama yang diinginkan)
   - **Database Password**: Buat password yang kuat
   - **Region**: Pilih region terdekat (Singapore recommended untuk Indonesia)
5. Tunggu hingga project selesai dibuat (sekitar 2 menit)

## 2. Dapatkan API Keys

1. Di dashboard Supabase, klik **Settings** (ikon gear) di sidebar kiri
2. Pilih **API**
3. Copy nilai berikut:
   - **Project URL** → ini adalah `NEXT_PUBLIC_SUPABASE_URL`
   - **anon/public key** → ini adalah `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 3. Setup Environment Variables

1. Buat file `.env.local` di root project (copy dari `.env.example`)
2. Isi dengan nilai dari Supabase:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**PENTING**: Jangan commit file `.env.local` ke Git! File ini sudah ada di `.gitignore`.

## 4. Jalankan Migration Database

### Opsi A: Menggunakan Supabase Dashboard (Recommended untuk pemula)

1. Buka Supabase Dashboard
2. Klik **SQL Editor** di sidebar kiri
3. Buka file `supabase/migrations/001_initial_schema.sql`
4. Copy seluruh isi file tersebut
5. Paste ke SQL Editor di Supabase
6. Klik **Run** untuk menjalankan migration

### Opsi B: Menggunakan Supabase CLI

```bash
# Install Supabase CLI (jika belum)
npm install -g supabase

# Login ke Supabase
supabase login

# Link project
supabase link --project-ref your-project-ref

# Jalankan migration
supabase db push
```

## 5. Buat User Admin Pertama

Setelah migration berhasil, buat user admin pertama:

1. Di Supabase Dashboard, klik **Authentication** → **Users**
2. Klik **Add User** → **Create New User**
3. Isi email dan password untuk admin
4. Setelah user dibuat, buka **SQL Editor** dan jalankan query berikut:

```sql
-- Ganti 'user-email@example.com' dengan email admin yang baru dibuat
UPDATE public.profiles
SET role = 'admin'
WHERE user_id = (
  SELECT id FROM auth.users WHERE email = 'user-email@example.com'
);
```

## 6. Struktur Database

### Tabel: `profiles`
Menyimpan informasi profil user yang extends dari `auth.users`:
- `id`: UUID primary key
- `user_id`: Foreign key ke `auth.users`
- `full_name`: Nama lengkap
- `phone`: Nomor telepon
- `role`: 'admin' atau 'user' (default: 'user')
- `created_at`, `updated_at`: Timestamps

### Tabel: `mobil`
Menyimpan data mobil di showroom:
- `id`: UUID primary key
- `nama`: Nama mobil
- `merk`: Merk mobil (contoh: Honda)
- `model`: Model mobil
- `tahun`: Tahun produksi
- `harga`: Harga mobil (dalam rupiah)
- `kilometer`: Kilometer mobil
- `warna`: Warna mobil
- `transmisi`: 'manual', 'automatic', atau 'cvt'
- `bahan_bakar`: 'bensin', 'diesel', 'hybrid', atau 'electric'
- `deskripsi`: Deskripsi mobil
- `gambar_url`: Array URL gambar mobil
- `status`: 'tersedia', 'terjual', atau 'dipesan'
- `created_by`: User ID yang membuat data
- `created_at`, `updated_at`: Timestamps

## 7. Row Level Security (RLS) Policies

Database sudah dikonfigurasi dengan RLS untuk keamanan:

### Profiles:
- ✅ User dapat melihat dan update profil sendiri
- ✅ Admin dapat melihat dan update semua profil

### Mobil:
- ✅ Semua orang dapat melihat mobil dengan status 'tersedia'
- ✅ User terautentikasi dapat melihat semua mobil
- ✅ Hanya admin yang dapat create, update, dan delete mobil

## 8. Testing Setup

Setelah setup selesai, test dengan menjalankan:

```bash
npm install
npm run dev
```

Kemudian buka [http://localhost:3000](http://localhost:3000)

## 9. Helper Functions

Project sudah dilengkapi dengan helper functions di folder `lib/supabase/`:

### Authentication:
- `getCurrentUserProfile()` - Get profile user saat ini (server-side)
- `getCurrentUserProfileClient()` - Get profile user saat ini (client-side)
- `isAdmin()` - Cek apakah user adalah admin (server-side)
- `isAdminClient()` - Cek apakah user adalah admin (client-side)
- `updateProfile()` - Update profil user

### Mobil:
- `getAvailableCars()` - Get semua mobil tersedia (public)
- `getAllCars()` - Get semua mobil (authenticated)
- `getCarById()` - Get mobil by ID
- `createCar()` - Create mobil baru (admin only)
- `updateCar()` - Update mobil (admin only)
- `deleteCar()` - Delete mobil (admin only)
- `searchCars()` - Search mobil by keyword

## Troubleshooting

### Error: Missing Supabase environment variables
- Pastikan file `.env.local` sudah dibuat dan berisi URL dan key yang benar
- Restart development server setelah menambahkan environment variables

### Error: RLS policy violation
- Pastikan user sudah login
- Untuk operasi admin, pastikan user memiliki role 'admin' di tabel profiles

### Error: Cannot find module '@supabase/ssr'
- Jalankan `npm install` untuk menginstall dependencies

## Next Steps

1. Buat halaman login/register
2. Buat dashboard admin untuk manage mobil
3. Buat halaman public untuk melihat mobil tersedia
4. Implementasi upload gambar untuk mobil

