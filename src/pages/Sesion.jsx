import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import microsoftLogo from "../assets/favicon.ico";

const Sesion = () => {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (!email.endsWith("@escuelaing.edu.co")) {
            alert("El correo debe ser del dominio @escuelaing.edu.co");
            return;
        }

        try {
            const response = await fetch("http://localhost:8081/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json().catch(() => {
                throw new Error("Respuesta no válida del servidor");
            });

            if (!response.ok) {
                throw new Error(data.error || "Error en el inicio de sesión");
            }

            // Guardar el usuario correctamente en localStorage
            localStorage.setItem("user", JSON.stringify({
                role: data.role,
                id: data.id,
                token: data.token
            }));

            console.log("Usuario guardado:", localStorage.getItem("user")); // Verificación en consola

            // Redirigir según el rol
            if (data.role === "ADMIN") {
                navigate("/principal_admin");
            } else {
                navigate("/principal");
            }
        } catch (error) {
            alert(error.message);
        }

            };

    return (
        <div className="sesion-container">
            <Header />
            <div className="login-container">
                <h2>ENTRAR A ESCUELA</h2>
                <form onSubmit={handleSubmit}>
                    <input type="email" name="email" placeholder="Correo electrónico" required style={{ width: "70%", margin: "5px 0 5px 6%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "16px" }}/>
                    <input type="password" name="password" placeholder="Contraseña"  />
                    <button type="submit" className="login-acceder">Acceder</button>


                    <hr className="divider" />
                    <a href="/" className="volver-inicio">Volver al inicio</a>

                </form>
            </div>
        </div>
    );
};

export default Sesion;
