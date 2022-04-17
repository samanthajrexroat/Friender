const { Schema, model } = require("mongoose");

const userSchema = new Schema(
	// TODO: Confirm reqs on all keys. Add regex if needed. Add reference to hobbies model so they can be mapped on a profile page.
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
		gender: {
			type: String,
			required: true,
		},
		location: {
			type: String,
			trim: true,
		},
		age: {
			type: Int,
		},
		about: {
			type: String,
			trim: true,
		},
		picture: {
			// TODO:
			// How do you handle pictures?
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
