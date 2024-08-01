import { ModeloProductos } from "../models/productos.model.js";

export const testProductos =() =>{
    console.log('Si funcina la conexion de los productos')
}

ModeloProductos.create({
    nombre: "libreta",
    tamaño: "grande"
})