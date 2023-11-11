import { Ingrediente } from "./ingrediente.model";

export interface IReceta{
    nombre: string;
    descripcion: string;
    rutaImagen: string;
    ingredientes: Ingrediente[];

}

export interface IIngrediente{
    nombre: string;
    monto: number;
}