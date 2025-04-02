import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles }) => {
  // Obtener el rol del usuario desde el almacenamiento local o contexto

  const user = JSON.parse(localStorage.getItem("user")); // Asegúrate de guardar el usuario correctamente al iniciar sesión
  const userRole = user?.role; // Verifica si el usuario tiene un rol asignado

    console.log(localStorage.getItem("user"));

  if (!userRole || !allowedRoles.includes(userRole)) {
    return <Navigate to="/sesion" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
