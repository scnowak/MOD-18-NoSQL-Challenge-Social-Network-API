const { User, Thought } = require("../models");

// /api/users
const userController = {
  //   GET all users
  getUsers(req, res) {
    User.find({})
      .sort({_id: -1})
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // GET single user by id and populate friend and thought info data
  getSingleUser({params}, res) {
    User.findOne({ _id: params.userId })
      .populate("friends")
      .populate("thoughts")
      .then((dbUserData) => {
        if (!dbUserData) {
        res.status(404).json({ message: "No user was found with that id" });
        return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // POST new user

  createUser({body}, res) {
    User.create(body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) =>  res.status(500).json(err));
       
    
  },

  // PUT to update user by _id

  updateUser({params, body}, res) {
    User.findOneAndUpdate(
      { _id: params.userId }, body,{
        new: true,
        runValidators: true,
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user was found with that id" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // DELETE to remove user by _id

  deleteUser({params}, res) {
    User.findOneAndDelete({ _id: params.userId })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user was found with that id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  //POST to add new friend to user's friend list

  addFriend({params, body}, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $push: { friends: params.friendId } },
      { new: true, runValidators: true})
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user was found with that id" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },

  //DELETE to remove friend from user's friend list

  removeFriend({params}, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $pull: { friends: params.friendId } },
      { new: true }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: "No user was found with that id!" });
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};

//

module.exports = userController;
