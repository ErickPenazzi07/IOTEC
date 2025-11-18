import React, { useState } from "react";
import plantaMoeda from "../src/img/imagem_moedas.png";
import consultoria from "../src/img/consultoria ambiental.webp";
import energia from "../src/img/energia renovavel.jpg";
import analise from "../src/img/analise de carbono.jpeg";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer"

export default function Servicos() {
  const [open, setOpen] = useState(false);
  const [servicoSelecionado, setServicoSelecionado] = useState(null);

  const servicos = [
    {
      title: "Consultoria Ambiental",
      img: consultoria,
      descricao:
        "A Consultoria Ambiental consiste em análises técnicas, diagnósticos e orientações especializadas que ajudam empresas a implementarem práticas sustentáveis e cumprirem legislações ambientais. É essencial para reduzir riscos, evitar multas, otimizar recursos e fortalecer a imagem institucional.",
    },
    {
      title: "Energia Renovável",
      img: energia,
      descricao:
        "O serviço de Energia Renovável oferece soluções baseadas em tecnologias limpas, como energia solar e eólica, permitindo redução de custos, maior eficiência e diminuição das emissões de carbono. Ideal para empresas que buscam avanço tecnológico e sustentabilidade.",
    },
    {
      title: "Análise de Carbono",
      img: analise,
      descricao:
        "A Análise de Carbono realiza o mapeamento preciso das emissões de gases de efeito estufa da empresa, possibilitando estratégias de neutralização, criação de relatórios ESG e identificação de oportunidades de redução de impactos ambientais.",
    },
  ];

  function abrirModal(servico) {
    setServicoSelecionado(servico);
    setOpen(true);
  }

  return (
    <div style={{ background: "#151138", minHeight: "100vh", color: "white" }}>
      <Header />

      {/* HERO */}
      <section style={{ position: "relative", width: "100%" }}>
        <img
          src={plantaMoeda}
          alt="Plantas crescendo"
          style={{
            width: "100%",
            height: "45vh",
            objectFit: "cover",
            filter: "brightness(0.6)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
            Nossos Serviços
          </h1>
          <p style={{ fontSize: "1.2rem", color: "#ddd", marginTop: "10px" }}>
            Soluções sustentáveis para empresas inteligentes.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          paddingTop: "30px",
          padding: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "40px",
        }}
      >
        {servicos.map((serv) => (
          <div
            key={serv.title}
            onClick={() => abrirModal(serv)}
            style={{
              background: "white",
              color: "#151138",
              borderRadius: "15px",
              padding: "25px",
              textAlign: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
              cursor: "pointer",
              transition: ".3s",
            }}
          >
            <img
              src={serv.img}
              alt={serv.title}
              style={{
                width: "120px",
                height: "120px",
                objectFit: "cover",
                borderRadius: "12px",
                marginBottom: "20px",
              }}
            />
            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              {serv.title}
            </h3>
          </div>
        ))}
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {open && servicoSelecionado && (
          <>
            <motion.div
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                background: "rgba(0,0,0,0.7)",
                backdropFilter: "blur(4px)",
                zIndex: 100,
              }}
            />

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 14 }}
              style={{
                position: "absolute",
                top: "20%",
                left: "15%",
                transform: "translateX(-50%)",
                width: "70%",
                maxWidth: "70%",
                height: "60%",
                backgroundImage: `url(${servicoSelecionado.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundBlendMode: "darken",
                backgroundColor: "rgba(0,0,0,0.45)",
                borderRadius: "20px",
                padding: "40px",
                zIndex: 200,
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                boxShadow: "0 20px 45px rgba(0,0,0,0.45)",
              }}
            >
              <h2
                style={{
                  fontSize: "2rem",
                  fontWeight: "900",
                  marginBottom: "10px",
                  textShadow: "0 4px 12px rgba(0,0,0,0.6)",
                }}
              >
                {servicoSelecionado.title}
              </h2>

              <p
                style={{
                  fontSize: "1.3rem",
                  fontStyle: "italic",
                  marginBottom: "15px",
                  textShadow: "0 3px 10px rgba(0,0,0,0.6)",
                }}
              >
                Solução essencial para empresas que desejam crescer de forma
                sustentável.
              </p>

              <p
                style={{
                  fontSize: "1.1rem",
                  maxWidth: "700px",
                  lineHeight: "1.6",
                  textShadow: "0 3px 10px rgba(0,0,0,0.6)",
                }}
              >
                {servicoSelecionado.descricao}
              </p>

              <ul
                style={{
                  marginTop: "20px",
                  listStyle: "none",
                  padding: 0,
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  textShadow: "0 3px 10px rgba(0,0,0,0.6)",
                }}
              >
                <li>✔ Reduz custos e desperdícios operacionais</li>
                <li>✔ Fortalece a imagem da empresa no mercado</li>
                <li>✔ Ajuda a cumprir normas ambientais e evitar multas</li>
                <li>✔ Contribui para metas ESG e sustentabilidade</li>
              </ul>

              <button
                onClick={() => setOpen(false)}
                style={{
                  marginTop: "5px",
                  background: "#0a2df5",
                  color: "white",
                  padding: "14px 32px",
                  borderRadius: "12px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1.1 rem",
                  fontWeight: "bold",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.4)",
                }}
              >
                Fechar
              </button>
            </motion.div>
          </>
          
        )}
        
      </AnimatePresence>
      <Footer/>
    </div>


  );
}
