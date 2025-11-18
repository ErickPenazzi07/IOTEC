import React from "react";

const Footer = () => {
  return (
    <footer >

      {/* Direitos autorais */}
      <div className="text-center pb-3 text-muted mt-4">
        © {new Date().getFullYear()} IOTEC - Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
