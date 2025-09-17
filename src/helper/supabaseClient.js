import { createClient } from '@supabase/supabase-js'

// Grab these from your Supabase project settings → API
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseAnonKey)
export default supabase;