const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === "development") {
  app.use(cors());
}
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", //replace with your email provider
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

// verify connection configuration
// transporter.verify(function (error, success) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Server is ready to take our messages");
//   }
// });
app.post("/test", (req, res) => {
  const data = req.body.data;
  res.status(200).send(JSON.stringify(data));
});

// app.post("/send", (req, res, next) => {
//   var name = req.body.name;
//   var email = req.body.email;
//   var message = req.body.message;

//   var mail = {
//     from: email,
//     to: "perminova.anna85@gmail.com", // receiver email,
//     text: message,
//   };

//   transporter.sendMail(mail, (err, data) => {
//     if (err) {
//       res.json({
//         status: "fail",
//       });
//     } else {
//       res.json({
//         status: "success",
//       });
//     }
//   });
// });

app.listen(3001, () => {
  console.log("Listening on 3001");
});
