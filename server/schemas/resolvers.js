const { User, Hobby } = require("../models");

const resolvers = {
	Query: {
		users: async () => {
			return User.find();
		},
		user: async (parent, { userId }) => {
			return User.findOne({ _id: userId });
		},
		hobbies: async () => {
			return Hobby.find();
		},
		hobby: async (parent, { hobbyId }) => {
			return Hobby.findOne({ _id: hobbyId });
		},
	},
	Mutation: {
		createUser: async (parent, { firstName, lastName, email, password, location, age, gender, about, picture }) => {
			return User.create({ firstName, lastName, email, password, location, age, gender, about, picture });
		},
		createHobby: async (parent, { hobbyName, hobbyAbout }) => {
			return Hobby.create({ hobbyName, hobbyAbout });
		},
		// TODO: addHobby, addFriend mutations for adding hobbies and friends to user key arrays
		addHobby: async (parent, { userId, hobbyId }, context) => {
			try {
				console.log(userId, "test 1");
				if (userId) {
					console.log(userId, "test 2");
					return User.findOneAndUpdate({ _id: userId }, { $push: { hobbies: hobbyId } }, { new: true }).populate("hobbies");
					// console.log(hobbyId, userId);
					// return updatedUser;
				}
			} catch (error) {
				throw error;
			}

			// TODO: add authentication here
		},
	},
};

module.exports = resolvers;
