// supabase.js (ES module)
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

export const SUPABASE_URL = 'https://puzefddnrbrryspquxaj.supabase.co'; // <-- ganti
export const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1emVmZGRucmJycnlzcHF1eGFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM2MzI1NDYsImV4cCI6MjA3OTIwODU0Nn0.7efR2vRAiqlYvynMLVImNpcMHirD5vJobmC111Pc1as'; // <-- ganti

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
