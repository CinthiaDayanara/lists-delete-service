const express = require('express');
const { deleteList } = require('../controllers/listsDeleteController');

const router = express.Router();

// Ruta para eliminar una lista
router.delete('/lists/:id', deleteList);

module.exports = router;
