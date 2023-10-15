import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MiApi from './components/MiApi'
import Buscador from './components/Buscador'

function App() {
const [movies, setMovies] = useState([])
const [buscador, setBuscador]=useState([]);
const [buscadorFlag, setBuscadorFlag]=useState(true);
  return (
    <>
    <div className="grid_area">
      <div className="navbar"> 
        <Buscador movies={movies} setBuscador={setBuscador} setBuscadorFlag={setBuscadorFlag}  />
      </div>
      <section className="gridmain">
        <MiApi movies={buscadorFlag ? movies:buscador} setMovies={setMovies} />
      </section>
      <div className="footer">
        <p>Todos los derechos reservados @2023</p>
      </div>
    </div>
    </>
  )
}

export default App
