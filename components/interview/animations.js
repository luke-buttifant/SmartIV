import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';


import Interviewer from "../../Interviewer"
import ConferenceRoom from "../../ConferenceRoom"

const deg2rad = degrees => degrees * (Math.PI / 180);

export default function Animations(questions) {
  return (
    <>
          <Canvas
          camera={{ position: [0, 5.6, 10], fov: 85, zoom: 17, near: 0.01, far: 1000}}
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
         <ConferenceRoom position={[0, 0, 0]} scale={[100,100,100]} />
         <mesh position={[0, 0, 0]} scale={1.2}>
         <Interviewer position={[0, 0, 0]} />
         </mesh>
        
         
         </Suspense>
      </Canvas>
    </>
  );
}
