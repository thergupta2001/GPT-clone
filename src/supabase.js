import { createClient } from "@supabase/supabase-js";

const supabaseURL = 'https://eiztzjzmgbwosuzozkpn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpenR6anptZ2J3b3N1em96a3BuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE0MzUzNDcsImV4cCI6MjAxNzAxMTM0N30.sSuVY1-SQY8_UWYyw-VYut9Z8I_0JF2yphFmIWgcls8'

const supabase = createClient(supabaseURL, supabaseKey)

export default supabase