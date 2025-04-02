import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sesion" element={<Sesion />} />

                {/* Rutas protegidas para ADMIN */}
                <Route element={<ProtectedRoute allowedRoles={["ADMIN"]} />}>
                    <Route path="/principal_admin" element={<Principal_Admin />} />
                    <Route path="/crear_usuario" element={<Crear_Usuario />} />
                    <Route path="/actualizar_usuario" element={<Actualizar_Usuario />} />
                    <Route path="/eliminar_usuario" element={<Eliminar_Usuario />} />
                    <Route path="/consultar_usuario" element={<Consultar_Usuario />} />
                </Route>

                {/* Rutas protegidas para TEACHER */}
                <Route element={<ProtectedRoute allowedRoles={["TEACHER"]} />}>
                    <Route path="/principal" element={<Principal />} />
                    <Route path="/reservas" element={<Reservas />} />
                    <Route path="/laboratorio" element={<Laboratorio />} />
                    <Route path="/eliminar" element={<Eliminar />} />
                    <Route path="/modificar" element={<Modificar />} />
                    <Route path="/consultar" element={<Consultar />} />
                </Route>

                {/* Ruta para páginas no encontradas */}
                <Route path="*" element={<h1>Página no encontrada</h1>} />
            </Routes>
        </Router>
    );
}

export default App;
