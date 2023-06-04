const { User, Post } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    users: async () => {
      // Populate the classes and professor subdocuments when querying for schools
      return User.find({}).populate("posts");
    },
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId }).populate("posts")
    },
    posts: async () => {
      // Populate the professor subdocument when querying for classes
      return Post.find();
    },
    post: async (parent, { postId }) => {
      const postDetail = Post.findOne(
        {
          _id: postId
        }
      )
      return postDetail
    },
    me: async (parent, args, context) => {
      console.log(context);
      if (context.user) {
        console.log(context.user);
        return User.findOne({ _id: context.user._id }).populate("posts");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addUser: async (parent, { password, name, email, profilePic }) => {
      const user = await User.create({ name, password, email, profilePic });

      const token = signToken(user);
      return { token, user };
    },
    addPost: async (parent, { title, content, image, postAuthor }, context) => {
      if (context.user) {
        console.log(context.user);

        const newPost = await Post.create({ title, content, image, postAuthor: context.user.email });
        console.log(newPost);

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { posts: newPost._id } }
        );

        return Post;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    deletePost: async (parent, { postId }) => {
      await Post.findOneAndDelete({ _id: postId });
      return Post;
    },
    addComment: async (
      parent,
      { postId, commentText, commentAuthor },
      context
    ) => {
      if (context) {
        return Post.findOneAndUpdate(
          { _id: postId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.email },
            },
          },
          {
            new: true,
          }
        );

        return Post;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addLike: async (parent, { postId }, context) => {
      if (context.user) {
        console.log(context);
        const userInfo = context.user.email;
        console.log(userInfo);
        const likedPost = await Post.findOneAndUpdate(
          { _id: postId },
          { $push: { likes: { name: userInfo, userId: context.user._id } } },
          { new: true }
        );
        return likedPost;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    addProfilePic: async (parent, { profileLink }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $set: { profilePic: profileLink },
          },
          {
            new: true,
          }
        );
      }
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
