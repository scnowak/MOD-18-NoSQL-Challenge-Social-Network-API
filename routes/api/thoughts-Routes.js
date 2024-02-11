const router = require("express").Router();

const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtController");

// /api/thoughts/
//GET   POST

router.route("/").get(getAllThoughts).post(addThought);

// /api/thoughts/:id
//GET  PUT  DELETE

router
  .route("/:thoughtId")
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

// /api/thoughts/:thoughtId/reactions
//POST

router.route("/:thoughtId/reactions").post(addReaction);

// /api/thoughts/:thoughtId/reactions
//DELETE

router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
