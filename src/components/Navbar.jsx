import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Lista de Contactos</span>
				</Link>
				<div className="ml-auto">
					<Link to="/formulario">
						<button className="btn btn-primary">Añadir nuevos Contactos</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};