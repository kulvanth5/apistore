const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
dotenv.config({ path: __dirname + "/.env" });
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/auth");
const getImage = require("./routes/getImage");
const apiRoutes = require("./routes/apiRoutes");

const app = express();
const bodyParser = require("body-parser");

app.use(express.json({ limit: "1mb" }));
// app.use(express.static("public/build"));

app.use(
  cors({
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

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join("/build")));

//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve("src", "build", "index.html")),
//   );
// } else {
//   app.get("/", (req, res) => {
//     res.send("API is running..");
//   });
// }

let port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("backend running at" + port);
});
