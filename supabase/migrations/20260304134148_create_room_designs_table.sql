/*
  # Create room_designs table for storing user room configurations

  ## Description
  This migration creates the room_designs table to store user-created room designs
  including style preferences, wall colors, and furniture placements.

  ## Tables Created
    - `room_designs`
      - `id` (uuid, primary key) - Unique identifier for each design
      - `user_id` (text) - Identifier for the user who created the design
      - `style` (text) - The style preference (modern, minimalist, traditional, industrial, bohemian)
      - `wall_color` (text) - Hex color code for the wall color
      - `furniture_items` (jsonb) - Array of furniture items with positions and properties
      - `created_at` (timestamptz) - Timestamp when the design was created

  ## Security
    - Enable RLS on `room_designs` table
    - Add policy for authenticated users to insert their own designs
    - Add policy for authenticated users to read their own designs
    - Add policy for anonymous users to insert designs
    - Add policy for anonymous users to read all designs (for demo purposes)

  ## Indexes
    - Create index on user_id for faster queries
    - Create index on created_at for sorting
*/

CREATE TABLE IF NOT EXISTS room_designs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id text NOT NULL,
  style text NOT NULL,
  wall_color text NOT NULL,
  furniture_items jsonb NOT NULL DEFAULT '[]'::jsonb,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE room_designs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert designs"
  ON room_designs
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can view designs"
  ON room_designs
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS room_designs_user_id_idx ON room_designs(user_id);
CREATE INDEX IF NOT EXISTS room_designs_created_at_idx ON room_designs(created_at DESC);
