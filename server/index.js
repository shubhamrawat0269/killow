const express = require("express");
const PORT = 8082;
const app = express();

var cors = require("cors");
require("dotenv").config();

const cookiesParser = require("cookie-parser");
const connectToDb = require("./db/connectToDb");

const userRoutes = require("./routes/user.route");

app.use(cors());
app.use(express.json());
app.use(cookiesParser());

app.use(express.urlencoded({ extended: true }));

connectToDb();

/* Routes */

app.use("/user", userRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server Started at PORT ${process.env.PORT}`)
);
