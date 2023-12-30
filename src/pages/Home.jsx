import {Canvas} from "@react-three/fiber"
import {Suspense, useState} from "react";
import Loader from "../components/Loader.jsx"
import island from "../models/island.jsx";
import Island from "../models/island.jsx";
import Sky from "../models/sky.jsx";
import Bird from "../models/Bird.jsx";
import Plane from "../models/plane.jsx";
import HomeInfo from "../components/HomeInfo.jsx";
import NavBar from "../components/NavBar.jsx";
/*


 */
function Home(){
    const [rotating,setRotating] = useState(false)
    const [currentStage, setCurrentStage] = useState(1);
    const [isPlayingMusic, setIsPlayingMusic] = useState(false);
    const adjustIsland = () =>{
        let screenScale = null , screenPosition =null;
        let rotation = [0.1,4.7,0]

        if(window.innerWidth < 768){
            screenScale = [0.9, 0.9, 0.9]
            screenPosition = [0, -6.5, -43.4]
        }else{
            screenScale = [1.1, 1.1, 1.1]
            screenPosition = [0, -6.5, -43.4]
        }
        return [screenPosition,screenScale ,rotation]
    }
    const adjustPlane = () =>{
        let planceScale = null , planePosition =null;

        if(window.innerWidth < 768){
            planceScale = [1.5, 1.5, 1.5]
            planePosition = [0, -1.5, -0]
        }else{
            planceScale = [3, 3, 3]
            planePosition = [0, -4, -4]
        }
        return [planePosition,planceScale ]
    }
    const [planePosition,planeScale ] = adjustPlane()
        const [islandPosition,islandScale ,rotation] = adjustIsland()
    return(
        <section className="w-full h-screen relative ">
            <NavBar color={'black'} component = {'island'}/>
            <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
                {currentStage && <HomeInfo currentStage={currentStage} />}
            </div>
            <Canvas className={`w-full h-screen bg-transparent ${rotating ? 'cursor-grabbing' : 'cursor-grab' }`}
                    camera={{near : 0.1, far : 1000}}>

            <Suspense fallback={<Loader/>}>
                <directionalLight position = {[1,1,1]} intensity={3}/>
                <ambientLight intensity={0.1}/>
                <hemisphereLight intensity ={1} skyColor = "#b1e1ff" groundColor = "#000000"/>
                <Bird/>
                <Sky isRotating = {rotating}/>
                <Island position = {islandPosition} rotation = {rotation} scale = {islandScale} setCurrentStage ={setCurrentStage}
                rotating = {rotating} setRotating ={setRotating}/>
                <Plane position = {planePosition} scale = {planeScale} rotating = {rotating} rotation = {[0,20,0]}/>
            </Suspense>
            </Canvas>

        </section>
    )
}
export default Home