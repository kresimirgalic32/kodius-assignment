import express from "express";

import expressAsyncHandler from "express-async-handler";
import nodemailer from "nodemailer";

const placeOrderRouter = express.Router();

const user = "passdirect11@gmail.com";
const pass = "passdirect123456789";

placeOrderRouter.post(
  "/placeorder",
  expressAsyncHandler(async (req, res) => {
    let mailTransporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      secureConnection: false,
      port: 587,
      requiresAuth: true,
      domains: ["gmail.com", "googlemail.com"],
      auth: {
        user: user,
        pass: pass,
      },
    });

    var pom = "";
    for (var i = 0; i < req.body.cartItemsData.length; i++) {
      pom =
        pom +
        req.body.cartItemsData[i].qty +
        "x" +
        req.body.cartItemsData[i].price +
        "€      " +
        req.body.cartItemsData[i].name +
        "\n";
    }

    let mailDetails = {
      from: user,
      to: req.body.userData.email,
      subject: "Receit",
      text:
        "Dear " +
        req.body.userData.name +
        ",\nThis is your receit.\n" +
        pom +
        "\n" +
        "\n Discount:     " +
        req.body.discountData +
        "€\n Total Price:       " +
        req.body.totalPriceData +
        "€",
    };
    console.log(req.body.discountData);
    mailTransporter.sendMail(mailDetails, function (err) {
      if (err) {
        console.log("Error Occurs");
        console.log(err);
      } else {
        console.log("Email sent successfully");
      }
    });

    res.send({
      email: "something",
    });
    return;
  })
);
export default placeOrderRouter;
