const { AuthenticationError } = require("apollo-server-express");
const { User, Hobby } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
	Query: {
		users: async () => {
			return User.find({}).populate("friends").populate("hobbies");
		},
		user: async (parent, { userId }) => {
			return User.findOne({ _id: userId }).populate("friends").populate("hobbies");
		},
		hobbies: async () => {
			return Hobby.find({});
		},
		hobby: async (parent, { hobbyId }) => {
			return Hobby.findOne({ _id: hobbyId });
		},
		me: async (parent, args, context) => {
			if (context.user) {
				return User.findOne({ _id: context.user._id }).populate("hobbies").populate("friends");
			}
			throw new AuthenticationError("You need to be logged in!");
		},
		hobbyFans: async (parent, { hobbyId }) => {
			if (hobbyId) {
				return await User.find({ hobbies: hobbyId }).populate("hobbies").populate("friends");
			}
		},
	},
	Mutation: {
		// TODO: Add photo
		createUser: async (parent, { firstName, lastName, email, password, city, age, description, photo }) => {
			const user = await User.create({
				firstName,
				lastName,
				email,
				password,
				city,
				age,
				//  gender,
				description,
				photo,
			});

			const token = await signToken(user);

			return { user, token };
		},

		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });

			if (!user) {
				throw new AuthenticationError("No user found with this email address");
			}

			const correctPw = await user.isCorrectPassword(password);

			if (!correctPw) {
				throw new AuthenticationError("Incorrect credentials");
			}

			const token = signToken(user);

			return { token, user };
		},

		createHobby: async (parent, { hobbyName, hobbyAbout }) => {
			return Hobby.create({ hobbyName, hobbyAbout });
		},

		addHobby: async (parent, { userId, hobbyId }, context) => {
			try {
				if (context.user) {
					return User.findOneAndUpdate({ _id: userId }, { $addToSet: { hobbies: hobbyId } }, { new: true }).populate("hobbies");
				}
			} catch (error) {
				throw error;
			}

			// TODO: add authentication here
		},
		addFriend: async (parent, { userId, friendId }, context) => {
			try {
				if (context.user) {
					// const friend = User.fin({ _id: friendId });
					// console.log(friend.schema.tree);
					return User.findOneAndUpdate({ _id: userId }, { $addToSet: { friends: friendId } }, { new: true })
						.populate("friends")
						.populate("hobbies");
				}
			} catch (error) {
				throw error;
			}
		},
		removeUser: async (parent, { userId }, context) => {
			try {
				if (userId) {
					User.findByIdAndDelete({
						_id: userId,
					});

					return "User successfully deleted";
				}
			} catch (error) {
				throw error;
			}
		},
		removeHobby: async (parent, { userId, hobbyId }, context) => {
			try {
				if (userId) {
					return User.findOneAndUpdate({ _id: userId }, { $pull: { hobbies: hobbyId } }, { new: true }).populate("hobbies");
				}
			} catch (error) {
				throw error;
			}
		},
		removeFriend: async (parent, { userId, friendId }, context) => {
			try {
				if (userId) {
					return User.findByIdAndUpdate({ _id: userId }, { $pull: { friends: friendId } }, { new: true }).populate("friends");
				}
			} catch (error) {
				throw error;
			}
		},
		updateUser: async (parent, { userId, firstName, lastName, email, city, age, description }, context) => {
			try {
				if (userId) {
					const user = await User.findByIdAndUpdate(
						{ _id: userId },
						{
							$set: {
								firstName: firstName,
								lastName: lastName,
								email: email,
								city: city,
								age: age,
								description: description,
							},
						},
						{ new: true }
					);
					const token = await signToken(user);

					return { user, token };

					// return User.findByIdAndUpdate(
					// 	{ _id: userId },
					// 	{ $set: { firstName: firstName, lastName: lastName, email: email, city: city, age: age, description: description } },
					// 	{ new: true }
					// )
					// 	.populate("friends")
					// 	.populate("hobbies");
				}
			} catch (error) {
				throw error;
			}
		},
	},
};

module.exports = resolvers;
