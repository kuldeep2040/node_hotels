const mongoose = require("mongoose");
require("dotenv").config();

const mongoURL = process.env.MONGODB_URL_LOCAL;
// const mongoURL = process.env.MONGODB_URL;

mongoose.connect(mongoURL);
const dbss = mongoose.connection;

dbss.on("connected", () => {
  console.log("MongoDB Server is connected.");
});
dbss.on("error", () => {
  console.log("MongoDB Server is having error.");
});
dbss.on("disconnected", () => {
  console.log("MongoDB Server is disconnected.");
});

// export default db;
module.exports = dbss;
