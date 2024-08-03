import Comp from "./Component"
import Otro from "./Otro"
import './index.css';

let nombre = "David"

function App() {
  

  return (
    <>
      <div className="hola">
      <Comp/>
      </div>
      <h1>Hola a todos!,especialmente a {nombre}</h1>
      <Otro/>
    
      
    </>
  )
}

export default App
