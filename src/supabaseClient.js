import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://htnmaeorqpkjrfldfhjc.supabase.co'; // supabase url
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0bm1hZW9ycXBranJmbGRmaGpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg1NzAzNjMsImV4cCI6MjA1NDE0NjM2M30.m_gwhjMOELRgUPNVsJi8iI5oDS2XYlHsrqF-0AQzmLw'; // supabase anon key
export const supabase = createClient(supabaseUrl, supabaseKey);