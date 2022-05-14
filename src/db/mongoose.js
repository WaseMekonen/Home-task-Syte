const mongoose = require("mongoose");

const connectToDatabase = () => {
  const dataBaseUrl = "mongodb://localhost:27017/TodoList";

  return mongoose
    .connect(dataBaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connection successful");
    })
    .catch((err) => {
      console.log("Connection filed!");
    });
};

module.exports = connectToDatabase;
