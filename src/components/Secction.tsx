import card1 from '../assets/donasvariedades.png';
import card2 from '../assets/donaspersonalizadas.png';
import card3 from '../assets/donaspormayor.png';

const Secction = () => {
  return (
    <section id="productos" className="py-5">
      <div className="container">
        <h2 className="h1 text-center mb-4">Productos y servicios</h2>

       
        <div className="cards-grid">
          <div className="card h-100 shadow-sm">
            <img src={card1} className="card-img-top" alt="Variedad de donas" />
            <div className="card-body text-center">
              <h5 className="card-title">Variedades clásicas</h5>
              <p className="card-text">
                Glaseadas y con Cobertura de Chocolate. Hechas cada mañana para mantener la frescura.
              </p>
            </div>
            <div className="card-footer bg-white border-0">
              <a href="#contacto" className="btn btn-outline-primary w-100">Pedir ahora</a>
            </div>
          </div>

          <div className="card h-100 shadow-sm">
            <img src={card2} className="card-img-top" alt="Donas personalizadas" />
            <div className="card-body text-center">
              <h5 className="card-title">Donas personalizadas</h5>
              <p className="card-text">
                Diseños especiales para cumpleaños y eventos. ¡Tu idea, nosotros la plasmamos!
              </p>
            </div>
            <div className="card-footer bg-white border-0">
              <a href="#servicios" className="btn btn-outline-primary w-100">Ver opciones</a>
            </div>
          </div>

          <div className="card h-100 shadow-sm">
            <img src={card3} className="card-img-top" alt="Donas por mayor" />
            <div className="card-body text-center">
              <h5 className="card-title">Ventas al por mayor</h5>
              <p className="card-text">
                Descuentos por volumen para eventos grandes. Entregas programadas.
              </p>
            </div>
            <div className="card-footer bg-white border-0">
              <a href="#contacto" className="btn btn-outline-primary w-100">Cotizar</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Secction;
