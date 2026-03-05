import type { StylePreference } from '../types';

interface StyleSelectorProps {
  selectedStyle: StylePreference;
  onStyleChange: (style: StylePreference) => void;
  onGenerateSuggestions: () => void;
}

const styles: { value: StylePreference; label: string; description: string }[] = [
  { value: 'modern', label: 'Modern', description: 'Clean and contemporary' },
  { value: 'minimalist', label: 'Minimalist', description: 'Simple and essential' },
  { value: 'traditional', label: 'Traditional', description: 'Classic and timeless' },
  { value: 'industrial', label: 'Industrial', description: 'Urban and raw' },
  { value: 'bohemian', label: 'Bohemian', description: 'Eclectic and relaxed' },
];

export function StyleSelector({
  selectedStyle,
  onStyleChange,
  onGenerateSuggestions,
}: StyleSelectorProps) {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Choose Your Style</h2>
      <div style={styleGridStyle}>
        {styles.map((style) => (
          <button
            key={style.value}
            onClick={() => onStyleChange(style.value)}
            style={{
              ...styleButtonStyle,
              ...(selectedStyle === style.value ? selectedStyleButtonStyle : {}),
            }}
          >
            <div style={styleLabelStyle}>{style.label}</div>
            <div style={styleDescStyle}>{style.description}</div>
          </button>
        ))}
      </div>
      <button onClick={onGenerateSuggestions} style={generateButtonStyle}>
        Generate AI Suggestions
      </button>
    </div>
  );
}

const containerStyle: React.CSSProperties = {
  padding: '20px',
  background: 'white',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
};

const titleStyle: React.CSSProperties = {
  margin: '0 0 16px 0',
  fontSize: '20px',
  fontWeight: '600',
  color: '#1a1a1a',
};

const styleGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
  gap: '12px',
  marginBottom: '16px',
};

const styleButtonStyle: React.CSSProperties = {
  padding: '12px',
  border: '2px solid #e0e0e0',
  borderRadius: '6px',
  background: 'white',
  cursor: 'pointer',
  transition: 'all 0.2s',
  textAlign: 'left',
};

const selectedStyleButtonStyle: React.CSSProperties = {
  borderColor: '#3b82f6',
  background: '#eff6ff',
};

const styleLabelStyle: React.CSSProperties = {
  fontWeight: '600',
  fontSize: '14px',
  color: '#1a1a1a',
  marginBottom: '4px',
};

const styleDescStyle: React.CSSProperties = {
  fontSize: '12px',
  color: '#666',
};

const generateButtonStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px',
  background: '#3b82f6',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  fontSize: '14px',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'background 0.2s',
};
