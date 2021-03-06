import bcrypt from "bcryptjs";
const data = {
  promo: [
    {
      name: "20%OFF",
      conjuction: false,
    },
    {
      name: "5%OFF",
      conjuction: false,
    },
    {
      name: "20EUROFF",
      conjuction: true,
    },
  ],

  users: [
    {
      name: "Kreso",
      email: "kresimir.galic32@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "idixon",
      email: "idixon323@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],

  products: [
    {
      id: "1",
      name: "Smart Hub",
      price: 49.99,
      image:
        "https://shop.bt.com/images/product/uni2/DigitalContent/dy/DYNK_A24D1E3D-BB50-490D-9E5F-DFB5B8A63C9B_large.jpg",
    },
    {
      id: "2",
      name: "Motion Sensor",
      price: 24.99,
      image:
        "https://mobileimages.lowes.com/productimages/66029aab-53ba-4e5b-87c3-f62bd5a9a15d/15276091.jpg?size=pdhi",
    },
    {
      id: "3",
      name: "Wireless Camera",
      price: 99.99,
      image: "https://m.media-amazon.com/images/I/31taIOBAhpL.jpg",
    },
    {
      id: "4",
      name: "Smoke Sensor",
      price: 19.99,
      image:
        "https://www.powerplanetonline.com/cdnassets/xiaomi_aqara_water_leak_sensor_01_l.jpg",
    },
    {
      id: "5",
      name: "Water Leak Sensor",
      price: 14.99,
      image:
        "https://wooxhome.com/images/woox-r7050-smart-water-leak-sensor-p51-416_image.jpg",
    },
  ],
};
export default data;
