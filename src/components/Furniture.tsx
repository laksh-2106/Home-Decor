import { useRef, useState } from 'react';
import type { Group } from 'three';
import type { FurnitureItem as FurnitureItemType } from '../types';
import { Html } from '@react-three/drei';

interface FurnitureProps {
  item: FurnitureItemType;
  isSelected: boolean;
  onSelect: () => void;
}

function Sofa({ color }: { color: string }) {
  return (
    <group>
      {/* Seat */}
      <mesh position={[0, 0.3, 0]} castShadow>
        <boxGeometry args={[1.8, 0.3, 0.8]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {/* Backrest */}
      <mesh position={[0, 0.7, -0.3]} castShadow>
        <boxGeometry args={[1.8, 0.8, 0.2]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {/* Left armrest */}
      <mesh position={[-0.8, 0.5, 0]} castShadow>
        <boxGeometry args={[0.2, 0.6, 0.8]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {/* Right armrest */}
      <mesh position={[0.8, 0.5, 0]} castShadow>
        <boxGeometry args={[0.2, 0.6, 0.8]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
}

function Chair({ color }: { color: string }) {
  return (
    <group>
      {/* Seat */}
      <mesh position={[0, 0.3, 0]} castShadow>
        <boxGeometry args={[0.6, 0.1, 0.6]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {/* Backrest */}
      <mesh position={[0, 0.6, -0.25]} castShadow>
        <boxGeometry args={[0.6, 0.6, 0.1]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {/* Legs */}
      {[[-0.25, -0.25], [0.25, -0.25], [-0.25, 0.25], [0.25, 0.25]].map((pos, i) => (
        <mesh key={i} position={[pos[0], 0.15, pos[1]]} castShadow>
          <cylinderGeometry args={[0.03, 0.03, 0.3]} />
          <meshStandardMaterial color="#654321" />
        </mesh>
      ))}
    </group>
  );
}

function Table({ color }: { color: string }) {
  return (
    <group>
      {/* Tabletop */}
      <mesh position={[0, 0.4, 0]} castShadow>
        <boxGeometry args={[1.2, 0.05, 0.8]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {/* Legs */}
      {[[-0.5, -0.35], [0.5, -0.35], [-0.5, 0.35], [0.5, 0.35]].map((pos, i) => (
        <mesh key={i} position={[pos[0], 0.2, pos[1]]} castShadow>
          <cylinderGeometry args={[0.04, 0.04, 0.4]} />
          <meshStandardMaterial color="#654321" />
        </mesh>
      ))}
    </group>
  );
}

function Lamp({ color }: { color: string }) {
  return (
    <group>
      {/* Base */}
      <mesh position={[0, 0.05, 0]} castShadow>
        <cylinderGeometry args={[0.15, 0.15, 0.1]} />
        <meshStandardMaterial color="#654321" />
      </mesh>
      {/* Pole */}
      <mesh position={[0, 0.6, 0]} castShadow>
        <cylinderGeometry args={[0.02, 0.02, 1]} />
        <meshStandardMaterial color="#654321" />
      </mesh>
      {/* Shade */}
      <mesh position={[0, 1.1, 0]} castShadow>
        <coneGeometry args={[0.3, 0.4, 16]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
      </mesh>
      {/* Light */}
      <pointLight position={[0, 1, 0]} intensity={0.5} distance={3} color={color} />
    </group>
  );
}

function Plant({ color }: { color: string }) {
  return (
    <group>
      {/* Pot */}
      <mesh position={[0, 0.2, 0]} castShadow>
        <cylinderGeometry args={[0.15, 0.12, 0.4, 16]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {/* Plant leaves */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <sphereGeometry args={[0.25, 8, 8]} />
        <meshStandardMaterial color="#2D5016" />
      </mesh>
      <mesh position={[0.1, 0.65, 0.1]} castShadow>
        <sphereGeometry args={[0.18, 8, 8]} />
        <meshStandardMaterial color="#3A6B1F" />
      </mesh>
      <mesh position={[-0.1, 0.6, -0.1]} castShadow>
        <sphereGeometry args={[0.15, 8, 8]} />
        <meshStandardMaterial color="#4A7C2F" />
      </mesh>
    </group>
  );
}

function Bookshelf({ color }: { color: string }) {
  return (
    <group>
      {/* Frame */}
      <mesh position={[0, 0.8, 0]} castShadow>
        <boxGeometry args={[1.2, 1.6, 0.3]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {/* Shelves */}
      {[0.3, 0.8, 1.3].map((y, i) => (
        <mesh key={i} position={[0, y, 0.05]} castShadow>
          <boxGeometry args={[1.15, 0.02, 0.28]} />
          <meshStandardMaterial color="#654321" />
        </mesh>
      ))}
      {/* Books (decorative) */}
      {Array.from({ length: 6 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            -0.4 + (i % 3) * 0.4,
            0.35 + Math.floor(i / 3) * 0.5,
            0.05,
          ]}
          castShadow
        >
          <boxGeometry args={[0.15, 0.25, 0.1]} />
          <meshStandardMaterial color={['#8B0000', '#00008B', '#006400'][i % 3]} />
        </mesh>
      ))}
    </group>
  );
}

export function Furniture({ item, isSelected, onSelect }: FurnitureProps) {
  const groupRef = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);

  const renderFurniture = () => {
    const color = item.color || '#666666';
    switch (item.type) {
      case 'sofa':
        return <Sofa color={color} />;
      case 'chair':
        return <Chair color={color} />;
      case 'table':
        return <Table color={color} />;
      case 'lamp':
        return <Lamp color={color} />;
      case 'plant':
        return <Plant color={color} />;
      case 'bookshelf':
        return <Bookshelf color={color} />;
      default:
        return null;
    }
  };

  return (
    <group
      ref={groupRef}
      position={item.position}
      rotation={[0, item.rotation, 0]}
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = 'auto';
      }}
    >
      {renderFurniture()}
      {isSelected && (
        <mesh position={[0, 0, 0]}>
          <ringGeometry args={[0.8, 1, 32]} />
          <meshBasicMaterial color="#FFD700" transparent opacity={0.5} />
        </mesh>
      )}
      {hovered && !isSelected && (
        <Html distanceFactor={10}>
          <div
            style={{
              background: 'rgba(0,0,0,0.8)',
              color: 'white',
              padding: '4px 8px',
              borderRadius: '4px',
              fontSize: '12px',
              whiteSpace: 'nowrap',
            }}
          >
            {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
          </div>
        </Html>
      )}
    </group>
  );
}
