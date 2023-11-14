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

  get token() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }
}
