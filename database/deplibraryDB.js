require("dotenv").config();
const mongoose = require('mongoose');

module.exports = function bookDB() {

mongoose.connect("mongodb://localhost:27017/libraryreact", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

mongoose.set("useFindAndModify", false);
}



