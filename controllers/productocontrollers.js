const Productos=require("../models/Productos");

exports.crearProducto=async(req,res)=>{
    try{
        let producto;
        producto= new Productos(req.body);

        await producto.save();
        res.send(producto);
    }   
    catch(Error){
        console.log(Error);
        res.status(500).send('Vaya Parece que ha habido un error');
    }
};

exports.obtenerProductos=async(req,res)=>{
    try{
        const productos= await Productos.find();
        res.json(productos);
    }   
    catch(Error){
        console.log(Error);
        res.status(500).send('Vaya Parece que ha habido un error');
    }
}