import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav>
      <Link to="/">Inicio</Link>
      {!user ? (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Registro</Link>
        </>
      ) : (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <button onClick={logout}>Cerrar Sesión</button>
        </>
      )}
    </nav>
  );
}

export default Navbar;
