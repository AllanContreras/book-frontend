import React, { useState } from 'react';
import Header_Admin from '../components/Header_Admin';

const CrearUsuario = () => {
    const [form, setForm] = useState({
        nombre: "",
        correo: "",
        id: "",
        rol: "",
        contrasena: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    return (


        <div>

        <Header_Admin />

        <div className="contenedor">
            
            <h2>Crear Usuario</h2>
            <form onSubmit={handleSubmit}>
                <div className="fila">
                    <label>
                        Nombre:
                        <input type="text" name="nombre" value={form.nombre} onChange={handleChange} />
                    </label>
                    <label>
                        Correo:
                        <input type="email" name="correo" value={form.correo} onChange={handleChange} />
                    </label>
                </div>
                <div className="fila">
                    <label>
                        Rol:
                        <input type="text" name="rol" value={form.rol} onChange={handleChange} />
                    </label>
                    <label>
                        ID:
                        <input type="text" name="id" value={form.id} onChange={handleChange} />
                    </label>
                </div >
                <div className='fila-password'>
                <label >
                    Contraseña:
                    <input type="password" name="contrasena" value={form.contrasena} onChange={handleChange} />
                </label>

                <button type="submit" className="btn">Crear Usuario</button>
                </div>
                
            </form>
        </div>





        </div>

        

    );
};

export default CrearUsuario;
