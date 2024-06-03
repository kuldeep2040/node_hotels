const mongoose = require("mongoose");
const mongoURL = 'mongodb://localhost:27017/hotels';
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