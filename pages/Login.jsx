import React from "react";
import Header from "../components/Header";

const Login = () => {
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
          padding: "0px",
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
          Login
        </h2>

        {/* Card de Login */}
        <form
          style={{
            background: "#23272A",
            padding: "40px",
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
            Entrar
          </button>

          {/* Link de registro */}
          <p
            style={{
              color: "#d9d9d9",
              textAlign: "center",
              marginTop: "10px",
              fontSize: "0.9rem",
            }}
          >
            Não tem uma conta?{" "}
            <a
              href="/registrar"
              style={{
                color: "#1976d2",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Registrar
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
