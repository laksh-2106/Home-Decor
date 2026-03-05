import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      room_designs: {
        Row: {
          id: string;
          user_id: string;
          style: string;
          wall_color: string;
          furniture_items: any;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          style: string;
          wall_color: string;
          furniture_items: any;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          style?: string;
          wall_color?: string;
          furniture_items?: any;
          created_at?: string;
        };
      };
    };
  };
};
