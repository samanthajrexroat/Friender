const { Schema, model } = require("mongoose");

const userSchema = new Schema(
	// Other possibilities: Gender, Age, Location, Looking for (not hobbies), picture,
	{
		firstName: {
			type: String,
			required: true,
			trim: true,
		},
		lastName: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			trim: true,
		},
		password: {
			type: String,
			required: true,
			trim: true,
		},
		about: {
			type: String,
			required: false,
			trim: true,
		},
		friends: [{}],
		hobbies: [{}],
	},
	{
		toJson: {
			virtuals: true,
		},
		id: false,
	}
);

const User = model("User", userSchema);

module.exports = User;
