import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001";

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch(`${API_URL}/api/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            const data = await response.json();
            sessionStorage.setItem("token", data.token); // Guardar token de forma segura
            navigate("/private");
        } else {
            alert("Credenciales inválidas");
        }
    };

    return (
        <div className="container mt-5">
            <form className="col-md-6 mx-auto card p-4" onSubmit={handleLogin}>
                <h2>Iniciar Sesión</h2>
                <input type="email" className="form-control mb-3" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" className="form-control mb-3" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit" className="btn btn-success w-100">Ingresar</button>
            </form>
        </div>
    );
};

export default Login;