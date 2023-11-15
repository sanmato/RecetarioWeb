import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, catchError, tap, throwError, BehaviorSubject } from 'rxjs';
import { Usuario } from '../core/usuario.model';

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
  user = new BehaviorSubject<Usuario | null>(null);

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
      .pipe(
        catchError(this.manejarError),
        tap((responseData) => {
          this.manejarAutenticacion(
            responseData.email,
            responseData.localId,
            responseData.idToken,
            +responseData.expirenIn
          );
        })
      );
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
      .pipe(
        catchError(this.manejarError),
        tap((responseData) => {
          this.manejarAutenticacion(
            responseData.email,
            responseData.localId,
            responseData.idToken,
            +responseData.expirenIn
          );
        })
      );
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

  private manejarAutenticacion(
    email: string,
    userId: string,
    token: string,
    expirenIn: number
  ) {
    const fechaExpiracion = new Date(new Date().getTime() + expirenIn * 1000);
    const user = new Usuario(email, userId, token, fechaExpiracion);
    this.user.next(user);
  }
}
