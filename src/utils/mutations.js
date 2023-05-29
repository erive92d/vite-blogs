import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $name: String!
    $email: String!
    $password: String!
    $profilePic: String!
  ) {
    addUser(
      name: $name
      email: $email
      password: $password
      profilePic: $profilePic
    ) {
      token
      user {
        _id
        name
        profilePic
      }
    }
  }
`;

// export const ADD_POST = gql`
//   mutation addPost($title: String!, $content: String!, $image: String!) {
//     addPost(title: $title, content: $content, image: $image) {
//       _id
//       title
//       content
//       image
//       createdAt
//       comments {
//         _id
//         commentText
//         commentAuthor
//       }
//     }
//   }
// `;

// export const ADD_COMMENT = gql`
//   mutation addComment(
//     $thoughtId: ID!
//     $commentText: String!
//     $commentAuthor: String!
//   ) {
//     addComment(
//       thoughtId: $thoughtId
//       commentText: $commentText
//       commentAuthor: $commentAuthor
//     ) {
//       _id
//       thoughtText
//       thoughtAuthor
//       createdAt
//       comments {
//         _id
//         commentText
//         createdAt
//       }
//     }
//   }
// `;
