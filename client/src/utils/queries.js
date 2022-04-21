import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
	query users {
		users {
			_id
			firstName
			lastName
		}
	}
`;

export const QUERY_USER = gql`
  query user($userId: ID!) {
    user(userId: $userId) {
      _id
      firstName
      lastName
      email
      gender
      city
      age
      description
      hobbies {
          _id
          hobbyName
      }
      photo
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      firstName
      lastName
      email
      # gender
      city
      age
      description
      hobbies {
          _id
          hobbyName
      }
      photo
    }
  }
`;

export const QUERY_HOBBIES = gql`
	query hobbies {
		hobbies {
			_id
			hobbyName
		}
	}
`;
