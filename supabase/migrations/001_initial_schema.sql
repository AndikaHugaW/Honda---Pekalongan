-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create enum types
CREATE TYPE user_role AS ENUM ('admin', 'user');
CREATE TYPE mobil_status AS ENUM ('tersedia', 'terjual', 'dipesan');
CREATE TYPE transmisi_type AS ENUM ('manual', 'automatic', 'cvt');
CREATE TYPE bahan_bakar_type AS ENUM ('bensin', 'diesel', 'hybrid', 'electric');

-- Create profiles table (extends auth.users)
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID UNIQUE NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  phone TEXT,
  role user_role NOT NULL DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create mobil table
CREATE TABLE public.mobil (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  nama TEXT NOT NULL,
  merk TEXT NOT NULL,
  model TEXT NOT NULL,
  tahun INTEGER NOT NULL,
  harga BIGINT NOT NULL,
  kilometer INTEGER NOT NULL DEFAULT 0,
  warna TEXT NOT NULL,
  transmisi transmisi_type NOT NULL,
  bahan_bakar bahan_bakar_type NOT NULL,
  deskripsi TEXT,
  gambar_url TEXT[] DEFAULT ARRAY[]::TEXT[],
  status mobil_status NOT NULL DEFAULT 'tersedia',
  created_by UUID NOT NULL REFERENCES auth.users(id) ON DELETE RESTRICT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create indexes
CREATE INDEX idx_profiles_user_id ON public.profiles(user_id);
CREATE INDEX idx_profiles_role ON public.profiles(role);
CREATE INDEX idx_mobil_status ON public.mobil(status);
CREATE INDEX idx_mobil_merk ON public.mobil(merk);
CREATE INDEX idx_mobil_created_by ON public.mobil(created_by);
CREATE INDEX idx_mobil_created_at ON public.mobil(created_at DESC);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mobil ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
-- Users can view their own profile
CREATE POLICY "Users can view own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = user_id);

-- Users can update their own profile (but not role)
CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Admins can view all profiles
CREATE POLICY "Admins can view all profiles"
  ON public.profiles FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );

-- Admins can update all profiles
CREATE POLICY "Admins can update all profiles"
  ON public.profiles FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );

-- RLS Policies for mobil
-- Everyone can view available cars
CREATE POLICY "Anyone can view available cars"
  ON public.mobil FOR SELECT
  USING (status = 'tersedia');

-- Authenticated users can view all cars (including sold/reserved)
CREATE POLICY "Authenticated users can view all cars"
  ON public.mobil FOR SELECT
  USING (auth.role() = 'authenticated');

-- Only admins can insert cars
CREATE POLICY "Only admins can insert cars"
  ON public.mobil FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );

-- Only admins can update cars
CREATE POLICY "Only admins can update cars"
  ON public.mobil FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );

-- Only admins can delete cars
CREATE POLICY "Only admins can delete cars"
  ON public.mobil FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );

-- Function to automatically create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, full_name, role)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name', 'user');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile when user signs up
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc'::text, NOW());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to update updated_at on profiles
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- Trigger to update updated_at on mobil
CREATE TRIGGER update_mobil_updated_at
  BEFORE UPDATE ON public.mobil
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

