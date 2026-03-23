import {useRef, useEffect} from 'react'

import birdScene from '../assets/3d/bird.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame  } from '@react-three/fiber'

const Bird = () => {
    const birdRef = useRef();
    const {scene, animations } = useGLTF(birdScene);
    const { actions } = useAnimations(animations, birdRef)

    useEffect(() => {
        actions['Take 001'].play();
    }, [])

    useFrame(({clock, camera}, delta) => {

        const speed = 2;

        // update the Y position to simulate the flight moving in a sin wave
        birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

        // check if the bird reached a certain endpoint relative to the camera
        if(birdRef.current.position.x > camera.position.x + 20) {
            // change direction to backward and rotate the bird 180 degrees on the y-axis
            birdRef.current.rotation.y = Math.PI;
        } else if (birdRef.current.position.x < camera.position.x - 15){
            // Change direction to forward and reset the birds rotation
            birdRef.current.rotation.y = 0;
        }

        // Update the X and Z positions based on the direction
        if (birdRef.current.rotation.y === 0) {
            // Moving forward 
            birdRef.current.position.x += speed * delta;
            birdRef.current.position.z -= speed * delta;

        }
        else
        {
            // Moving backward 
            birdRef.current.position.x -= speed * delta;
            birdRef.current.position.z += speed * delta;
        }
    })

  return (
    <mesh 
    position={[-5, 2, 1]} 
    scale={[0.003,0.003,0.003]} 
    ref = {birdRef}>

        <primitive object={scene}/>
    </mesh>
  )
}

export default Bird