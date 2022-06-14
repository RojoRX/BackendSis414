const express=require('express');
const router = express.Router();

router.post('/', ()=>{
    console.log('Creando Producto');
});

module.exports=router;