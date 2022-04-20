const mongoose = require("mongoose");
require("dotenv").config();
console.log(require("dotenv").config());
console.log(process.env.DB_USERNAME, process.env.DB_PASSWORD);

mongoose.connect(
	`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.o20dk.mongodb.net/friender_DB?retryWrites=true&w=majority`,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);

module.exports = mongoose.connection;
// (process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/friender_DB",
