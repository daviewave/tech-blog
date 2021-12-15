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

  //code to edit posts based on id
  router.get("/edit/:id", withAuth, (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ["id", "title", "post_message", "created_at"],
      include: [
        {
          model: Comment,
          attributes: [
            "id",
            "comment_text",
            "post_id",
            "user_id",
            "created_at",
          ],
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
      .then((db_posts) => {
        if (!db_posts) {
          res
            .status(404)
            .json({ message: "no posts associated with the ID entered" });
          return;
        }

        const currentPost = db_posts.get({ plain: true });

        res.render("edit-post", {
          currentPost,
          loggedIn: true,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  //create a new post
  router.get("/create/", withAuth, (req, res) => {
    Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      attributes: ["id", "title", "post_message", "created_at"],
      include: [
        {
          model: Comment,
          attributes: [
            "id",
            "comment_text",
            "post_id",
            "user_id",
            "created_at",
          ],
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
      .then((db_posts) => {
        const posts = db_posts.map((currentPost) =>
          currentPost.get({ plain: true })
        );
        res.render("create-post", { posts, loggedIn: true });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
});

module.exports = router;
