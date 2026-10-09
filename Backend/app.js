if (process.env.NODE_ENV != "production") {

  require('dotenv').config()
}

const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require('./routes/user.js')
const orderRouter = require('./routes/order.js')


const Holding = require('./models/HoldingSchema')
const Position = require('./models/positionSchema')

const app = express();

const PORT = process.env.PORT || 5500;
const DB_URL = process.env.MONGO_URL;


main().then((res) => {
  console.log("DB Connected successfully")
})
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(DB_URL);
}

// Form data read karne ke liye
app.use(express.urlencoded({ extended: true }));

// JSON data read karne ke liye
app.use(express.json());


// Frontend 5173 aur Dashboard 5174  ko backend ke saath connect karne ke liye
app.use(cors({
  origin: [
    "https://zerodha-frontend-or4v.onrender.com",
    "https://zerodha-dashboard-9wg2.onrender.com",
    "http://localhost:5173",
    "http://localhost:5174"
  ],
  credentials: true
}));


// Cookie read karne ke liye :- browser ki cookie ko Express ke andar available karati hai.
app.use(cookieParser());

app.use('/api/users/', router);
app.use('/', orderRouter);



// push kr diye data to databse me
// app.get('/addholdings', async (req, res) => {
//   // let tempHolding = [
//   //   {
//   //     name: "BHARTIARTL",
//   //     qty: 2,
//   //     avg: 538.05,
//   //     price: 541.15,
//   //     net: "+0.58%",
//   //     day: "+2.99%",
//   //   },
//   //   {
//   //     name: "HDFCBANK",
//   //     qty: 2,
//   //     avg: 1383.4,
//   //     price: 1522.35,
//   //     net: "+10.04%",
//   //     day: "+0.11%",
//   //   },
//   //   {
//   //     name: "HINDUNILVR",
//   //     qty: 1,
//   //     avg: 2335.85,
//   //     price: 2417.4,
//   //     net: "+3.49%",
//   //     day: "+0.21%",
//   //   },
//   //   {
//   //     name: "INFY",
//   //     qty: 1,
//   //     avg: 1350.5,
//   //     price: 1555.45,
//   //     net: "+15.18%",
//   //     day: "-1.60%",

//   //   },
//   //   {
//   //     name: "ITC",
//   //     qty: 5,
//   //     avg: 202.0,
//   //     price: 207.9,
//   //     net: "+2.92%",
//   //     day: "+0.80%",
//   //   },
//   //   {
//   //     name: "KPITTECH",
//   //     qty: 5,
//   //     avg: 250.3,
//   //     price: 266.45,
//   //     net: "+6.45%",
//   //     day: "+3.54%",
//   //   },
//   //   {
//   //     name: "M&M",
//   //     qty: 2,
//   //     avg: 809.9,
//   //     price: 779.8,
//   //     net: "-3.72%",
//   //     day: "-0.01%",

//   //   },
//   //   {
//   //     name: "RELIANCE",
//   //     qty: 1,
//   //     avg: 2193.7,
//   //     price: 2112.4,
//   //     net: "-3.71%",
//   //     day: "+1.44%",
//   //   },
//   //   {
//   //     name: "SBIN",
//   //     qty: 4,
//   //     avg: 324.35,
//   //     price: 430.2,
//   //     net: "+32.63%",
//   //     day: "-0.34%",

//   //   },
//   //   {
//   //     name: "SGBMAY29",
//   //     qty: 2,
//   //     avg: 4727.0,
//   //     price: 4719.0,
//   //     net: "-0.17%",
//   //     day: "+0.15%",
//   //   },
//   //   {
//   //     name: "TATAPOWER",
//   //     qty: 5,
//   //     avg: 104.2,
//   //     price: 124.15,
//   //     net: "+19.15%",
//   //     day: "-0.24%",

//   //   },
//   //   {
//   //     name: "TCS",
//   //     qty: 1,
//   //     avg: 3041.7,
//   //     price: 3194.8,
//   //     net: "+5.03%",
//   //     day: "-0.25%",

//   //   },
//   //   {
//   //     name: "WIPRO",
//   //     qty: 4,
//   //     avg: 489.3,
//   //     price: 577.75,
//   //     net: "+18.08%",
//   //     day: "+0.32%",
//   //   },
//   // ];

//   // await Holding.deleteMany({})
//   // await Holding.insertMany(tempHolding);

//   // let tempPosition = [
//   //   {
//   //     product: "CNC",
//   //     name: "EVEREADY",
//   //     qty: 2,
//   //     avg: 316.27,
//   //     price: 312.35,
//   //     net: "+0.58%",
//   //     day: "-1.24%",
//   //     isLoss: true,
//   //   },
//   //   {
//   //     product: "CNC",
//   //     name: "JUBLFOOD",
//   //     qty: 1,
//   //     avg: 3124.75,
//   //     price: 3082.65,
//   //     net: "+10.04%",
//   //     day: "-1.35%",
//   //     isLoss: true,
//   //   },
//   // ]

//   // Position.insertMany(tempPositi);
//   res.send("Done")
// })


// Get kr rhe data ko database se
app.get("/allholdings", async (req, res) => {

  let allholdings = await Holding.find();
  res.json(allholdings);
})


app.get("/allpositions", async (req, res) => {
  let allpositions = await Position.find();
  res.json(allpositions);
})


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})