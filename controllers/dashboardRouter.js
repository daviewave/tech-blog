//import required packages
const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

//get posts that will go on dashboard
router.get("/", withAuth, (req, res) => {
  Post.findAll({
    where: {
      //uses the current user_id for the session
      user_id: req.session.user_id,
    },
    attributes: ["id", "title", "post_message", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    //serialize data and give to handlebars template
    .then((db_posts) => {
      const posts = db_posts.map((currentPost) =>
        currentPost.get({ plain: true })
      );
      res
        .render("dashboard", {
          posts,
          loggedIn: true,
          username: req.session.username,
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
    });
});
