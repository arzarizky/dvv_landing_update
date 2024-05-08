import nodemailer from "nodemailer";

const email = "sender.mail@arzarizky.cloud";
const pass = "Sendermail12345";

export const transporter = nodemailer.createTransport({
  pool: true,
  host: "mail.arzarizky.cloud",
  port: 465,
  secure: true, // use TLS
  auth: {
    user: email,
    pass: pass,
  },
});
