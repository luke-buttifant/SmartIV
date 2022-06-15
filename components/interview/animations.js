import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useThree, useFrame, useLoader } from '@react-three/fiber';

import Interviewer from "../../New_male"
import OfficeScene from "../../Office-scene"

const deg2rad = degrees => degrees * (Math.PI / 180);

export default function Animations(questions) {
  
 
  const Camera = (props) => {
    const ref = useRef();
    const set = useThree((state) => state.set);
    useEffect(() => void set({ camera: ref.current }), []);
    useFrame(() => {
      ref.current.updateMatrixWorld();
      ref.current.position.set(0, -0.5 ,3);
      ref.current.rotation.set(-0.4, 0.4, 0)
    })
    return <perspectiveCamera ref={ref} {...props} />;
  };

  return (
    <>
      
      <Canvas dpr={[1, 2]} shadows className='rounded-lg' >
        <Camera />
      <color attach="background" args={['#101010']} />
      <ambientLight intensity={1} />
<spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
      <Suspense fallback={null}>

        <mesh rotation={[0, 0, 0]} position={[-1.1, -6, -26]} scale={3}><OfficeScene rotation={[0, 91.6, 0]}  scale={1.3} position={[10, 0, 0]}/></mesh>
         
          <mesh position={[-1, -3.7, 0.9]} scale={2}><Interviewer  /></mesh>
      </Suspense>
    </Canvas>
    </>
  );
}
