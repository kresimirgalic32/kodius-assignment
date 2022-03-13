import { createVerify } from "crypto";

import nodemailer from "nodemailer";
import mailDetails from "../routers/placeOrderRouter.js";
// import users from "../data";
// const nodemailer = import("nodemailer");
// var xoauth2 = require("xoauth2");
// const user = "passdirect11@gmail.com";
// const pass = "passdirect123456789";

// var smtpConfig = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   secureConnection: false,
//   port: 587,
//   requiresAuth: true,
//   domains: ["gmail.com", "googlemail.com"],
//   auth: {
//     user: user,
//     pass: pass,
//   },
// });
// module.exports.sendConfirmationEmail = (fullName, email) => {
//   console.log("Check");
//   smtpConfig
//     .sendMail({
//       from: user,
//       to: email,
//       subject: "PassDirect-registracija",
//       text: "Pozdrav!\n\n Upravo ste se uspješno registrirali na PassDirect.\n\n Vaš PassDirect tim. ",
//     })
//     .catch((err: any) => console.log(err));
// };

// module.exports.sendConfirmationEmail

let mailTransporter = nodemailer.createTransport({
  // service: "gmail",
  host: "smtp.gmail.com",
  secureConnection: false,
  secure: false,
  port: 587,
  requiresAuth: true,
  domains: ["gmail.com", "googlemail.com"],
  auth: {
    user: "passdirect11@gmail.com",
    pass: "passdirect123456789",
  },
});

const sendMail = (email, text, cb) => {
  const mailDetails = {
    from: "passdirect11@gmail.com",
    to: email,
    subject: "Test mail",
    text: text,
  };
  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
      console.log(text);
    }
  });
};

// sendMail(', ', ', fun')
export default sendMail;
