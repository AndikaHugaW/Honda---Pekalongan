import { createClient } from './server'
import { supabase } from './client'

export type UserRole = 'admin' | 'user'

export interface UserProfile {
  id: string
  user_id: string
  full_name: string | null
  phone: string | null
  role: UserRole
  created_at: string
  updated_at: string
}

/**
 * Get current user profile (server-side)
 */
export async function getCurrentUserProfile(): Promise<UserProfile | null> {
  const supabaseClient = await createClient()
  
  const { data: { user } } = await supabaseClient.auth.getUser()
  if (!user) return null

  const { data: profile, error } = await supabaseClient
    .from('profiles')
    .select('*')
    .eq('user_id', user.id)
    .single()

  if (error || !profile) return null
  return profile
}

/**
 * Get current user profile (client-side)
 */
export async function getCurrentUserProfileClient(): Promise<UserProfile | null> {
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null

  const { data: profile, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('user_id', user.id)
    .single()

  if (error || !profile) return null
  return profile
}

/**
 * Check if current user is admin (server-side)
 */
export async function isAdmin(): Promise<boolean> {
  const profile = await getCurrentUserProfile()
  return profile?.role === 'admin'
}

/**
 * Check if current user is admin (client-side)
 */
export async function isAdminClient(): Promise<boolean> {
  const profile = await getCurrentUserProfileClient()
  return profile?.role === 'admin'
}

/**
 * Update user profile
 */
export async function updateProfile(
  userId: string,
  updates: {
    full_name?: string
    phone?: string
    role?: UserRole
  }
) {
  const supabaseClient = await createClient()
  
  const { data, error } = await supabaseClient
    .from('profiles')
    .update(updates)
    .eq('user_id', userId)
    .select()
    .single()

  return { data, error }
}

