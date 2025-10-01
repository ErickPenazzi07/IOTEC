import React from "react";
import Header from "../components/Header";

const Contato = () => {
  return (
    <div>
      <Header />
      <div
        style={{
          background: "#151138",
          minHeight: "100vh",
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Título centralizado */}
        <h2
          style={{
            color: "#d9d9d9",
            fontWeight: "bold",
            fontSize: "2.5rem",
            letterSpacing: "2px",
            textAlign: "center",
            textShadow: "1px 1px 8px #23272A",
            marginBottom: "48px",
          }}
        >
          Contato
        </h2>

        {/* Container das duas colunas */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr", // divide igualmente
            gap: "40px",
            width: "100%",
            maxWidth: "1000px",
          }}
        >
          {/* Formulário */}
          <form
            style={{
              background: "#23272A",
              padding: "32px",
              borderRadius: "16px",
              boxShadow: "0 4px 24px #00000040",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            <input
              type="text"
              placeholder="Nome"
              style={{
                padding: "12px",
                borderRadius: "8px",
                border: "none",
                background: "#2C2F33",
                color: "#d9d9d9",
                fontSize: "1rem",
              }}
            />
            <input
              type="tel"
              placeholder="Telefone"
              style={{
                padding: "12px",
                borderRadius: "8px",
                border: "none",
                background: "#2C2F33",
                color: "#d9d9d9",
                fontSize: "1rem",
              }}
            />
            <input
              type="email"
              placeholder="Email"
              style={{
                padding: "12px",
                borderRadius: "8px",
                border: "none",
                background: "#2C2F33",
                color: "#d9d9d9",
                fontSize: "1rem",
              }}
            />
            <textarea
              placeholder="Mensagem"
              rows={4}
              style={{
                padding: "12px",
                borderRadius: "8px",
                border: "none",
                background: "#2C2F33",
                color: "#d9d9d9",
                fontSize: "1rem",
                resize: "vertical",
              }}
            />
            <button
              type="submit"
              style={{
                background: "#1976d2",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                padding: "12px",
                fontWeight: "bold",
                fontSize: "1rem",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
            >
              Enviar
            </button>
          </form>

          {/* Informações */}
          <div
            style={{
              background: "#23272A",
              padding: "32px",
              borderRadius: "16px",
              boxShadow: "0 4px 24px #00000040",
              color: "#d9d9d9",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <div>
              <h3 style={{ marginBottom: "16px", fontSize: "1.5rem" }}>
                Informações de Contato
              </h3>
              <p><strong>📞 Telefone:</strong> (14) 99999-9999</p>
              <p><strong>📧 Email:</strong> contato@exemplo.com</p>
              <p><strong>📍 Endereço:</strong> SENAI Jaú</p>
            </div>

            {/* Mapa */}
            <iframe
              title="Mapa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.2350822431434!2d-48.55922522373563!3d-22.29832027968773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b86f72a3f43d4b%3A0x73e7d2232f3a3df7!2sSENAI%20Ja%C3%BA!5e0!3m2!1spt-BR!2sbr!4v1695137027066!5m2!1spt-BR!2sbr"
              width="100%"
              height="200"
              style={{ border: "0", borderRadius: "12px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;
