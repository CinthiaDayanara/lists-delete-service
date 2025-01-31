const express = require("express");
const { deleteList } = require("../controllers/listsDeleteController");

const router = express.Router();

router.delete("/:id", deleteList);

module.exports = router;
