const { Schema, model } = require("mongoose");

// Is it possible to add how many people have this as a hobby? Might be useful to help people search. Maybe use a virtual?
const hobbySchema = new Schema({
	hobbyName: {
		type: String,
		required: true,
	},
	hobbyAbout: {
		type: String,
	},
	hobbyFan: [
		{
			type: Schema.Types.ObjectId,
			ref: "User",
		},
	],
});

const Hobby = model("Hobby", hobbySchema);

module.exports = Hobby;
