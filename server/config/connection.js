const mongoose = require("mongoose");
require("dotenv").config();
console.log(require("dotenv").config());

mongoose.connect(`mongodb+srv://root:root@cluster0.o20dk.mongodb.net/friender_DB?retryWrites=true&w=majority`, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

module.exports = mongoose.connection;
