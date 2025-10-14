import React from "react";
import plantaMoeda from "../src/img/imagem_moedas.png";
import Header from "../components/Header";

const Servicos = () => {
  return (
    <div style={{ background: "#151138", minHeight: "100vh" }}>
      <Header />

      {/* IMAGEM PRINCIPAL */}
      <div>
        <img
          src={plantaMoeda}
          alt="Plantas crescendo sobre moedas"
          style={{ width: "100%", height: "250px", objectFit: "cover" }}
        />
      </div>

      {/* CARDS DE SERVIÇOS */}
      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px", padding: "20px" }}>
        <div style={{ textAlign: "center", width: "30%", background: "white", padding: "15px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
          <img src="https://via.placeholder.com/100" alt="Consultoria Ambiental" style={{ width: "100px", marginBottom: "10px" }} />
          <h3>CONSULTORIA AMBIENTAL</h3>
        </div>
        <div style={{ textAlign: "center", width: "30%", background: "white", padding: "15px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
          <img src="https://via.placeholder.com/100" alt="Energia Renovável" style={{ width: "100px", marginBottom: "10px" }} />
          <h3>ENERGIA RENOVÁVEL</h3>
        </div>
        <div style={{ textAlign: "center", width: "30%", background: "white", padding: "15px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
          <img src="https://via.placeholder.com/100" alt="Análise de Carbono" style={{ width: "100px", marginBottom: "10px" }} />
          <h3>ANÁLISE DE CARBONO</h3>
        </div>
      </div>

    </div>
  );
};

export default Servicos;
