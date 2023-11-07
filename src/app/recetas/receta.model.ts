export class Receta {
  public nombre: string;
  public descripcion: string;
  public rutaImagen: string;

  constructor(nombre: string, descrip: string, rutaImg: string) {
    this.nombre = nombre;
    this.descripcion = descrip;
    this.rutaImagen = rutaImg;
  }
}
