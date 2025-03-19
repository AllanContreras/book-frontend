import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Principal from './pages/Principal';
import Reservas from './pages/Reservas';
import Sesion from './pages/Sesion';
import Laboratorio from './pages/Laboratorio';
import Eliminar from './pages/Eliminar';
import Modificar from './pages/Modificar';
import Consultar from './pages/Consultar';

function App() {
    return (
        <Router>
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/principal" element={<Principal />} />
                <Route path="/reservas" element={<Reservas />} />
                <Route path="/sesion" element={<Sesion />} />
                <Route path="/laboratorio" element={<Laboratorio />} />
                <Route path="/eliminar" element={<Eliminar/>}/>
                <Route path="/modificar" element={<Modificar/>}/>
                <Route path="/consultar" element={<Consultar/>}/>

                
            </Routes>
        </Router>
    );
}

export default App;
