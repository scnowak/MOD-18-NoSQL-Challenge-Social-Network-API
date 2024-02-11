const router = require("express").Router();
const {
  getUsers,  //getAllUsers
  getSingleUser,  //getUserById
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

// /api/users
//GET  POST
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
//GET  PUT  DELETE
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
//POST  DELETE
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
