import { gql } from '@apollo/client';

export const USER_LOGIN = gql`
  mutation($password:String!,$identifier:String!){
    login(input:{identifier:$identifier,password:$password}){
      jwt
      user{
        id
        username
        email
        role{
          id
          name
        }
      }
    }
  }
`;