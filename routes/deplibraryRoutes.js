const express = require("express");
const {
  getbooks,
  createbook,
  deletebook,
} = require("../controllers/deplibraryController");

const router = express.Router();

router.get("/", getbooks);
router.post("/", createbook);
router.delete("/:id", deletebook);

module.exports = router;
