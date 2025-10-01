import React from "react";
import Header from "../components/Header";

const Contato = () => {
  return (
    <div>
      <Header />
      <div
        style={{
          background: "#1E1E1E",
          minHeight: "80vh",
          padding: "40px",
        }}
      >
        {/* Título centralizado no topo */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "32px",
          }}
        >
          <h2
            style={{
              color: "#d9d9d9",
              fontWeight: "bold",
              fontSize: "2.5rem",
              letterSpacing: "2px",
              textAlign: "center",
              textShadow: "1px 1px 8px #23272A",
            }}
          >
            Contato
          </h2>
        </div>
        {/* Formulário alinhado à esquerda */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            height: "100%",
          }}
        >
          <form
            style={{
              background: "#23272A",
              padding: "32px",
              borderRadius: "16px",
              boxShadow: "0 4px 24px #00000040",
              width: "100%",
              maxWidth: "400px",
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
        </div>
      </div>
    </div>
  );
};

export default Contato;
