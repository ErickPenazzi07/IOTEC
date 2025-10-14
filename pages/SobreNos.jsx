import TeamMembers from "../components/TeamMembers"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Pedro",
      role: "CEO & Fundadora",
      image: "/src/img/Pedro.jpg",
    },
    {
      name: "Erick",
      role: "Diretor de Tecnologia",
      image: "/src/img/Erick.jpg",
    },
    {
      name: "Thiago",
      role: "Diretora de Design",
      image: "/src/img/Thiago.jpg",
    },
    {
      name: "Tiago",
      role: "Diretor de Operações",
      image: "/src/img/Tiago.jpg",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Sobre Nós
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
            Somos uma equipe apaixonada por criar experiências digitais excepcionais que transformam negócios e conectam pessoas.
          </p>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Nossa Missão</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Capacitar empresas através de soluções digitais inovadoras, combinando design excepcional com tecnologia de ponta.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Nossa Visão</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Ser referência em transformação digital, reconhecidos pela excelência e pelo impacto positivo em nossos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Conheça Nossa Equipe
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Profissionais dedicados que tornam tudo possível
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <TeamMembers
                key={member.name}
                name={member.name}
                role={member.role}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold tracking-tight md:text-5xl">
            Nossos Valores
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-8">
              <h3 className="mb-3 text-2xl font-bold">Inovação</h3>
              <p className="leading-relaxed text-muted-foreground">
                Buscamos constantemente novas formas de resolver problemas e criar valor.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-8">
              <h3 className="mb-3 text-2xl font-bold">Excelência</h3>
              <p className="leading-relaxed text-muted-foreground">
                Comprometidos com a qualidade em cada detalhe, entregando sempre o melhor.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-8">
              <h3 className="mb-3 text-2xl font-bold">Colaboração</h3>
              <p className="leading-relaxed text-muted-foreground">
                Trabalhamos juntos, valorizando cada perspectiva e construindo soluções em equipe.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
