import { useState } from "react";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function TeamMembers({
  name,
  role,
  image,
  github,
  instagram,
  circleColor,
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Card padrão (igual ao seu) */}
      <div
        style={{
          textAlign: "center",
          transition: "transform 0.3s ease",
          cursor: "pointer",
        }}
        onClick={() => setOpen(true)}
      >
        <div
          style={{
            borderRadius: "50%",
            overflow: "hidden",
            width: "180px",
            height: "180px",
            margin: "0 auto",
            border: `6px solid ${circleColor}`,
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            transition: "transform 0.3s ease",
          }}
        >
          <img
            src={image}
            alt={name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <h3
          style={{ fontSize: "1.5rem", fontWeight: "bold", marginTop: "15px" }}
        >
          {name}
        </h3>
        <p style={{ color: "#666", marginBottom: "10px" }}>{role}</p>

        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          {/* Instagram */}
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#e1306c",
              fontSize: "1.8rem",
              transition: "transform 0.2s ease, color 0.2s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.2)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <FaInstagram />
          </a>

          {/* GitHub */}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#0d1117",
              fontSize: "1.8rem",
              transition: "transform 0.2s ease, color 0.2s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.2)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Modal animado */}
      <AnimatePresence>
        {open && (
          <>
            {/* Fundo escurecido com leve desfoque */}
            <motion.div
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
                background: "rgba(0, 0, 0, 0.7)",
                backdropFilter: "blur(4px)",
                zIndex: 100,
              }}
              onClick={() => setOpen(false)}
            />

            {/* Modal centralizado */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              style={{
                position: "fixed",
                top: "25%",
                left: "32%",
                transform: "translate(-50%, -50%)",
                background: "white",
                borderRadius: "20px",
                width: "36%",
                height: "50%",
                overflow: "hidden",
                padding: "30px",
                zIndex: 200,
                textAlign: "center",
                color: "#151138",
                boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <motion.img
                src={image}
                alt={name}
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                style={{
                  width: "130px",
                  height: "130px",
                  borderRadius: "50%",
                  border: `5px solid ${circleColor}`,
                  objectFit: "cover",
                  marginBottom: "20px",
                }}
              />

              <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{name}</h2>
              <p style={{ color: "#666", marginBottom: "15px" }}>{role}</p>

              <p style={{ color: "#333", fontSize: "1rem", lineHeight: "1.6" }}>
                <strong>OLÁ, MEU NOME É {name.toUpperCase()}</strong> 👋
                <br />
                Aqui pode ir um pequeno texto de biografia sobre este fundador.
              </p>

              <button
                onClick={() => setOpen(false)}
                style={{
                  marginTop: "25px",
                  background: circleColor,
                  color: "white",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Fechar
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
