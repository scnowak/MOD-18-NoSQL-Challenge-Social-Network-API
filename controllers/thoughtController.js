const { Thought, User } = require("../models");

const thoughtController = {
  // GET all thoughts
  getAllThoughts(req, res) {
    Thought.find({})

      .sort({ _id: -1 })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  //GET one thought by _id

  getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.thoughtId })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No thought was found by that id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  // POST to create a new thought

  addThought({ params, body }, res) {
    Thought.create(body)
      .then(({ _id }) => {
        console.log(_id);
        return User.findOneAndUpdate(
          { _id: body.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        console.log(dbUserData);
        if (!dbUserData) {
          res.status(404).json({ message: "No user was found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },

  //PUT to update a single thought by _id

  updateThought({ params, body }, res) {
    console.log(params.thoughtId);
    console.log(body);
    Thought.findOneAndUpdate({ _id: params.thoughtId }, body, {
      new: true,
      runValidators: true,
    })
      .then((dbUserData) => {
        if (!dbUserData) {
          res
            .status(404)
            .json({ message: "No thought was found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },

  //DELETE to remove a thought by _id

  removeThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.thoughtId })
      .then((deletedThought) => {
        if (!deletedThought) {
          //Sends the JSON-formatted response as the body of the HTTP response.
          return res
            .status(404)
            .json({ message: "No thought was found with this id!" });
        }
        console.log(deletedThought);
        User.findOneAndUpdate(
          { username: deletedThought.username },
          { $pull: { thoughts: params.thoughtId } },
          { new: true }
        ).then((dbUserData) => {
          if (!dbUserData) {
            res
              .status(404)
              .json({ message: "No user was found with this id!" });
            return;
          }
          res.json(dbUserData);
        });
      })
      .catch((err) => res.json(err));
  },

  //POST to create a single reaction

  addReaction({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $push: { reactions: body } },
      { new: true, runValidators: true }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user was found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },

  //DELETE to get a reaction and remove it by reactionId

  removeReaction({ params }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      // remove specific reply from replies array
      // where replyId matches value of params.replyId passed in from route
      { $pull: { reactions: { reactionId: params.reactionId } } },
      { new: true }
    )
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.json(err));
  },
};

module.exports = thoughtController;
