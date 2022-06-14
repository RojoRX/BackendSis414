const express=require('express');
const router = express.Router();

const productoController = require('../controllers/productocontrollers');

router.post('/', productoController.crearProducto);
router.get('/',productoController.obtenerProductos);



module.exports=router;