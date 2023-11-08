import { IReceta } from "./interfaces";

export class Receta implements IReceta{
  public nombre: string='';
  public descripcion: string='';
  public rutaImagen: string ='';

  // constructor(receta?:any){
  //   this.nombre= receta == undefined? '' : receta.nombre;
  //   this.descripcion= receta == undefined? '' : receta.descripcion;
  //   this.rutaImagen= receta == undefined? '': receta.rutaImagen;
  //   }

  constructor(nombre: string, descrip: string, rutaImg: string) {
    this.nombre = nombre;
    this.descripcion = descrip;
    this.rutaImagen = rutaImg;
  }
}

      