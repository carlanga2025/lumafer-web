
const services = [
  {
    icon: "/oido.png",
    title: "Servicios de Oído",
    description: ["Audiometrías", "Timpanometría", "Lavado de oídos", "Pruebas Vestibulares"]
  },
  {
    icon: "/nariz.png",
    title: "Tratamientos Nasales",
    description: ["Endoscopía Nasal", "Rinoplastia", "Desviación de Tabique Nasal", "Pólipos Nasales", "Septoplastia"]
  },
  {
    icon: "/garganta.png",
    title: "Cuidado de su Garganta",
    description: ["Amigdalectomía", "Laringectomía", "Laringoscopía"]
  }
];

export default function Servicios() {
  return (
    <div className="text-center py-5 bg-light text-primary">
      <h1 className="fw-bold display-4 mb-5">Nuestros Servicios</h1>

      <div className="container">
        <div className="row justify-content-center">
          {services.map((service, index) => (
            <div key={index} className="col-md-4 d-flex flex-column align-items-center text-center position-relative mb-5">
              <div className="bg-light rounded-circle d-flex justify-content-center align-items-center border border-light border-3" style={{ width: "130px", height: "130px", marginBottom: "20px" }}>
                <img src={service.icon} alt={service.title} width={100} height={100} className="rounded-circle" />
              </div>
              <h2 className="h4 fw-bold text-primary text-center">{service.title}</h2>
              <ul className="list-unstyled text-secondary lead text-center">
                {service.description.map((item, i) => (
                  <li key={i} className="mb-2">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
