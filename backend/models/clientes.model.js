import {Schema, model} from 'mongoose'

export const esquemaclientes = new Schema({
    name:{
        type: String
    }
 })
 

export const ModeloClientes = new model ('Clientes', esquemaclientes)