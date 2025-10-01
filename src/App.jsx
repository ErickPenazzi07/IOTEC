import './App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
function App() {
  return (
    <>
      <Header />

      {/* Banner principal */}
      <div>
        <img 
          className="d-flex m-auto mt-5 img-fluid rounded shadow" 
          src="https://placehold.co/1800x350" 
          alt="Banner"
        />
      </div>

      {/* Seções */}
      <div className="container text-center my-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="p-4 shadow rounded bg-light h-100">
              <h2 className="mb-3">CONSULTORIA AMBIENTAL</h2>
              <img 
                src="https://placehold.co/300x300" 
                alt="Consultoria Ambiental" 
                className="img-fluid rounded hover-scale"
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 shadow rounded bg-light h-100">
              <h2 className="mb-3 m-4">ENERGIA RENOVÁVEL</h2>
              
              <img 
                src="https://placehold.co/300x300" 
                alt="Energia Renovável" 
                className="img-fluid rounded hover-scale"
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 shadow rounded bg-light h-100">
              <h2 className="mb-3 m-3">ANÁLISE DE CARBONO</h2>
              <img 
                src="https://placehold.co/300x300" 
                alt="Análise de Carbono" 
                className="img-fluid rounded hover-scale"
              />
            </div>
          </div>
        </div>
      </div>
 
      <div className="separator"></div>
      <h1 className="text-center my-5">IOTEC - Soluções Sustentáveis para um Futuro Melhor</h1>
      <div className="separator"></div>
      <Footer />
    </>
        
  )
}

export default App
