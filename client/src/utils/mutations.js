import { gql } from '@apollo/client';

export const CREATE_USER = gql`
    mutation createUser($email: String!, $password: String!, $gender: String!, $city: String, $age: Number, $description: String) {
        createUser(email: $email, password: $password, gender: $gender, city: $city, age: $age, description: $description ) {
            token
            user {
                _id
                firstName
            }
        }
    }
`