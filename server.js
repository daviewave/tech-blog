const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

const sequalize = require("./config/connection");
const SequalizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequalizeStore({
    db: sequalize,
  }),
};

app.use(session(sess));

app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

sequalize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
