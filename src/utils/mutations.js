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

export const ADD_POST = gql`
  mutation addPost($title: String!, $content: String!, $image: String,  $postAuthor: String) {
    addPost(title: $title, content: $content, image: $image, postAuthor: $postAuthor) {
      _id
      title
      postAuthor
      content
      image
      createdAt

      
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment(
    $postId: String!
    $commentText: String!
    $commentAuthor: String!
  ) {
    addComment(
      postId: $postId
      commentText: $commentText
      commentAuthor: $commentAuthor
    ) {
    
      title
      postAuthor
      createdAt
      comments {
        commentAuthor
        commentText
        createdAt
      }
    }
  }
`;
