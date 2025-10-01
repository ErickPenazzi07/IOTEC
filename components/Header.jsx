import { NavLink } from "react-router";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
        <div className="container-fluid">
          {/* Logo */}
          <NavLink className="navbar-brand fw-bold text-success" to="/">
            IOTEC
          </NavLink>

          {/* Botão menu mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav mx-auto gap-3">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-bold text-success" : ""}`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/sobrenos"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-bold text-success" : ""}`
                }
              >
                Sobre Nós
              </NavLink>

              <NavLink
                to="/servicos"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-bold text-success" : ""}`
                }
              >
                Serviços
              </NavLink>

              <NavLink
                to="/contatos"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-bold text-success" : ""}`
                }
              >
                Contatos
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
