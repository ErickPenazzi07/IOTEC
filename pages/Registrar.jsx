import React from "react";
import Header from "../components/Header";

const Registrar = () => {
  return (
    <div>
      <Header />
      <div
        style={{
          background: "#151138",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
        }}
      >
        {/* Título */}
        <h2
          style={{
            color: "#d9d9d9",
            fontWeight: "bold",
            fontSize: "2.5rem",
            letterSpacing: "2px",
            textAlign: "center",
            textShadow: "1px 1px 8px #23272A",
            marginBottom: "32px",
          }}
        >
          Registrar
        </h2>

        {/* Card de Registro */}
        <form
          style={{
            background: "#23272A",
            padding: "40px",
            borderRadius: "16px",
            boxShadow: "0 4px 24px #00000040",
            width: "100%",
            maxWidth: "500px",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <input
            type="text"
            placeholder="Nome da Instituição"
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
          <input
            type="password"
            placeholder="Senha"
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
            type="password"
            placeholder="Confirmar Senha"
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
            type="text"
            placeholder="CNPJ"
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
            type="text"
            placeholder="Cidade"
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
            type="text"
            placeholder="Endereço"
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "none",
              background: "#2C2F33",
              color: "#d9d9d9",
              fontSize: "1rem",
            }}
          />

          {/* Campo adicional interessante */}
          <input
            type="text"
            placeholder="Área de Atuação (ex: Educação, Tecnologia, Saúde)"
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "none",
              background: "#2C2F33",
              color: "#d9d9d9",
              fontSize: "1rem",
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
            Registrar
          </button>

          {/* Link para voltar ao login */}
          <p
            style={{
              color: "#d9d9d9",
              textAlign: "center",
              marginTop: "10px",
              fontSize: "0.9rem",
            }}
          >
            Já tem uma conta?{" "}
            <a
              href="/login"
              style={{
                color: "#1976d2",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Fazer Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registrar;
