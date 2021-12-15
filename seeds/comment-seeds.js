const { Comment } = require("../models");

const newComment = [
  {
    comment_text: "fluffy kitten likes the attention token",
    user_id: 1,
    post_id: 5,
  },
  {
    comment_text: "the tiger king thinks brendan eich is a legend",
    user_id: 2,
    post_id: 4,
  },
  {
    comment_text: "batman is brendan eich....",
    user_id: 3,
    post_id: 4,
  },
  {
    comment_text:
      "@david_silveira_3 is the goat for all Brave/Bat related content",
    user_id: 4,
    post_id: 3,
  },
  {
    comment_text:
      "hard to care about fluffy kittens when u can buy the attention token",
    user_id: 5,
    post_id: 1,
  },
  {
    comment_text: "i dont want ur blessing tiger king, buzz off",
    user_id: 4,
    post_id: 2,
  },
];

const commentSeeds = () => User.bulkCreate(newComment);

module.exports = commentSeeds;
