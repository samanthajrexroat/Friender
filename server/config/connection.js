const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(`${process.env.DATABASE_URL}`, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
console.log(typeof process.env.DATABASE_URL);
module.exports = mongoose.connection;
