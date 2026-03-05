import type { StylePreference, AISuggestion, FurnitureItem } from '../types';

const styleColors: Record<StylePreference, string[]> = {
  modern: ['#FFFFFF', '#E5E5E5', '#2C3E50', '#34495E', '#7F8C8D'],
  minimalist: ['#FFFFFF', '#F5F5F5', '#ECEFF1', '#CFD8DC', '#B0BEC5'],
  traditional: ['#8B4513', '#D2691E', '#CD853F', '#DEB887', '#F5DEB3'],
  industrial: ['#424242', '#616161', '#757575', '#263238', '#37474F'],
  bohemian: ['#E8B4B8', '#D4A5A5', '#9C89B8', '#F0A6CA', '#B8BDB5'],
};

const styleFurniture: Record<StylePreference, { types: string[], colors: string[] }> = {
  modern: {
    types: ['sofa', 'chair', 'table', 'lamp'],
    colors: ['#2C3E50', '#34495E', '#ECF0F1', '#BDC3C7'],
  },
  minimalist: {
    types: ['sofa', 'table', 'lamp', 'plant'],
    colors: ['#FFFFFF', '#000000', '#ECEFF1', '#90A4AE'],
  },
  traditional: {
    types: ['sofa', 'chair', 'table', 'bookshelf'],
    colors: ['#8B4513', '#D2691E', '#CD853F', '#654321'],
  },
  industrial: {
    types: ['sofa', 'table', 'bookshelf', 'lamp'],
    colors: ['#424242', '#757575', '#A1887F', '#6D4C41'],
  },
  bohemian: {
    types: ['sofa', 'plant', 'chair', 'table', 'lamp'],
    colors: ['#E8B4B8', '#9C89B8', '#F0A6CA', '#B8BDB5'],
  },
};

const styleDescriptions: Record<StylePreference, string> = {
  modern: 'Clean lines, neutral colors, and sleek furniture create a contemporary feel.',
  minimalist: 'Less is more - focus on essential pieces with plenty of white space.',
  traditional: 'Warm wood tones and classic furniture pieces for a timeless look.',
  industrial: 'Raw materials, exposed elements, and neutral tones for an urban aesthetic.',
  bohemian: 'Eclectic mix of colors, patterns, and natural elements for a relaxed vibe.',
};

function generateFurnitureLayout(style: StylePreference, variant: number): FurnitureItem[] {
  const config = styleFurniture[style];
  const furniture: FurnitureItem[] = [];

  // Position furniture based on variant
  const layouts = [
    // Layout 1: Centered arrangement
    [
      { type: 'sofa', position: [0, 0, 2], rotation: 0 },
      { type: 'table', position: [0, 0, -0.5], rotation: 0 },
      { type: 'chair', position: [-2, 0, 0], rotation: Math.PI / 2 },
      { type: 'lamp', position: [2, 0, 2], rotation: 0 },
    ],
    // Layout 2: Corner arrangement
    [
      { type: 'sofa', position: [-2, 0, 2], rotation: Math.PI / 4 },
      { type: 'table', position: [0, 0, 0], rotation: 0 },
      { type: 'chair', position: [2, 0, -2], rotation: -Math.PI / 4 },
      { type: 'plant', position: [-2, 0, -2], rotation: 0 },
    ],
    // Layout 3: Symmetrical arrangement
    [
      { type: 'sofa', position: [0, 0, 2.5], rotation: 0 },
      { type: 'table', position: [0, 0, 0], rotation: 0 },
      { type: 'chair', position: [-2, 0, -1], rotation: Math.PI / 3 },
      { type: 'chair', position: [2, 0, -1], rotation: -Math.PI / 3 },
      { type: 'lamp', position: [-2.5, 0, 2], rotation: 0 },
    ],
    // Layout 4: Open layout
    [
      { type: 'sofa', position: [1, 0, 2], rotation: -Math.PI / 6 },
      { type: 'table', position: [-1, 0, 0], rotation: 0 },
      { type: 'bookshelf', position: [-2.5, 0, -2], rotation: Math.PI / 2 },
      { type: 'plant', position: [2, 0, -2], rotation: 0 },
    ],
    // Layout 5: Cozy arrangement
    [
      { type: 'sofa', position: [-1, 0, 2], rotation: Math.PI / 8 },
      { type: 'chair', position: [1.5, 0, 1.5], rotation: -Math.PI / 4 },
      { type: 'table', position: [0, 0, 0], rotation: 0 },
      { type: 'lamp', position: [-2, 0, 2.5], rotation: 0 },
      { type: 'plant', position: [2.5, 0, -1], rotation: 0 },
    ],
  ];

  const layout = layouts[variant % layouts.length];

  layout.forEach((item, index) => {
    if (config.types.includes(item.type)) {
      furniture.push({
        id: `${style}-${variant}-${index}`,
        type: item.type as any,
        position: item.position as [number, number, number],
        rotation: item.rotation,
        color: config.colors[index % config.colors.length],
      });
    }
  });

  return furniture;
}

export function generateAISuggestions(style: StylePreference): AISuggestion[] {
  const suggestions: AISuggestion[] = [];
  const colors = styleColors[style];

  for (let i = 0; i < 5; i++) {
    suggestions.push({
      style,
      wallColor: colors[i % colors.length],
      furnitureItems: generateFurnitureLayout(style, i),
      description: `${styleDescriptions[style]} Option ${i + 1} features ${colors[i % colors.length]} walls.`,
    });
  }

  return suggestions;
}
