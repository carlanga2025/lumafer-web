import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

// Cargar las variables de entorno
dotenv.config();


const port = 5001;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Verificar que las variables de entorno están definidas
if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
  console.error("⚠ ERROR: Las variables de entorno GMAIL_USER o GMAIL_PASS no están definidas.");
  process.exit(1);
}

// Configurar Nodemailer
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
  debug: true,
});

// Ruta para enviar el correo
app.post("/enviar-correo", (req, res) => {
  const { nombre, email, mensaje } = req.body;

  console.log(nombre, email, mensaje);

  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ error: "Todos los campos son obligatorios." });
  }

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: "Nuevo mensaje de contacto",
    text: `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error al enviar el correo:", error);
      return res.status(500).json({ error: "Hubo un error al enviar el mensaje. Inténtalo de nuevo." });
    }
    console.log("Correo enviado:", info.response);
    res.status(200).json({ message: "¡Mensaje enviado con éxito!" });
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});



