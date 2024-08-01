import mongoose from 'mongoose'; 
import express from 'express'; 
import cors from 'cors';
import dotenv from 'dotenv';
import { testClientes } from './backend/controllers/clientes.controller.js';
import { testEmpleados } from './backend/controllers/empleados.controller.js';
import { testGerentes } from './backend/controllers/gerentes.controller.js';
import { testProductos } from './backend/controllers/productos.controller.js';
import { testPromociones } from './backend/controllers/promociones.controller.js';


dotenv.config();
mongoose.connect(process.env.pablin)
.then (()=> {
    console.log("Si funciona la base")
})
.catch((error)=>{
    console.log ("No funciona la base")
})

//servidor
const app =express(); 
app.use (cors());

app.listen(4005,()=>{ 
    console.log ('Funciona el servidor')
})

testClientes()
testEmpleados()
testGerentes()
testProductos()
testPromociones()