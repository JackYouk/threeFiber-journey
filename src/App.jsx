import { Canvas } from '@react-three/fiber'
import './App.css'


function App() {

  return (
    <div className="App">
      <Canvas>
        <mesh>
          <torusKnotGeometry />
          <meshNormalMaterial />
        </mesh>
      </Canvas>
    </div>
  )
}

export default App
