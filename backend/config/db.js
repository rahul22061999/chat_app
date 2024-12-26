const mongoose = require("mongoose");
const colos = require('colors');

const connectdb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`Mongo Db is connected:  ${conn.connection.host}`.red.bold)
  } catch (error) {
    console.error(`Error: ${error.mesage}`)
    console.log(process.env.MONGO_URI);

    process.exit();
  }
};


module.exports = connectdb;