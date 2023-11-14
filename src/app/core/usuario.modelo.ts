import { IUsuario } from "./interfaces";

export class Usuario implements IUsuario{

    email: string='';
    clave: string='';

    constructor(email: string, clave: string){
        this.email=email;
        this.clave=clave;
    }
}