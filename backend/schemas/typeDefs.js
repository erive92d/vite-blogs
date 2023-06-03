const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
    posts: [Post]
    profilePic: String
  }
  type Post {
    _id: ID
    title: String
    content: String
    createdAt: String
    postAuthor: String
    image: String
    comments: [Comment]
    likes: [Like]
  }

  type Like {
    name: String
    userId: String
  }

  type Comment {
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    me: User
    posts: [Post]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(
      email: String!
      password: String!
      name: String!
      profilePic: String!
    ): Auth
    addPost(title: String, content: String!, image: String, postAuthor: String): Post
    deletePost(postId: String): Post
    addComment(postId: String!, commentText: String!): Post
    addProfilePic(profileLink: String): User
    addLike(postId: String): Post
  }
`;

module.exports = typeDefs;
