import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001";

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${API_URL}/api/signup`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            alert("Usuario creado con éxito. Ahora puedes iniciar sesión.");
            navigate("/login");
        } else {
            const data = await response.json();
            alert(data.msg || "Error al registrarse");
        }
    };

    return (
        <div className="container mt-5">
            <form className="col-md-6 mx-auto card p-4" onSubmit={handleSubmit}>
                <h2>Registro</h2>
                <input type="email" className="form-control mb-3" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" className="form-control mb-3" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit" className="btn btn-primary w-100">Registrarme</button>
            </form>
        </div>
    );
};

export default Signup;