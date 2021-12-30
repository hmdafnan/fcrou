const mongoose = require("mongoose");

const establishConnection = () => {
  mongoose.connect(
    "mongodb+srv://nazmu-zma:fcrou111222@cluster0.shwul.mongodb.net/fcrou",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected successfully");
  });
};

module.exports = establishConnection;
