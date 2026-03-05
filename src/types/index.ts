export type StylePreference = 'modern' | 'minimalist' | 'traditional' | 'industrial' | 'bohemian';

export type FurnitureType = 'sofa' | 'chair' | 'table' | 'lamp' | 'plant' | 'bookshelf';

export interface FurnitureItem {
  id: string;
  type: FurnitureType;
  position: [number, number, number];
  rotation: number;
  color?: string;
}

export interface RoomDesign {
  style: StylePreference;
  wallColor: string;
  furniture: FurnitureItem[];
}

export interface AISuggestion {
  style: StylePreference;
  wallColor: string;
  furnitureItems: FurnitureItem[];
  description: string;
}
