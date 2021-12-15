//import all our seed files created
const seedUsers = require("./user-seeds");
const seedPosts = require("./post-seeds");
const seedComments = require("./comment-seeds");

//import sequalize
const sequalize = require("../config/connection");

//function to seed database and log to the console the success/failures
const seedAll = async () => {
  //awaits synchronization with the database
  await sequalize.sync({ forced: true });
  console.log("\n -----------DATABASE SYNCED--------------N");

  //seeds the users
  await seedUsers();
  console.log("\n -----------USERS SEEDED IN DB--------------N");

  //seeds the posts
  await seedPosts();
  console.log("\n -----------POSTS SEEDED IN DB--------------N");

  //seeds the comments
  await seedComments();
  console.log("\n -----------USERS SEEDED IN DB--------------N");

  //exit
  process.exit(0);
};

seedAll();
