
import Card from './Components/Card/Card';
import NavBar from './Components/Navbar/NavBar';
import './index.css';

function App() {
  

  return (
    <>
      <div>
      <NavBar/>
      <div className="tarjetas">
      <Card image="./react-app/public/images/peluquerias.jpg" titulo="Peluqueria" descripcion="Cortes de pelo y mas"/>
      <Card image="./react-app/public/images/Manicura.jpg" titulo="Manicura" descripcion="Retoca tus uñas con bellos diseños"/>
      </div>
      
      </div>
       
    </>
  )
}

export default App 
