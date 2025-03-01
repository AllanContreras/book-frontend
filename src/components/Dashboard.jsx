import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";

function Dashboard() {
  const { user, logout } = useAuth();
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:8080/api/usuarios", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();
      setUsuarios(data);
    };

    fetchUsuarios();
  }, []);

  return (
    <div>
      <h2>Bienvenido, {user}</h2>
      <button onClick={logout}>Cerrar Sesión</button>
      <h3>Lista de Usuarios</h3>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>{usuario.username}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
