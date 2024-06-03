const express = require("express");
const dbss = require("./db");
const app = express();
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

app.listen(3000, () => console.log("Server Started"));
