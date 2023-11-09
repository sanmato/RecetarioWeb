import { IIngrediente } from "./interfaces";

export class Ingrediente implements IIngrediente{
  public nombre: string;
  public monto: number;

  constructor(nombre: string, monto: number) {
    this.nombre = nombre;
    this.monto = monto;
  }
}
