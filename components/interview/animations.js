import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useSpeechSynthesis } from 'react-speech-kit';

import Interviewer from "../../Interviewer"

const deg2rad = degrees => degrees * (Math.PI / 180);

export default function Animations(questions) {
  const { speak, voices} = useSpeechSynthesis();
  useEffect(() => {
    speak({ text: `Hi Luke, Welcome to the interview! To start, ... ${questions.questions[0]}` , voice: voices[4] })
  }, [])
  return (
    <>
          <Canvas
         camera={{ position: [0, 10, 10], fov: 10}}
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
