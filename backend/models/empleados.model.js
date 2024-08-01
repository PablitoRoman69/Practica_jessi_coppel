import {Schema, model} from 'mongoose'

export const esquemaempleados = new Schema({
    name:{
        type: String
    }
 })
 

export const ModeloEmpleados = new model ('Empleados', esquemaempleados)