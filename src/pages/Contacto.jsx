import { useState } from "react";
import { FaPhone, FaEnvelope, FaFacebook } from "react-icons/fa";

export default function Contacto() {
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    try {
      const response = await fetch("http://localhost:5001/enviar-correo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Respuesta del servidor:", data); // <-- Esto te dirá qué devuelve el servidor

      if (response.ok) {
        setStatus("Correo enviado con éxito");
        setFormData({ nombre: "", email: "", mensaje: "" });
      } else {
        setStatus(data.error || "Error al enviar el correo");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Error al enviar el correo");
    }
  };


  return (
    <div className="py-5 bg-dark text-primary w-100">
      <h1 className="fw-bold display-3 text-center mb-5">Contáctanos</h1>
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-lg-8">
            <form className="p-5 rounded shadow-lg bg-secondary" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="form-label text-dark fw-bold">Nombre</label>
                <input type="text" name="nombre" className="form-control form-control-lg" value={formData.nombre} onChange={handleChange} required />
              </div>
              <div className="mb-4">
                <label className="form-label text-dark fw-bold">Email</label>
                <input type="email" name="email" className="form-control form-control-lg" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="mb-4">
                <label className="form-label text-dark fw-bold">Mensaje</label>
                <textarea name="mensaje" className="form-control form-control-lg" rows="5" value={formData.mensaje} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100 fw-bold btn-lg">Enviar</button>
              {status && <p className="text-center text-warning fs-4 fw-bold mt-3">{status}</p>}
            </form>
          </div>
        </div>
        <div className="text-center mt-5">
          <a href="tel:+123456789" className="text-white fs-4 mx-3 d-inline-block"><FaPhone /> +51 946 193 746</a>
          <a href="mailto:correo@example.com" className="text-white fs-4 mx-3 d-inline-block"><FaEnvelope /> correo@example.com</a>
          <a href="https://facebook.com" className="text-white fs-4 mx-3 d-inline-block" target="_blank" rel="noopener noreferrer"><FaFacebook /> Facebook</a>
        </div>
      </div>
    </div>
  );
}


