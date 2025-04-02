import React, { useState, useEffect } from 'react';
import Header_Admin from '../components/Header_Admin';
import '../assets/ActualizarUsuario.css'; // Reutiliza los estilos de actualización

const EliminarUsuario = () => {
    const [usuarios, setUsuarios] = useState([]);

    // Obtener usuarios al cargar la página
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

    // Función para eliminar usuario
    const handleDelete = async (id) => {
        const confirmar = window.confirm("¿Estás seguro de que deseas eliminar este usuario?");
        if (!confirmar) return;

        const token = localStorage.getItem("token");

        try {
            const response = await fetch(`http://localhost:8081/User/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });

            if (response.ok) {
                alert("Usuario eliminado exitosamente");
                setUsuarios(usuarios.filter(user => user.id !== id)); // Actualiza la lista
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.message}`);
            }
        } catch (error) {
            console.error("Error al eliminar usuario:", error);
            alert("Error al eliminar usuario");
        }
    };

    return (
        <div>
            <Header_Admin />
            <div className="contenedor">
                <h2>Eliminar Usuario</h2>
                <table className="tabla-usuarios">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Rol</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario) => (
                            <tr key={usuario.id}>
                                <td>{usuario.id}</td>
                                <td>{usuario.name}</td>
                                <td>{usuario.email}</td>
                                <td>{usuario.role}</td>
                                <td>
                                    <button className="btn-eliminar" onClick={() => handleDelete(usuario.id)}>
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EliminarUsuario;
