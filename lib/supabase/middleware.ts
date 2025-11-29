import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  try {
    // Check if environment variables are set
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseAnonKey) {
      // Return response without Supabase if env vars are missing
      return NextResponse.next({ request })
    }

    let response = NextResponse.next({
      request,
    })

    const supabase = createServerClient(
      supabaseUrl,
      supabaseAnonKey,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll()
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) => {
              try {
                request.cookies.set(name, value)
                response.cookies.set(name, value, options)
              } catch (error) {
                // Ignore cookie setting errors
              }
            })
          },
        },
      }
    )

    // Refresh session if expired - required for Server Components
    try {
      await supabase.auth.getUser()
    } catch (authError) {
      // If auth check fails, still return response
      // This prevents middleware from crashing
    }

    return response
  } catch (error) {
    // Log error but don't fail the request
    // Return a valid response to prevent middleware failure
    return NextResponse.next({ request })
  }
}

