import { FaInstagram, FaGithub } from "react-icons/fa"

export default function TeamMembers({ name, role, image, github, instagram, circleColor }) {
  return (
    <div style={{ textAlign: "center", transition: "transform 0.3s ease" }}>
      <div
        style={{
          borderRadius: "50%",
          overflow: "hidden",
          width: "180px",
          height: "180px",
          margin: "0 auto",
          border: `6px solid ${circleColor}`,
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        }}
      >
        <img
          src={image}
          alt={name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginTop: "15px" }}>{name}</h3>
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
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
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
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <FaGithub />
        </a>
      </div>
    </div>
  )
}
