export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          user_id: string
          full_name: string | null
          phone: string | null
          role: 'admin' | 'user'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          full_name?: string | null
          phone?: string | null
          role?: 'admin' | 'user'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          full_name?: string | null
          phone?: string | null
          role?: 'admin' | 'user'
          created_at?: string
          updated_at?: string
        }
      }
      mobil: {
        Row: {
          id: string
          nama: string
          merk: string
          model: string
          tahun: number
          harga: number
          kilometer: number
          warna: string
          transmisi: 'manual' | 'automatic' | 'cvt'
          bahan_bakar: 'bensin' | 'diesel' | 'hybrid' | 'electric'
          deskripsi: string | null
          gambar_url: string[]
          status: 'tersedia' | 'terjual' | 'dipesan'
          created_by: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          nama: string
          merk: string
          model: string
          tahun: number
          harga: number
          kilometer: number
          warna: string
          transmisi: 'manual' | 'automatic' | 'cvt'
          bahan_bakar: 'bensin' | 'diesel' | 'hybrid' | 'electric'
          deskripsi?: string | null
          gambar_url?: string[]
          status?: 'tersedia' | 'terjual' | 'dipesan'
          created_by: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          nama?: string
          merk?: string
          model?: string
          tahun?: number
          harga?: number
          kilometer?: number
          warna?: string
          transmisi?: 'manual' | 'automatic' | 'cvt'
          bahan_bakar?: 'bensin' | 'diesel' | 'hybrid' | 'electric'
          deskripsi?: string | null
          gambar_url?: string[]
          status?: 'tersedia' | 'terjual' | 'dipesan'
          created_by?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      user_role: 'admin' | 'user'
      mobil_status: 'tersedia' | 'terjual' | 'dipesan'
      transmisi_type: 'manual' | 'automatic' | 'cvt'
      bahan_bakar_type: 'bensin' | 'diesel' | 'hybrid' | 'electric'
    }
  }
}

