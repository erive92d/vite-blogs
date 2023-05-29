import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      name
      email
      profilePic
      posts {
        title
        content
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      profilePic
      email
      posts {
        title
        content
        createdAt
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($id: String!) {
    user(id: $id) {
      _id
      name
      email
      profilePic
      posts {
        title
        content
        createdAt
      }
    }
  }
`;

// export const QUERY_THOUGHTS = gql`
//   query getThoughts {
//     thoughts {
//       _id
//       thoughtText
//       thoughtAuthor
//       createdAt
//     }
//   }
// `;

// export const QUERY_SINGLE_THOUGHT = gql`
//   query getSingleThought($thoughtId: ID!) {
//     thought(thoughtId: $thoughtId) {
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
