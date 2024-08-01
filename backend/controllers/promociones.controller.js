import { ModeloPromociones } from "../models/promociones.model.js";

export const testPromociones = () =>{
    console.log('funciona el controlador de promos')
}

ModeloPromociones.create({
    precio: 2000,
    fechaLLegada: "50 %"
})