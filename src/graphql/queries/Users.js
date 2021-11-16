import { gql } from "@apollo/client";

export const USER_DATA = gql`
  query($id:ID!){
    user(id:$id){
      id
      email
      firstName
      lastName
      dateofbirth
      mobilenumber
      profilePicture{
        url
      }
    }
  }
`;