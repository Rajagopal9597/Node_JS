const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const blogSchema =  new Schema({
  title : {type: String, required: true},
  body: {type: String},
  user: {type: ObjectId, ref: "User"}
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;