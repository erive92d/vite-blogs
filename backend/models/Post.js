const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");
const postSchema = new Schema({
  title: {
    type: String,
    required: "You need to leave a Title!",
    minlength: 1,
    maxlength: 120,
    trim: true,
  },
  content: {
    type: String,
    required: "You need to leave a Post!",
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  likes: [
    {
      name: {
        type: String,
        required: true,
      },
      userId: {
        type: String,
        required: true,
      },
    },
  ],
  // edited postAuthor
  postAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    data: Buffer,
    type: String,
    trim: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      //edited commentAuthor
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Post = model("Post", postSchema);

module.exports = Post;
