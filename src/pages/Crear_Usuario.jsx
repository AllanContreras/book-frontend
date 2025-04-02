import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header_Admin from '../components/Header_Admin';
import '../assets/CrearUsuario.css'; // Asegúrate de importar los estilos

const CrearUsuario = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        email: "",
        role: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Datos a enviar:", form);
        const token = localStorage.getItem("token");

        try {
            const response = await fetch("http://localhost:8081/User", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(form),
            });

            if (response.ok) {
                alert("Usuario creado exitosamente");
                navigate("/Consultar_Usuario");
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.message}`);
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
            alert("Error al crear usuario");
        }
    };

    return (
        <div>
            <Header_Admin />
            <div className="contenedor">
                <h2>Crear Usuario</h2>
                <form onSubmit={handleSubmit} className="formulario">
                    <label>Nombre:</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required />

                    <label>Correo:</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required />

                    <label>Rol:</label>
                    <select name="role" value={form.role} onChange={handleChange} required>
                        <option value="">Seleccione un rol</option>
                        <option value="ADMIN">Admin</option>
                        <option value="TEACHER">Teacher</option>
                    </select>

                    <label>Contraseña:</label>
                    <input type="password" name="password" value={form.password} onChange={handleChange} required />

                    <button type="submit">Crear Usuario</button>
                </form>
            </div>
        </div>
    );
};

export default CrearUsuario;
