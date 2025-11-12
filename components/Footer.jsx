import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light text-light mt-5 pt-4">
      <div className="container text-center text-md-start">
        <div className="row">
          {/* Logo */}
          <div className="col-md-4 mb-3">
            <h3 className="fw-bold text-success">IOTEC</h3>
            <p className="text-muted">
              Soluções em tecnologia, energia renovável e consultoria ambiental.
            </p>
          </div>

          {/* Links */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold text-dark">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="nav-link text-dark">
                  Home
                </a>
              </li>
              <li>
                <a href="/sobrenos" className="nav-link text-dark">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="/servicos" className="nav-link text-dark">
                  Serviços
                </a>
              </li>
              <li>
                <a href="/contato" className="nav-link text-dark">
                  Contatos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Linha separadora */}
      <hr className="mt-4 mb-2 text-secondary" />

      {/* Direitos autorais */}
      <div className="text-center pb-3 text-muted">
        © {new Date().getFullYear()} IOTEC - Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
