import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Room } from './Room';
import { Furniture } from './Furniture';
import type { FurnitureItem } from '../types';

interface SceneProps {
  wallColor: string;
  furniture: FurnitureItem[];
  selectedFurnitureId: string | null;
  onSelectFurniture: (id: string) => void;
}

export function Scene({ wallColor, furniture, selectedFurnitureId, onSelectFurniture }: SceneProps) {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 3, 8]} />
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={3}
          maxDistance={15}
          maxPolarAngle={Math.PI / 2 - 0.1}
          target={[0, 1, 0]}
        />

        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-5, 5, -5]} intensity={0.3} />

        <Environment preset="apartment" />

        {/* Room */}
        <Room wallColor={wallColor} />

        {/* Furniture */}
        {furniture.map((item) => (
          <Furniture
            key={item.id}
            item={item}
            isSelected={selectedFurnitureId === item.id}
            onSelect={() => onSelectFurniture(item.id)}
          />
        ))}
      </Canvas>
    </div>
  );
}
