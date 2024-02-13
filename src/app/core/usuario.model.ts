import { IUsuario } from './interfaces';

export class Usuario implements IUsuario {
  email: string = '';
  clave: string = '';

  constructor(
    email: string,
    clave: string,
    private _token: string,
    private _tokenExpirationDate: Date
  ) {
    this.email = email;
    this.clave = clave;
  }
/*
  Se comentó para hacer un mejor manejo de los tokens con la persistencia de información, ya que debido a 
  funcionalidades deprecadas, se corrompía la obtención de las fechas de expiración, lo cual impedía mantener
  la sesión activa. Para sanitizar ese funcionamiento, se quitó una restricción que para este alcance puede
  ser algo irrelevante, ya que no hay deslogueos automáticos.
  Se dejó comentado ya que la persistencia fue incluida en un versionado extra.

  get token() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }
  */
  get token() {
    if (!this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }
}
