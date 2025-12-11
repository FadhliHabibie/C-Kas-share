// supabase.js (ES module)
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

export const SUPABASE_URL = 'https://blytomdbwiiettetaxqg.supabase.co'; // <-- ganti
export const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJseXRvbWRid2lpZXR0ZXRheHFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMzNzc3ODIsImV4cCI6MjA3ODk1Mzc4Mn0.coVoADR6MKfURTOlPFD-mAiZaxBABYTb6CD7W5AtKfs'; // <-- ganti

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
