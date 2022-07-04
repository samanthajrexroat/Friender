const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect('mongodb://localhost:27017/friender', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

module.exports = mongoose.connection;
