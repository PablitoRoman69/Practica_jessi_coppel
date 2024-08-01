import { modeloGerentes } from "../models/gerentes.model.js";

export const testGerentes = () =>{
    console.log("funciona el controlador de gerentes")
}

modeloGerentes.create({
    name:"Pricha"
})