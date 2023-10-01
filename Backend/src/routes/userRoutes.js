var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');

router
  .route('/')
  .get(userController.obtenerusers)
  .post(userController.nuevouser);

router
  .route('/:id')
  .get(userController.obteneruser)
  .put(userController.find, userController.editaruser)
  .delete(userController.eliminaruser);

module.exports = router;
