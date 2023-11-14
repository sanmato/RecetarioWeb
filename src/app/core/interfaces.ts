import { Ingrediente } from "./ingrediente.model";

export interface IReceta{
    nombre: string;
    descripcion: string;
    rutaImagen: string;
    ingredientes: Ingrediente[];

}

export interface IIngrediente{
    nombre: string |undefined;
    cantidad: number | undefined;
    unidad: string | undefined;
}

export interface IUsuario{
    email: string;
    clave: string;
}