import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Principal from './pages/Principal';
import Principal_Admin from './pages/Principal_Admin';
import Reservas from './pages/Reservas';
import Sesion from './pages/Sesion';
import Laboratorio from './pages/Laboratorio';
import Eliminar from './pages/Eliminar';
import Modificar from './pages/Modificar';
import Consultar from './pages/Consultar';
import Crear_Usuario from './pages/Crear_Usuario';
import Actualizar_Usuario from './pages/Actualizar_Usuario';
import Eliminar_Usuario from './pages/Eliminar_Usuario';
import Consultar_Usuario from './pages/Consultar_Usuario';


function App() {
    return (
        <Router>
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/principal" element={<Principal />} />
                <Route path="/principal_admin" element={<Principal_Admin />} />
                <Route path="/reservas" element={<Reservas />} />
                <Route path="/sesion" element={<Sesion />} />
                <Route path="/laboratorio" element={<Laboratorio />} />
                <Route path="/eliminar" element={<Eliminar/>}/>
                <Route path="/modificar" element={<Modificar/>}/>
                <Route path="/consultar" element={<Consultar/>}/>
                <Route path="/crear_usuario" element={<Crear_Usuario/>}/>
                <Route path="/actualizar_usuario" element={<Actualizar_Usuario/>}/>
                <Route path="/eliminar_usuario" element={<Eliminar_Usuario/>}/>
                <Route path="/consultar_usuario" element={<Consultar_Usuario/>}/>

                
            </Routes>
        </Router>
    );
}

export default App;
