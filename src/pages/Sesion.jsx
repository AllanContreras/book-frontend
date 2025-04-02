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

        // Validar que el email tenga el dominio correcto
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

            if (!response.ok) {
                throw new Error("Credenciales incorrectas");
            }

            const data = await response.json();
            localStorage.setItem("token", data.token);
            localStorage.setItem("role", data.role);

            if (data.role === "ADMIN") {
                navigate("/admin");
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
                    <input type="password" name="password" placeholder="Contraseña" required tyle={{ width: "30%"  }} />
                    <button type="submit" className="login-acceder">Acceder</button>

                    <a href="#" className="forgot-password">¿Olvidó su contraseña?</a>
                    <hr className="divider" />

                    <h4>IDENTIFÍQUESE USANDO SU CUENTA EN:</h4>
                    <button className="login-btn-office365-large" onClick={() => navigate('/principal_Admin')}>
                        <img src={microsoftLogo} alt="Microsoft Logo" width="24px" height="24px" className="mr-1" /> Ingreso Office 365
                    </button>

                    <hr className="divider" />
                </form>
            </div>
            <a href="/" className="volver-inicio">Volver al inicio</a>
        </div>
    );
};

export default Sesion;
