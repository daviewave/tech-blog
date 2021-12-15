const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

const sequalize = require("./config/connection");
const SequalizeStore = require("connect-session-sequelize")(session.Store);
