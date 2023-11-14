import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

//ESTA INTERFAZ REPRESENTA LOS TIPOS DE CARGA DE RESPUESTA EN FIREBASE, POR ESO ESTÁ ACÁ.
interface AuthDatosResponse {
  kind: string;
  idToken: string;
  email: string;
  refreshToklen: string;
  expirenIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class servicioAuth {
  constructor(private http: HttpClient) {}

  alta(email: string, password: string) {
    return this.http
      .post<AuthDatosResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAifbUtVfxhwZBox5h0vDtB5vMcDzNCBC0',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(catchError(this.manejarError));
  }

  logueo(email: string, password: string) {
    return this.http
      .post<AuthDatosResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAifbUtVfxhwZBox5h0vDtB5vMcDzNCBC0',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(catchError(this.manejarError));
  }

  private manejarError(errorResponse: HttpErrorResponse) {
    console.log(errorResponse);
    let mensajeError = 'Un error inesperado ha ocurrido!';
    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(() => new Error(mensajeError));
    }
    switch (errorResponse?.error?.error?.message) {
      case 'INVALID_LOGIN_CREDENTIALS':
        mensajeError = 'Credenciales Incorrectas.';
        break;
      case 'EMAIL_EXISTS':
        mensajeError = 'El Usuario de email ya se encuentra registrado.';
        break;
    }
    return throwError(() => new Error(mensajeError));
  }
}
