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
`;

module.exports = typeDefs;
