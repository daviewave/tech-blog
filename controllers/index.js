const router = require("express").Router();

const apiRoutes = require("./api/");
const homeRoutes = require("./homeRouter.js");
const dashboardRoutes = require("./dashboardRouter.js");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/dashboard", dashboardRoutes);

module.exports = router;
