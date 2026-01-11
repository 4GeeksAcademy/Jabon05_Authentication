import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const token = sessionStorage.getItem("token");

    // Si no hay token, redirigimos al login inmediatamente
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    // Si hay token, permitimos el acceso al componente hijo (children)
    return children;
};

export default ProtectedRoute;