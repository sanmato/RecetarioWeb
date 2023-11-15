import {
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { servicioAuth } from './auth.service';
import { EMPTY, exhaustMap, take } from 'rxjs';

@Injectable()
export class servicioInterceptorAuth implements HttpInterceptor {
  constructor(private servicioAuth: servicioAuth) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return this.servicioAuth.user.pipe(
      take(1),
      exhaustMap((user) => {
        if (!user) {
          return next.handle(request);
        }

        const params = user.token
          ? new HttpParams().set('auth', user.token)
          : undefined;
        const requestModificada = request.clone({ params });
        return next.handle(requestModificada);
      })
    );
  }
}
