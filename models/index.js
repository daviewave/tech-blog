//import models created
const User = require("./User");
const Comment = require("./Comment");
const Post = require("./Post");

//create associations between models and deals with deletion scenarios
//user can have many posts, gives foreignKey 'user_id' to Post to ensure the user who makes the post is known
User.hasMany(Post, {
  foreignKey: "user_id",
});
Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

//a comment on a post needs to identify the user who makes the post
Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});
//a comment also needs to be correctly identified with the post that is being commented on
Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "SET NULL",
});
//users can have several comments and indivdual posts can have several comments
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});
Post.hasMany(Comment, {
  foreignKey: "post_id",
});

module.exports = { User, Post, Comment };
