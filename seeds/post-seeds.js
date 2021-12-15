const sequalize = require("sequelize");
const { Post } = require("../models");

const newPost = [
  {
    title: "Too many hairballs",
    post_message:
      "all these hairballs are making my life very stressful, someone plz help",
    user_id: 1,
  },
  {
    title: "im innocent",
    post_message:
      "it was a setup and the dude i hired to kill carole baskin is a snitch!",
    user_id: 2,
  },
  {
    title: "the real batman",
    post_message:
      "follow @david_silveira_3 to find the real batman. be Brave, take the BAT pill.",
    user_id: 3,
  },
  {
    title: "The Big Brain",
    post_message:
      "yes i created javascript in 10 hours, was the cofounder of mozilla/firefox, and am the founder of Brave software. I am the shit",
    user_id: 4,
  },
  {
    title: "What crypto to invest in right now",
    post_message:
      "bat, basic attention token, is associated with the brave browser and will make u rich if u purchase under $2",
    user_id: 5,
  },
];

const postSeeds = () => Post.bulkCreate(newPost);

module.exports = postSeeds;
