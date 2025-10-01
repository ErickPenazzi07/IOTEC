import React from "react";


const Servicos = () => {
  return (
    <div style={{ background: "#151138", minHeight: "100vh" }}>
      
    
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
  </div>
</nav>

    

     
      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px", padding: "20px" }}>
        <div style={{ textAlign: "center", width: "30%", background: "white", padding: "15px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
          
          <h3>Nossa Missão

          </h3>
        </div>
        <div style={{ textAlign: "center", width: "30%", background: "white", padding: "15px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
          
          <h3>Otimizar</h3>
        </div>
        <div style={{ textAlign: "center", width: "30%", background: "white", padding: "15px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
          
          <h3>O mundo</h3>
        </div>
      </div>

      <div>
       
    <img src="src/img/agricultura-sustentavel.png"
    ></img>
      </div>
    </div>
  );
};

export default Servicos;
