const express =require ('express');

const app = express();

app.get('/',(req,res)=>{return res.send('hola mundo !!!!!')})

//CRUD

app.get('/productos',(req,res)=>{
    res.send('lista de productos');
})

app.post('productos')

app.listen(4000,()=.{console.log("servidor en linea!")})