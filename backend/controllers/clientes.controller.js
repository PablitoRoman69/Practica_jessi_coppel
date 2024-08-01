import { ModeloClientes } from "../models/clientes.model.js";

export const testClientes =() =>{
    console.log('Si funcina la conexion de clientes')
}

ModeloClientes.create({
    name: "Pablo"
})