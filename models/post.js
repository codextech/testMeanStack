
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    comments: [
        {
          content: String,
        }
      ]
});




const Post = mongoose.model('posts', postSchema);

module.exports = Post;