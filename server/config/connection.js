const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/friender_DB", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

module.exports = mongoose.connection;
