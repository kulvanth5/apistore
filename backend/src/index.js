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

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/image-upload", getImage);
app.use("/api/products", apiRoutes);

let port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("backend deployed");
});

app.listen(port, () => {
  console.log("backend running at" + port);
});
