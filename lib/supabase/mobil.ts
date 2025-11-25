import { createClient } from './server'
import { supabase } from './client'
import type { Database } from '@/types/database.types'

type Mobil = Database['public']['Tables']['mobil']['Row']
type MobilInsert = Database['public']['Tables']['mobil']['Insert']
type MobilUpdate = Database['public']['Tables']['mobil']['Update']

/**
 * Get all available cars (public)
 */
export async function getAvailableCars() {
  const { data, error } = await supabase
    .from('mobil')
    .select('*')
    .eq('status', 'tersedia')
    .order('created_at', { ascending: false })

  return { data, error }
}

/**
 * Get all cars (authenticated users)
 */
export async function getAllCars() {
  const supabaseClient = await createClient()
  
  const { data, error } = await supabaseClient
    .from('mobil')
    .select('*')
    .order('created_at', { ascending: false })

  return { data, error }
}

/**
 * Get car by ID
 */
export async function getCarById(id: string) {
  const supabaseClient = await createClient()
  
  const { data, error } = await supabaseClient
    .from('mobil')
    .select('*')
    .eq('id', id)
    .single()

  return { data, error }
}

/**
 * Create new car (admin only)
 */
export async function createCar(car: MobilInsert) {
  const supabaseClient = await createClient()
  
  const { data: { user } } = await supabaseClient.auth.getUser()
  if (!user) {
    return { data: null, error: { message: 'Unauthorized' } }
  }

  const { data, error } = await supabaseClient
    .from('mobil')
    .insert({
      ...car,
      created_by: user.id,
    })
    .select()
    .single()

  return { data, error }
}

/**
 * Update car (admin only)
 */
export async function updateCar(id: string, updates: MobilUpdate) {
  const supabaseClient = await createClient()
  
  const { data, error } = await supabaseClient
    .from('mobil')
    .update(updates)
    .eq('id', id)
    .select()
    .single()

  return { data, error }
}

/**
 * Delete car (admin only)
 */
export async function deleteCar(id: string) {
  const supabaseClient = await createClient()
  
  const { error } = await supabaseClient
    .from('mobil')
    .delete()
    .eq('id', id)

  return { error }
}

/**
 * Search cars by keyword
 */
export async function searchCars(keyword: string) {
  const supabaseClient = await createClient()
  
  const { data, error } = await supabaseClient
    .from('mobil')
    .select('*')
    .or(`nama.ilike.%${keyword}%,merk.ilike.%${keyword}%,model.ilike.%${keyword}%`)
    .order('created_at', { ascending: false })

  return { data, error }
}

