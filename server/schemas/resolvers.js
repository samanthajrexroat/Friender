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
		addUser: async (parent, { firstName, lastName, email, password, location, age, gender, about, picture }) => {
			return User.create({ firstName, lastName, email, password, location, age, gender, about, picture });
		},
		addHobby: async (parent, { hobbyName, hobbyAbout }) => {
			return Hobby.create({ hobbyName, hobbyAbout });
		},
	},
};

module.exports = resolvers;
