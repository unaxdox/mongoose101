const express = require('express');
const router = express.Router();
const ikasleController = require('../controllers/ikasle.controller');

// Ruta para obtener todos los estudiantes
router.get('/ikasleak', ikasleController.getIkasleak);

// Ruta para crear un nuevo estudiante
router.post('/ikasleak', ikasleController.createIkasle);

// Ruta para obtener un estudiante específico por ID
router.get('/ikasleak/:id', ikasleController.getIkasleById);

// Ruta para editar un estudiante por ID
router.put('/ikasleak/:id', ikasleController.editIkasle);

// Ruta para eliminar un estudiante por ID
router.delete('/ikasleak/:id', ikasleController.deleteIkasle);

module.exports = router;
