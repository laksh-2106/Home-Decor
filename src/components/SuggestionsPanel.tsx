import type { AISuggestion } from '../types';

interface SuggestionsPanelProps {
  suggestions: AISuggestion[];
  onApplySuggestion: (suggestion: AISuggestion) => void;
  onClose: () => void;
}

export function SuggestionsPanel({
  suggestions,
  onApplySuggestion,
  onClose,
}: SuggestionsPanelProps) {
  if (suggestions.length === 0) return null;

  return (
    <div style={overlayStyle}>
      <div style={panelStyle}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>AI Design Suggestions</h2>
          <button onClick={onClose} style={closeButtonStyle}>
            ✕
          </button>
        </div>

        <div style={suggestionsGridStyle}>
          {suggestions.map((suggestion, index) => (
            <div key={index} style={suggestionCardStyle}>
              <div style={previewStyle}>
                <div
                  style={{
                    ...wallPreviewStyle,
                    background: suggestion.wallColor,
                  }}
                />
                <div style={furnitureCountStyle}>
                  {suggestion.furnitureItems.length} items
                </div>
              </div>
              <div style={infoStyle}>
                <h3 style={optionTitleStyle}>Option {index + 1}</h3>
                <p style={descriptionStyle}>{suggestion.description}</p>
                <button
                  onClick={() => onApplySuggestion(suggestion)}
                  style={applyButtonStyle}
                >
                  Apply This Design
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const overlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(0,0,0,0.7)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
  padding: '20px',
};

const panelStyle: React.CSSProperties = {
  background: 'white',
  borderRadius: '12px',
  maxWidth: '1200px',
  width: '100%',
  maxHeight: '90vh',
  overflow: 'auto',
  padding: '24px',
};

const headerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '24px',
};

const titleStyle: React.CSSProperties = {
  margin: 0,
  fontSize: '24px',
  fontWeight: '600',
  color: '#1a1a1a',
};

const closeButtonStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  fontSize: '24px',
  cursor: 'pointer',
  color: '#666',
  padding: '4px',
  lineHeight: 1,
};

const suggestionsGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
  gap: '20px',
};

const suggestionCardStyle: React.CSSProperties = {
  border: '2px solid #e0e0e0',
  borderRadius: '8px',
  overflow: 'hidden',
  transition: 'all 0.2s',
};

const previewStyle: React.CSSProperties = {
  position: 'relative',
  height: '160px',
  background: '#f5f5f5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const wallPreviewStyle: React.CSSProperties = {
  width: '80%',
  height: '80%',
  borderRadius: '8px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
};

const furnitureCountStyle: React.CSSProperties = {
  position: 'absolute',
  top: '8px',
  right: '8px',
  background: 'rgba(0,0,0,0.7)',
  color: 'white',
  padding: '4px 8px',
  borderRadius: '4px',
  fontSize: '12px',
  fontWeight: '600',
};

const infoStyle: React.CSSProperties = {
  padding: '16px',
};

const optionTitleStyle: React.CSSProperties = {
  margin: '0 0 8px 0',
  fontSize: '18px',
  fontWeight: '600',
  color: '#1a1a1a',
};

const descriptionStyle: React.CSSProperties = {
  margin: '0 0 12px 0',
  fontSize: '14px',
  color: '#666',
  lineHeight: '1.5',
};

const applyButtonStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px',
  background: '#3b82f6',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  fontSize: '14px',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'background 0.2s',
};
