import type { FurnitureType } from '../types';

interface ControlsProps {
  wallColor: string;
  onWallColorChange: (color: string) => void;
  onAddFurniture: (type: FurnitureType) => void;
  onRemoveSelected: () => void;
  hasSelection: boolean;
}

const wallColors = [
  { name: 'White', color: '#FFFFFF' },
  { name: 'Light Gray', color: '#E5E5E5' },
  { name: 'Beige', color: '#F5F5DC' },
  { name: 'Light Blue', color: '#ADD8E6' },
  { name: 'Sage', color: '#B2C9AB' },
  { name: 'Cream', color: '#FFFDD0' },
  { name: 'Navy', color: '#2C3E50' },
  { name: 'Charcoal', color: '#424242' },
];

const furnitureTypes: { type: FurnitureType; label: string; icon: string }[] = [
  { type: 'sofa', label: 'Sofa', icon: '🛋️' },
  { type: 'chair', label: 'Chair', icon: '🪑' },
  { type: 'table', label: 'Table', icon: '🪑' },
  { type: 'lamp', label: 'Lamp', icon: '💡' },
  { type: 'plant', label: 'Plant', icon: '🌿' },
  { type: 'bookshelf', label: 'Bookshelf', icon: '📚' },
];

export function Controls({
  wallColor,
  onWallColorChange,
  onAddFurniture,
  onRemoveSelected,
  hasSelection,
}: ControlsProps) {
  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>Wall Color</h3>
        <div style={colorGridStyle}>
          {wallColors.map((item) => (
            <button
              key={item.color}
              onClick={() => onWallColorChange(item.color)}
              style={{
                ...colorButtonStyle,
                background: item.color,
                border:
                  wallColor === item.color
                    ? '3px solid #3b82f6'
                    : '2px solid #d0d0d0',
              }}
              title={item.name}
            />
          ))}
        </div>
      </div>

      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>Add Furniture</h3>
        <div style={furnitureGridStyle}>
          {furnitureTypes.map((item) => (
            <button
              key={item.type}
              onClick={() => onAddFurniture(item.type)}
              style={furnitureButtonStyle}
            >
              <span style={iconStyle}>{item.icon}</span>
              <span style={labelStyle}>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {hasSelection && (
        <button onClick={onRemoveSelected} style={removeButtonStyle}>
          Remove Selected Item
        </button>
      )}
    </div>
  );
}

const containerStyle: React.CSSProperties = {
  padding: '20px',
  background: 'white',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

const sectionStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
};

const sectionTitleStyle: React.CSSProperties = {
  margin: 0,
  fontSize: '16px',
  fontWeight: '600',
  color: '#1a1a1a',
};

const colorGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '8px',
};

const colorButtonStyle: React.CSSProperties = {
  width: '48px',
  height: '48px',
  borderRadius: '6px',
  cursor: 'pointer',
  transition: 'all 0.2s',
};

const furnitureGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '8px',
};

const furnitureButtonStyle: React.CSSProperties = {
  padding: '12px',
  border: '2px solid #e0e0e0',
  borderRadius: '6px',
  background: 'white',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  transition: 'all 0.2s',
  fontSize: '14px',
};

const iconStyle: React.CSSProperties = {
  fontSize: '20px',
};

const labelStyle: React.CSSProperties = {
  fontSize: '14px',
  fontWeight: '500',
  color: '#1a1a1a',
};

const removeButtonStyle: React.CSSProperties = {
  padding: '12px',
  background: '#ef4444',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  fontSize: '14px',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'background 0.2s',
};
