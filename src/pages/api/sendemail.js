import nodemailer from "nodemailer";
require('dotenv').config();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { name, email, message, date,
  place,
  phone,
  quantity,
} = req.body;



  try {
    // Configurar el transporte de nodemailer con tus credenciales SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Configurar el mensaje de correo
    const mailOptions = {
      from: email,
      to: "dolores.polito@gmail.com", // Cambia esto al correo del destinatario
      subject: `Mensaje de ${name}`,
      text: `
      Hola Olivia.

      Tenes una consulta de ${name}, email: ${email}.
      ${message}.
      
      
      Saludos.`
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    return res.status(200).end();
  } catch (error) {
    console.error(error);
    return res.status(500).end();
  }
}
