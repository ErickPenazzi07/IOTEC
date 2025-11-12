import TeamMembers from "../components/TeamMembers"
import Header from "../components/Header"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Pedro",
      role: "CEO & Fundador",
      image: "/src/img/Pedro.jpg",
      github: "https://github.com/PedrooAraujosz", // 🔹 trocado
      instagram: "https://www.instagram.com/pedro_araujosz/",
      circleColor: "#22c55e", // Verde
    },
    {
      name: "Erick",
      role: "Diretor de Tecnologia",
      image: "/src/img/Erick.jpg",
      github: "https://github.com/ErickPenazzi07", // 🔹 trocado
      instagram: "https://www.instagram.com/eo.erick07/",
      circleColor: "#eab308", // Amarelo
    },
    {
      name: "Thiago",
      role: "Diretor de Design",
      image: "/src/img/Thiago.jpg",
      github: "https://github.com/ThiagoVanucci01", // 🔹 trocado
      instagram: "https://www.instagram.com/thiago_vanucc1/",
      circleColor: "#0a2df5", // Azul
    },
    {
      name: "Tiago",
      role: "Diretor de Operações",
      image: "/src/img/Tiago.jpg",
      github: "https://github.com/tiagop244", // 🔹 trocado
      instagram: "https://www.instagram.com/tiagopereira3010/",
      circleColor: "#8b5cf6", // Roxo
    },
  ]

  return (
    <div
      style={{
        backgroundColor: "#151138",
        minHeight: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />

      <main style={{ width: "100%", flex: 1 }}>
        {/* Hero Section */}
        <section
          style={{
            textAlign: "center",
            padding: "80px 20px 40px 20px",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "20px" }}>
            Sobre Nós
          </h1>
          <p style={{ fontSize: "1.2rem", color: "#ccc", lineHeight: "1.6" }}>
            Somos uma equipe apaixonada por criar experiências digitais excepcionais que
            transformam negócios e conectam pessoas.
          </p>
        </section>

        {/* Missão e Visão */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            maxWidth: "1000px",
            margin: "0 auto",
            padding: "40px 20px",
          }}
        >
          <div
            style={{
              background: "#1d1a4f",
              borderRadius: "12px",
              padding: "30px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            }}
          >
            <h2 style={{ fontSize: "1.8rem", fontWeight: "bold" }}>Nossa Missão</h2>
            <p style={{ marginTop: "15px", color: "#ccc", lineHeight: "1.6" }}>
              Capacitar empresas através de soluções digitais inovadoras, combinando design
              excepcional com tecnologia de ponta.
            </p>
          </div>

          <div
            style={{
              background: "#1d1a4f",
              borderRadius: "12px",
              padding: "30px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            }}
          >
            <h2 style={{ fontSize: "1.8rem", fontWeight: "bold" }}>Nossa Visão</h2>
            <p style={{ marginTop: "15px", color: "#ccc", lineHeight: "1.6" }}>
              Ser referência em transformação digital, reconhecidos pela excelência e pelo
              impacto positivo em nossos clientes.
            </p>
          </div>
        </section>

        {/* Equipe */}
        <section
          style={{
            background: "#f5f7ff",
            color: "#151138",
            padding: "80px 20px",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#0a2df5" }}>
            Quem são os fundadores
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "60px",
              marginTop: "60px",
            }}
          >
            {teamMembers.map((member) => (
              <TeamMembers key={member.name} {...member} />
            ))}
          </div>
        </section>

        {/* Valores */}
        <section
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            padding: "60px 20px 100px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "2.5rem",
              fontWeight: "bold",
              marginBottom: "40px",
            }}
          >
            Nossos Valores
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "30px",
            }}
          >
            {[
              {
                title: "Inovação",
                text: "Buscamos constantemente novas formas de resolver problemas e criar valor.",
              },
              {
                title: "Excelência",
                text: "Comprometidos com a qualidade em cada detalhe, entregando sempre o melhor.",
              },
              {
                title: "Colaboração",
                text: "Trabalhamos juntos, valorizando cada perspectiva e construindo soluções em equipe.",
              },
            ].map((valor) => (
              <div
                key={valor.title}
                style={{
                  background: "#1d1a4f",
                  borderRadius: "12px",
                  padding: "30px",
                  color: "white",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                }}
              >
                <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "10px" }}>
                  {valor.title}
                </h3>
                <p style={{ color: "#ccc", lineHeight: "1.6" }}>{valor.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
