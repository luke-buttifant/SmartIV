import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';


import Interviewer from "../../Interviewer"

const deg2rad = degrees => degrees * (Math.PI / 180);

export default function Animations(questions) {
  return (
    <>
          <Canvas
                 camera={{
                  fov: 80,
                  position: [0, 0, 0],
                  rotation: [0, deg2rad(-20), deg2rad(180)],
                }}
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
         <Interviewer position={[0, 0, 0]} />
         </Suspense>
      </Canvas>
    </>
  );
}
