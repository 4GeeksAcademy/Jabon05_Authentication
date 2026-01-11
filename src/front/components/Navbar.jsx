import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
	const navigate = useNavigate();
	const token = sessionStorage.getItem("token");

	const handleLogout = () => {
		sessionStorage.removeItem("token");
		navigate("/login");
	};
	return (
		<nav className="navbar navbar-light bg-light p-3">
			<Link to="/" className="navbar-brand">Mi App</Link>
			<div>
				{!token ? (
					<>
						<Link to="/signup" className="btn btn-outline-primary me-2">Registro</Link>
						<Link to="/login" className="btn btn-primary">Login</Link>
					</>
				) : (
					<>
						<Link to="/private" className="btn btn-outline-secondary me-2">Área Privada</Link>
						<button onClick={handleLogout} className="btn btn-danger">Cerrar Sesión</button>
					</>
				)}
			</div>
		</nav>
	);
};
