import { IIngrediente } from "./interfaces";

export class Ingrediente implements IIngrediente{
  public nombre: string;
  public cantidad: number;
  public unidad: string;

  constructor(nombre: string, cantidad: number, unidad: string) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.unidad= unidad;
  }
}
