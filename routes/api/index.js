const router = require("express").Router();
const thoughtsRoutes = require("./thoughts-Routes");
const userRoutes = require("./users-Routes");

router.use("/thoughts", thoughtsRoutes);
router.use("/users", userRoutes);

module.exports = router;
