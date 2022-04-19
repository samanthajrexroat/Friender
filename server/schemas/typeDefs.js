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
		friends: [User]!
		hobbies: [Hobby]!
	}
	type Hobby {
		_id: ID
		hobbyName: String
		hobbyAbout: String
		hobbyFan: [User]
	}

	type Auth {
		token: ID!
		user: User
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
		addHobby(userId: ID!, hobbyId: ID!): User
		addFriend(userId: ID!, friendId: ID!): User
	}
`;

module.exports = typeDefs;
