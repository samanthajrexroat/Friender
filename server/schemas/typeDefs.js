const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type User {
		_id: ID
		firstName: String
		lastName: String
		email: String
		gender: String
		location: String
		age: Int
		about: String
		hobbies: [Hobby]!
	}
	type Hobby {
		_id: ID
		hobbyName: String
		hobbyAbout: String
	}
	type Query {
		users: [User]!
		user(userId: ID!): User
		hobbies: [Hobby]!
		hobby(hobbyId: ID!): Hobby
	}
	type Mutation {
		# TODO:	add in picture once we know how to do so.
		addUser(firstName: String!, lastName: String!, email: String!, password: String!, location: String, age: Int, gender: String, about: String): User
		addHobby(hobbyName: String!, hobbyAbout: String): Hobby
	}
`;

module.exports = typeDefs;
