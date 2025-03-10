import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Principal from './pages/Principal';
import Reservas from './pages/Reservas';
import Sesion from './pages/Sesion';
import Laboratorio from './pages/Laboratorio';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/principal" element={<Principal />} />
                <Route path="/reservas" element={<Reservas />} />
                <Route path="/sesion" element={<Sesion />} />
                <Route path="/laboratorio" element={<Laboratorio />} />
            </Routes>
        </Router>
    );
}

export default App;
