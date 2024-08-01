import { ModeloEmpleados } from "../models/empleados.model.js";

export const testEmpleados =() =>{
    console.log('Si funcina la conexión de empleados')
}

ModeloEmpleados.create({
    name: "gilbertona"
})