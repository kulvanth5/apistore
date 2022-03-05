const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
// const path = require("path");
dotenv.config({ path: __dirname + "/.env" });
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/auth");
const getImage = require("./routes/getImage");
const apiRoutes = require("./routes/apiRoutes");

const app = express();
const bodyParser = require("body-parser");

app.use(express.json({ limit: "1mb" }));

const corsOrigin = "http://localhost:3000";
app.use(
  cors({
    origin: [corsOrigin],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "1mb" }));

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Mongo running");
  })
  .catch((err) => {
    console.log("error occured" + err);
  });

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/image-upload", getImage);
app.use("/api/products", apiRoutes);

// app.use(express.static("public"));

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept",
//   );
//   next();
// });

let port = process.env.PORT;

app.listen(port, () => {
  console.log("backend running at" + port);
});
