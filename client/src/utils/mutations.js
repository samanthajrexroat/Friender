import { gql } from "@apollo/client";

export const CREATE_USER = gql`
	mutation createUser(
		$firstName: String!
		$lastName: String!
		$email: String!
		$description: String
		$city: String!
		# $gender: String!
		$age: Int
		$password: String!
		# $confirmPassword: String
		$photo: String
	) {
		createUser(
			firstName: $firstName
			lastName: $lastName
			email: $email
			description: $description
			city: $city
			# gender: $gender
			password: $password
			age: $age
			photo: $photo
		) {
			token
			user {
				_id
				email
			}
		}
	}
`;

export const LOGIN_USER = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				_id
				email
			}
		}
	}
`;

export const ADD_HOBBY = gql`
	mutation addHobby($userId: ID!, $hobbyId: ID!) {
		addHobby(userId: $userId, hobbyId: $hobbyId) {
			_id
			firstName
			email
			description
			city
			hobbies {
				_id
				hobbyName
			}
		}
	}
`;
export const ADD_FRIEND = gql`
	mutation addFriend($userId: ID!, $friendId: ID!) {
		addFriend(userId: $userId, friendId: $friendId) {
			_id
			firstName
			email
			description
			city
			hobbies {
				_id
				hobbyName
			}
			friends {
				_id
				firstName
			}
		}
	}
`;
export const REMOVE_HOBBY = gql`
	mutation removeHobby($userId: ID!, $hobbyId: ID!) {
		removeHobby(userId: $userId, hobbyId: $hobbyId) {
			_id
			hobbyName
		}
	}
`;
export const REMOVE_FRIEND = gql`
	mutation removeFriend($userId: ID!, $friendId: ID!) {
		removeFriend(userId: $userId, friendId: $friendId) {
			_id
			firstName
		}
	}
`;

export const UPDATE_USER = gql`
	mutation updateUser($userId: ID!, $firstName: String!, $lastName: String!, $email: String!, $city: String!, $age: Int, $description: String!) {
		updateUser(userId: $userId, firstName: $firstName, lastName: $lastName, email: $email, city: $city, age: $age, description: $description) {
			token
			user {
				_id
				email
			}
		}
	}
`;
