import { Link, NavLink } from "react-router"

const Header = () => {

  return (
    <header>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">IOTEC</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
      data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" 
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav mx-auto">
        <a class="nav-link" href="/">Home</a>
        <a class="nav-link" href="/sobrenos">Sobre Nós</a>
        <a class="nav-link" href="/servicos">Serviços</a>
        <a class="nav-link" href="/contatos">Contatos</a>
      </div>
    </div>
  </div>
  <div>
    <img src=""></img>
  </div>
</nav>

    </header>
  )
}

export default Header
