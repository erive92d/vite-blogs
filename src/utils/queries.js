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
        postAuthor
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
        postAuthor
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
        postAuthor
      }
    }
  }
`;

export const QUERY_POSTS = gql`
  query posts {
    posts {
      _id
      content
      title
      createdAt
      postAuthor
      image
    }
  }
`;

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
