const express = require('express');
const { deleteList } = require('../controllers/listsController');

const router = express.Router();

// Ruta para eliminar una lista
router.delete('/lists/:id', deleteList);

module.exports = router;
