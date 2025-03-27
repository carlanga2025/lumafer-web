const Nosotros = () => {
  return (
    <div className="bg-secondary text-white min-vh-100 d-flex flex-column justify-content-center p-4">
      <div className="container">
        <div className="row align-items-center">
          {/* Imagen */}
          <div className="col-md-6 text-center">
            <img
              src="/foto-doc.png"
              alt="foto"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Texto + Misión y Visión */}
          <div className="col-md-6">
            {/* Sección ¿Quiénes Somos? */}
            <div className="mb-3">
              <h1 className="text-primary fw-bold">¿QUIÉNES SOMOS?</h1>
              <p className="fs-5">
                Somos líderes en salud y en la especialidad de Otorrinolaringología en el Perú. Con más de 15 años de experiencia, ayudamos a nuestros pacientes a mejorar su salud. Nuestro equipo está conformado por profesionales altamente capacitados en la especialidad de otorrino.
              </p>
            </div>

            {/* Sección Misión y Visión */}
            <div className="row">
              {/* Misión */}
              <div className="col-12 mb-3">
                <div className="card text-center shadow-lg card-hover h-100">
                  <div className="card-body text-dark">
                    <img src="/mision.png" alt="Misión" width={80} height={80} className="mb-2" />
                    <h2 className="text-primary">Misión</h2>
                    <p className="fs-5">
                      "Proporcionar soluciones integrales a nuestros pacientes, promoviendo su bienestar y velar por la salud de sus oídos, nariz y garganta."
                    </p>
                  </div>
                </div>
              </div>

              {/* Visión */}
              <div className="col-12">
                <div className="card text-center shadow-lg card-hover h-100">
                  <div className="card-body text-dark">
                    <img src="/vision.png" alt="Visión" width={80} height={80} className="mb-2" />
                    <h2 className="text-primary">Visión</h2>
                    <p className="fs-5">
                      "Ser reconocidos como el principal aliado estratégico en salud ocupacional y vigilancia médica, liderando el mercado peruano con innovación, excelencia y compromiso social."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estilos para hover */}
      <style>
        {`
          .card-hover {
            transition: all 0.3s ease-in-out;
          }

          .card-hover:hover {
            transform: scale(1.05);
            box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
          }
        `}
      </style>
    </div>
  );
};

export default Nosotros;




