import {Schema, model} from 'mongoose'

const esquemaproductos = new Schema({
    nombre:{
        type: String
    },
    tamaño:{
        type: String
    }
 })
 

export const ModeloProductos = new model ('Productos', esquemaproductos)