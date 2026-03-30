import { createClient } from '@supabase/supabase-js'

// These match the keys we put in your .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY! 

// We use the Service Role Key here so the AI can 
// bypass security and insert tasks directly.
export const supabase = createClient(supabaseUrl, supabaseServiceKey)