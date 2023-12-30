import {useAnimations, useGLTF} from "@react-three/drei";
import plane from '../assets/3d/plane.glb'
import {useEffect, useRef} from "react";

function Plane({rotating,...props}){
   const {scene, animations} =  useGLTF(plane)
    const ref  = useRef()
    const {actions} = useAnimations(animations,ref)

    useEffect(()=>{
        if(rotating){
            actions['Take 001'].play()
        }else{
            actions['Take 001'].stop()
        }

    },[actions,rotating])

    return(
        <mesh { ...props} ref = {ref}>
            <primitive object={scene}/>
        </mesh>
    )
}

export default Plane