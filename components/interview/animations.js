import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Interviewer from "../../Interviewer"

const deg2rad = degrees => degrees * (Math.PI / 180);

export default function Animations() {
  return (
    <>
          <Canvas
         camera={{ position: [0, 10, 10], fov: 10}}
         style={{
            marginInline: "auto",
            backgroundColor: '#F5F5F5',
            width: '25vw',
            height: '50vh',
         }}
      >
         <ambientLight intensity={1} />
         <ambientLight intensity={0.1} />
         <directionalLight intensity={0.4} />
         <Suspense fallback={null}>
         <Interviewer position={[0, 0, 0]} />
         </Suspense>
      </Canvas>
    </>
  );
}
