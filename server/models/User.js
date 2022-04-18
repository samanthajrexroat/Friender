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
            unique: true,
		},
		email: {
			type: String,
			required: true,
			trim: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
		},
		password: {
			type: String,
			required: true,
			trim: true,
            minLength: 8,
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
		photo: {
			// TODO:
			// How do you handle pictures?
		},
		friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            }
        ],
		hobbies: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Hobby',
            }
        ],
	},
	{
		toJson: {
			virtuals: true,
		},
		id: false,
	}
);

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
});
  
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };

const User = model("User", userSchema);

module.exports = User;
