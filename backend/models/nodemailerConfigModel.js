// import { createVerify } from "crypto";

// import nodemailer from "nodemailer";
// import mailDetails from "../routers/placeOrderRouter.js";
// import users from "../data";

// var xoauth2 = require("xoauth2");
// const user = "passdirect11@gmail.com";
// const pass = "passdirect123456789";

// // var smtpConfig = nodemailer.createTransport({
// //   host: "smtp.gmail.com",
// //   secureConnection: false,
// //   port: 587,
// //   requiresAuth: true,
// //   domains: ["gmail.com", "googlemail.com"],
// //   auth: {
// //     user: user,
// //     pass: pass,
// //   },
// // });
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

// module.exports.sendmail = async function sendMail(subject, body) {};
// module.exports.sendConfirmationEmail;

// service: "gmail", sendMail(", ", ", fun");
// export default sendMail;
// // const nodemailer = require("nodemailer");

// // module.exports = async function sendmail(subject, body) {
// //   // create reusable transporter object using the default SMTP transport

// //   let transporter = nodemailer.createTransport({
// //     host: "", // enter host name
// //     port: "", //enter port name
// //     secure: false, // true for 465, false for other ports
// //     auth: {
// //       user: "", // write your smtp account user name
// //       pass: "", // write your smtp account user password
// //     },
// //     tls: {
// //       rejectUnauthorized: false, // Important for sendimg mail from localhost
// //     },
// //   });

// //   // send mail with defined transport object
// //   let info = await transporter.sendMail({
// //     from: "info@sendermail.com", // sender address
// //     to: "info@recmail.com", // list of receivers
// //     subject: subject, // Subject line
// //     text: "", // plain text body
// //     html: body, // html body
// //   });

// //   console.log("Message sent: %s", info.messageId);
// // };
// // module.exports.sendConfirmationEmail
