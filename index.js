const express = require("express");
const dbss = require("./db");
const app = express();
require('dotenv').config();
const bodyParser = require("body-parser");
app.use(bodyParser.json());


const personRouter = require("./routes/personRoutes");
app.use("/person", personRouter);

const menuRouter = require("./routes/menuRoutes");
app.use("/menu", menuRouter);

// Other Endpoints
app.get("/", (req, res) => {
  return res.send("Hello from Homepage");
});
app.get("/about", (req, res) => {
  return res.send("Hello from about page" + "\tHey " + req.query.name);
});

const port = process.env.PORT  || 3000;
app.listen(port, () => console.log("Server Started"));
