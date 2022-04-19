import { gql } from '@apollo/client';

export const CREATE_USER = gql`
    mutation createUser($email: String!, $password: String!, $firstName: String!, $lastName: String!, $gender: String, $city: String, $age: Int, $description: String) {
        createUser(email: $email, password: $password, firstName: $firstName, lastName: $lastName, gender: $gender, city: $city, age: $age, description: $description ) {
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