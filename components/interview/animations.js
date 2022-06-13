import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';


import Interviewer from "../../Interviewer"
import ConferenceRoom from "../../ConferenceRoom"

const deg2rad = degrees => degrees * (Math.PI / 180);

export default function Animations(questions) {
  return (
    <>
          <Canvas
          camera={{ position: [0, 5.35, 10], fov: 80, zoom: 18, near: 0.1, far: 200}}
         style={{
            marginInline: "auto",
            backgroundColor: '#F5F5F5',
            width: '100%'
         }}
      >
         <ambientLight intensity={1} />
         <ambientLight intensity={0.1} />
         <directionalLight intensity={0.4} />
         <Suspense fallback={null}>
         <ConferenceRoom position={[0, 0, 0]}  />
         <Interviewer position={[0, 0, 0]} />
         
         </Suspense>
      </Canvas>
    </>
  );
}
