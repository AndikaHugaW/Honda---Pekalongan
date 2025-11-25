# Honda Pekalongan

Website showroom mobil Honda Pekalongan menggunakan Next.js, TypeScript, Tailwind CSS, dan Supabase.

## Teknologi yang Digunakan

- **Next.js 14** - Framework React untuk production dengan App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Supabase** - Backend as a Service (Database, Authentication, Storage)

## Fitur

- ✅ Authentication dengan role-based access (Admin & User)
- ✅ Database untuk data mobil showroom
- ✅ Row Level Security (RLS) untuk keamanan data
- ✅ Server-side dan Client-side Supabase clients
- ✅ TypeScript types untuk type safety

## Getting Started

### 1. Install Dependencies

```bash
npm install
# atau
yarn install
# atau
pnpm install
```

### 2. Setup Supabase

1. Buat project di [Supabase](https://app.supabase.com)
2. Dapatkan API keys dari Settings → API
3. Buat file `.env.local` di root project:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Jalankan migration database (lihat [SUPABASE_SETUP.md](./SUPABASE_SETUP.md))

### 3. Run Development Server

```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat hasilnya.

### 4. Build untuk Production

```bash
npm run build
npm start
```

## Struktur Project

```
.
├── app/                      # App Router (Next.js 13+)
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles dengan Tailwind
├── lib/
│   └── supabase/            # Supabase clients & helpers
│       ├── client.ts        # Client-side Supabase client
│       ├── server.ts        # Server-side Supabase client
│       ├── middleware.ts    # Middleware untuk session management
│       ├── auth.ts          # Authentication helpers
│       └── mobil.ts         # Mobil CRUD helpers
├── types/
│   └── database.types.ts   # TypeScript types untuk database
├── supabase/
│   └── migrations/         # Database migrations
│       └── 001_initial_schema.sql
├── middleware.ts            # Next.js middleware
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## Database Schema

### Profiles
- Extends dari `auth.users`
- Menyimpan informasi user (nama, phone, role)

### Mobil
- Data mobil di showroom
- Fields: nama, merk, model, tahun, harga, kilometer, warna, transmisi, bahan_bakar, deskripsi, gambar_url, status

## Authentication & Authorization

- **User**: Dapat melihat semua mobil dan update profil sendiri
- **Admin**: Dapat melakukan semua operasi termasuk CRUD mobil

## Dokumentasi Lengkap

Lihat [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) untuk panduan setup Supabase yang lebih detail.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
