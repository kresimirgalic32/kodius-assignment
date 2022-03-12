// const nodemailer = require("nodemailer");
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
  service: "gmail",
  auth: {
    user: "passdirect11@gmail.com",
    pass: "passdirect123456789",
  },
});

let mailDetails = {
  from: "passdirect11@gmail.com",
  to: "kresimir.galic32@gmail.com",
  subject: "Test mail",
  text: "Node.js testing mail for GeeksforGeeks",
};

mailTransporter.sendMail(mailDetails, function (err) {
  if (err) {
    console.log("Error Occurs");
  } else {
    console.log("Email sent successfully");
  }
});
