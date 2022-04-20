import { gql } from "@apollo/client";

export const CREATE_USER = gql`
<<<<<<< HEAD
    mutation createUser($email: String!, $password: String!, $firstName: String!, $lastName: String!, $gender: String, $city: String, $age: Int, $description: String) {
        createUser(email: $email, password: $password, firstName: $firstName, lastName: $lastName, gender: $gender, city: $city, age: $age, description: $description ) {
            
                _id
                email  
        }
=======
  mutation createUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $description: String
    $city: String!
    # $gender: String!
    $age: Int
    $password: String!
  ) # $confirmPassword: String
  {
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
      _id
      email
>>>>>>> origin
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
