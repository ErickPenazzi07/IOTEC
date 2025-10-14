import Header from "../components/Header";

const Instituicoes = () => {
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
        {/* Título */}
        <div>
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
            Instituições
          </h2>
        </div>
      
      <div className="d-flex col" >
        {/* Texto + imagem placeholder */}
        <div
          style={{
            color: "#d9d9d9",
            marginBottom: "48px",
          }}
          className="d-flex m-auto col-8 text-lg-center my-4"
        >
          <p
            style={{
              fontSize: "1.25rem",
              marginBottom: "24px",
              textAlign: "justify",
            }}
            className=" d-flex mb-4 mt-5 me-5"
          >
            Nosso projeto busca conectar instituições comprometidas com o futuro,
            promovendo inovação, inclusão e impacto social. Cada parceria fortalece
            nossa missão de transformar a realidade por meio da tecnologia e colaboração.
          </p>

          <img
            src="https://placehold.co/600x400"
            alt="Instituições parceiras"
            style={{
              borderRadius: "12px",
              boxShadow: "0 0 20px rgba(0,0,0,0.4)",
            }}
            className="d-flex m-auto img-fluid rounded shadow col-7"
          />
        </div>
        </div>



        {/* Botão */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            onClick={() => (window.location.href = "/login")}
            style={{
              fontSize: "1.25rem",
              padding: "24px 48px",
              background: "#d9d9d9",
              color: "#151138",
              fontWeight: "bold",
              letterSpacing: "1px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.background = "#bfbfbf")}
            onMouseOut={(e) => (e.target.style.background = "#d9d9d9")}
          >
            Se junte ao nosso projeto
          </button>
        </div>
      </div>
    </div>
  );
};

export default Instituicoes;
