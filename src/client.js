import { createClient } from '@supabase/supabase-js'

const URL = 'https://xdcjmhdcrtylktdblnkk.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkY2ptaGRjcnR5bGt0ZGJsbmtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkzOTMxMjEsImV4cCI6MjAxNDk2OTEyMX0.z7034A7bx3nMGVQ7AqVdtf-kbwbtg5I3PhKvkhE1em0';

const supabase = createClient(URL, API_KEY);

export default supabase;