import { Link, NavLink } from "react-router";
import Logo from "../src/img/Logo.png";
import "./Header.css"; // Arquivo de estilos extras

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
        <div className="container-fluid">
          {/* Logo */}
          <Link className="navbar-brand ms-4" to="/">
            <img
              src={Logo}
              alt="Logo IOTEC"
              style={{ height: "50px", width: "auto" }}
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            {/* Links centrais */}
            <div className="navbar-nav mx-auto gap-4">
              <NavLink className="nav-link custom-link" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link custom-link" to="/sobrenos">
                Sobre Nós
              </NavLink>
              <NavLink className="nav-link custom-link" to="/servicos">
                Serviços
              </NavLink>
              <NavLink className="nav-link custom-link" to="/contato">
                Contato
              </NavLink>
              <NavLink className="nav-link custom-link" to="/instituições">
                Instituições
              </NavLink>
            </div>

            {/* Botão de Login */}
            <div className="d-flex me-4 btn-login">
              <Link to="/login" className="btn px-4 text-light">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
