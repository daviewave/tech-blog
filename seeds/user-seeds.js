const sequalize = require("sequelize");
const { User, Post } = require("../models");

const users = [
  {
    username: "flufflykitten21",
    email: "fluffkitt@gmail.com",
    password: "pass12345",
  },
  {
    username: "tigerking",
    email: "tigerking@gmail.com",
    password: "pass12345",
  },
  {
    username: "batman",
    email: "batman@gmail.com",
    password: "pass12345",
  },
  {
    username: "brendaneich",
    email: "brave@brave.com",
    password: "pass12345",
  },
  {
    username: "attentiontoken",
    email: "attentiontoken@gmail.com",
    password: "pass12345",
  },
];

const userSeeds = () => User.bulkCreate(users, { individualHooks: true });

module.exports = userSeeds;
