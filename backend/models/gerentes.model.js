import { esquemaempleados } from "./empleados.model.js";
import {model} from 'mongoose'

export const modeloGerentes = new model('Gerentes', esquemaempleados)