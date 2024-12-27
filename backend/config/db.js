const mongoose = require("mongoose");
const colos = require("colors");

const connectdb = async () => {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on("connected", () => console.log("Database connected successfully!".green.bold));
  db.on("error", (err) => console.error("Connection error:", err));
  db.on("disconnected", () => console.log("Database disconnected."));
};

module.exports = connectdb;
