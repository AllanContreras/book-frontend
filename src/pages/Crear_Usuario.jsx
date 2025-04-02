import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header_Admin from '../components/Header_Admin';

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
        const role = localStorage.getItem("role");



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
                <form onSubmit={handleSubmit}>
                    <div className="fila">
                        <label>Nombre: <input type="text" name="name" value={form.nombre} onChange={handleChange} /></label>
                        <label>Correo: <input type="email" name="email" value={form.correo} onChange={handleChange} /></label>
                    </div>
                    <div className="fila">
                        <label>Rol: <input type="text" name="role" value={form.rol} onChange={handleChange} /></label>
                    </div>
                    <div className="fila-password">
                        <label>Contraseña: <input type="password" name="password" value={form.password} onChange={handleChange} /></label>
                        <button type="submit" className="btn">Crear Usuario</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CrearUsuario;
