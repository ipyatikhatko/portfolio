import { useMemo, useRef } from "react";
import { Color } from "three";
import { useFrame } from "@react-three/fiber";

interface Props {
  count: number;
}

export const Particles = ({ count }: Props) => {
  const positions = useMemo(() => {
    const particlePositions = new Float32Array(count * 3);
    const minRadius = 3;

    for (let i = 0; i < count; i++) {
      let x, y, z;

      do {
        x = (Math.random() * 10) - 5;
        y = (Math.random() * 10) - 5;
        z = Math.random() * 2;
      } while (Math.sqrt(x * x + y * y + z * z) < minRadius);

      const i3 = i * 3;
      particlePositions[i3] = x;
      particlePositions[i3 + 1] = y;
      particlePositions[i3 + 2] = z;
    }

    return particlePositions;
  }, [count]);

  const velocities = useMemo(() => {
    const particleVelocities = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      particleVelocities[i3] = (Math.random() - 0.5) * 0.01; // Random X velocity
      particleVelocities[i3 + 1] = (Math.random() - 0.5) * 0.01; // Random Y velocity
      particleVelocities[i3 + 2] = (Math.random() - 0.5) * 0.01; // Random Z velocity
    }

    return particleVelocities;
  }, [count]);

  const geometryRef = useRef<any>(); // Reference to the geometry

  useFrame(() => {
    const positionsArray = geometryRef.current.attributes.position.array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Update position by adding velocity
      positionsArray[i3] += velocities[i3];
      positionsArray[i3 + 1] += velocities[i3 + 1];
      positionsArray[i3 + 2] += velocities[i3 + 2];

      // Optionally: bounce the particles off the edges of a certain range
      if (positionsArray[i3] < -5 || positionsArray[i3] > 5) velocities[i3] *= -1;
      if (positionsArray[i3 + 1] < -5 || positionsArray[i3 + 1] > 5) velocities[i3 + 1] *= -1;
      if (positionsArray[i3 + 2] < 0 || positionsArray[i3 + 2] > 2) velocities[i3 + 2] *= -1;
    }

    // Mark the position attribute as needing an update
    geometryRef.current.attributes.position.needsUpdate = true;
  });

  return (
    <points>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          itemSize={3}
          array={positions}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.01}
        color={new Color("white")}
        transparent
      />
    </points>
  );
};
