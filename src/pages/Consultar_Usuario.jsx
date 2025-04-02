import React, { useState, useEffect } from 'react';
import Header_Admin from '../components/Header_Admin';
import '../assets/ActualizarUsuario.css'; // Importar los estilos

const ConsultarUsuario = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const fetchUsuarios = async () => {
            const token = localStorage.getItem("token");
            try {
                const response = await fetch("http://localhost:8081/User", {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    setUsuarios(data);
                } else {
                    alert("Error al obtener usuarios");
                }
            } catch (error) {
                console.error("Error al obtener usuarios:", error);
            }
        };
        fetchUsuarios();
    }, []);

    return (
        <div>
            <Header_Admin />
            <div className="contenedor">
                <h2>Consultar Usuarios</h2>
                <table className="tabla-usuarios">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Rol</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario) => (
                            <tr key={usuario.id}>
                                <td>{usuario.id}</td>
                                <td>{usuario.name}</td>
                                <td>{usuario.email}</td>
                                <td>{usuario.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ConsultarUsuario;
