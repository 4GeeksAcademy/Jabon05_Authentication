import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Private = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();
    const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001";

    useEffect(() => {
        const validateToken = async () => {
            const token = sessionStorage.getItem("token");
            if (!token) {
                navigate("/login");
                return;
            }

            const response = await fetch(`${API_URL}/api/private`, {
                method: "GET",
                headers: { "Authorization": `Bearer ${token}` }
            });

            if (response.ok) {
                setIsAuthenticated(true);
            } else {
                sessionStorage.removeItem("token");
                navigate("/login");
            }
        };
        validateToken();
    }, [navigate]);

    if (!isAuthenticated) return <div>Cargando...</div>;

    return (
        <div className="container mt-5 text-center">
            <h1>🔓 Contenido Privado</h1>
            <p>Bienvenido. Solo tú puedes ver esto porque tu token es válido.</p>
        </div>
    );
};

export default Private;