import { IIngrediente } from "./interfaces";

export class Ingrediente implements IIngrediente{
  public nombre: string | undefined;
  public cantidad: number | undefined;
  public unidad: string | undefined;

  constructor(nombre: string | undefined, cantidad: number | undefined, unidad: string | undefined) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.unidad= unidad;
  }
}
