const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type User {
		_id: ID
		firstName: String
		lastName: String
		email: String
		gender: String
		city: String
		age: Int
		description: String
		hobbies: [Hobby]!
	}
	type Hobby {
		_id: ID
		hobbyName: String
		hobbyAbout: String
		hobbyFan: [User]
	}
	type Query {
		users: [User]!
		user(userId: ID!): User
		me: User
		hobbies: [Hobby]!
		hobby(hobbyId: ID!): Hobby
	}
	type Mutation {
		# TODO:	add in picture once we know how to do so.
		createUser(
			firstName: String!
			lastName: String!
			email: String!
			password: String!
			city: String
			age: Int
			gender: String
			description: String
		): User
		createHobby(hobbyName: String!, hobbyAbout: String): Hobby
	}
`;

module.exports = typeDefs;
