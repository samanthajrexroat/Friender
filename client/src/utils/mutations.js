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
    $password: String! # $confirmPassword: String
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

// export const ADD_HOBBY = gql`
//   mutation addHobby($userId: ID!)
// `

// 62608db166df9f12dec0e8dd