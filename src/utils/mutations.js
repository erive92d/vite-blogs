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

// export const ADD_USER = gql`
//   mutation addUser($username: String!, $email: String!, $password: String!) {
//     addUser(username: $username, email: $email, password: $password) {
//       token
//       user {
//         _id
//         username
//       }
//     }
//   }
// `;

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
