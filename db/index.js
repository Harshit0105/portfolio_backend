const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Harry:HarryAtlas%400105@portfoliocluster.9runo.mongodb.net/portfolio?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
