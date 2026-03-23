import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import skyScene from '../assets/3d/sky.glb'

const Sky = ({ isRotating }) => {
  const sky = useGLTF(skyScene);
  const skyRef = useRef();

  useFrame((_, delta) => {
    if (isRotating) {
      // When the user is rotating the island, the sky rotates faster
      // We use a larger multiplier here
      skyRef.current.rotation.y += 0.25 * delta;
    } else {
      // Even when NOT rotating, the sky moves slowly to feel alive
      // We use a smaller multiplier (idle speed)
      skyRef.current.rotation.y += 0.05 * delta;
    }
  });

  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;