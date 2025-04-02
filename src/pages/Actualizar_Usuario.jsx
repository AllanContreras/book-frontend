import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header_Admin from '../components/Header_Admin';
import '../assets/ActualizarUsuario.css';

const ActualizarUsuario = () => {
    const navigate = useNavigate();
    const [usuarios, setUsuarios] = useState([]);
    const [form, setForm] = useState(null);

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

    const handleUpdateClick = (usuario) => {
        setForm({ ...usuario, password: "" });
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");

        try {
            const response = await fetch(`http://localhost:8081/User/${form.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(form),
            });

            if (response.ok) {
                alert("Usuario actualizado exitosamente");
                setForm(null);
                navigate("/Consultar_Usuario");
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.message}`);
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
            alert("Error al actualizar usuario");
        }
    };

    return (
        <div>
            <Header_Admin />
            <div className="contenedor">
                <h2>Lista de Usuarios</h2>
                <table className="tabla-usuarios">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Rol</th>
                            <th>Acción</th>
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
                                    <button className="btn-actualizar" onClick={() => handleUpdateClick(usuario)}>Actualizar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {form && (
                    <div className="formulario">
                        <h2>Actualizar Usuario</h2>
                        <form onSubmit={handleSubmit} className="formulario-actualizar">
                            <div className="fila">
                                <label>Nombre:
                                    <input type="text" name="name" value={form.name} onChange={handleChange} required />
                                </label>
                                <label>Correo:
                                    <input type="email" name="email" value={form.email} onChange={handleChange} required />
                                </label>
                            </div>
                            <div className="fila">
                                <label>Rol:
                                    <select name="role" value={form.role} onChange={handleChange} required>
                                        <option value="ADMIN">Admin</option>
                                        <option value="TEACHER">Teacher</option>
                                    </select>
                                </label>
                            </div>
                            <div className="fila-password">
                                <label>Nueva Contraseña:
                                    <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Dejar en blanco para no cambiar" />
                                </label>
                                <button type="submit" className="btn">Actualizar Usuario</button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ActualizarUsuario;
