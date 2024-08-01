import {Schema, model} from 'mongoose'

export const esquemapromociones = new Schema({ //modelo
    precio:{
        type: Number
    },
    descuento:{
        type: String
    }
 })
 

 export const ModeloPromociones = new model ('Promociones', esquemapromociones)