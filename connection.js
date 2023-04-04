// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('student', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

// try {
//     sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }

// // sequelize.sync()
// module.exports = sequelize
const mongoose = require("mongoose");
// require("./models/student.model");
// const student = require("./models/student.model");
const MONGO_URL =
  "mongodb+srv://parvez:errorlogin@parvez.hcgqer3.mongodb.net/student?retryWrites=true&w=majority";

mongoose.connect(MONGO_URL);



mongoose.connection.on("open", () => {
  console.log("Connection is Ready");
});

